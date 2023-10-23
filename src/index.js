const fs = require("fs");
const path = require("path");
const { Client, LocalAuth, MessageTypes } = require("whatsapp-web.js");
const repl = require("repl");
// eslint-disable-next-line import/no-extraneous-dependencies
const qrcode = require("qrcode-terminal");

const StringUtil = require("./util/StringUtil");
const PhoneService = require("./service/PhoneService");
const MessageService = require("./service/MessageService");
const { BYE } = require("./constants/MessageOptions");

const basePath = path.join(__dirname, "entity", "phones.json");
// eslint-disable-next-line import/no-dynamic-require
const phoneBase = require(basePath);

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    // args: ['--proxy-server=proxy-server-that-requires-authentication.example.com'],
    headless: false,
  },
});

client.initialize();

client.on("loading_screen", (percent, message) => {
  console.log("LOADING SCREEN", percent, message);
});

client.on("qr", (qr) => {
  console.log("QR RECEIVED", qr);
  qrcode.generate(qr, { small: true }, (generated) => {
    console.log(generated);
  });
});

client.on("authenticated", () => {
  console.log("AUTHENTICATED");
});

client.on("auth_failure", (msg) => {
  console.error("AUTHENTICATION FAILURE", msg);
});

client.on("ready", () => {
  console.log("\n__________________________________________________");
  console.log("||||                                           |||");
  console.log("||||WHATSAPP CONECTADO! <<RECEBENDO MENSAGENS>>|||");
  console.log("||||                                           |||");
  console.log("||||___________________________________________|||");

  const shell = repl.start("wwebjs> ");
  shell.context.client = client;
  shell.on("exit", async () => {
    phoneBase.sessionNumbers = [];

    fs.writeFileSync(basePath, JSON.stringify(phoneBase), "utf-8");
    await client.destroy();
  });
});

const validBotMessage = (chat, message) =>
  chat.isGroup || message.isStatus || message.type !== MessageTypes.TEXT;

const messageService = new MessageService(client);

function isNewSession(penultimateMessage, message) {
  return (
    penultimateMessage !== null &&
    penultimateMessage?.body !== message.body &&
    penultimateMessage?.timestamp === message.timestamp
  );
}

client.on("message", (message) => {
  let isBlockedPhone = phoneBase.blockedNumbers.includes(message.from);
  const isExistSession = phoneBase.sessionNumbers.includes(message.from);

  const limitIndex = 3;
  const fifteenMinutes = 15 * 60;
  const clientName = message?._data?.notifyName;

  client.getChatById(message.from).then((chat) => {
    if (validBotMessage(chat, message)) {
      return;
    }

    chat.fetchMessages({ limit: limitIndex }).then((messages) => {
      const penultimateMessage = messages[messages.length - 2];
      const lastMessageAt = penultimateMessage?.timestamp;
      const now = Math.floor(new Date().getTime() / 1000);

      if (isNewSession(penultimateMessage, message) && !isExistSession) {
        messageService.sendWelcomeMessage(clientName, message.from);
        messageService.sendOptions(message.from);
        PhoneService.startClientSession(message);
        PhoneService.unlockPhoneNumber(message);
        return;
      }

      if (now - lastMessageAt > fifteenMinutes && !isExistSession) {
        messageService.sendWelcomeMessage(clientName, message.from);
        messageService.sendOptions(message.from);
        PhoneService.unlockPhoneNumber(message);
        PhoneService.startClientSession(message);
        isBlockedPhone = false;
        return;
      }

      if (isBlockedPhone) {
        return;
      }

      if (isExistSession && StringUtil.containsFirstOption(message.body)) {
        messageService.responseFirstOption(message.from);
        return;
      }

      if (isExistSession && StringUtil.containsSeccondOption(message.body)) {
        messageService.responseSeccondOption(message.from);
        return;
      }

      if (isExistSession && StringUtil.containsThirdOption(message.body)) {
        messageService.responseThirdOption(message.from);
        return;
      }

      if (isExistSession && StringUtil.containsFourthOption(message.body)) {
        messageService.responseFourthOption(message.from);
        return;
      }

      if (isExistSession && StringUtil.containsFifthOption(message.body)) {
        messageService.responseFifthOption(message.from);
        PhoneService.blockPhoneNumber(message);
        return;
      }

      if (isExistSession && StringUtil.containsSixthOption(message.body)) {
        messageService.responseSixthOption(message.from);
        return;
      }

      if (StringUtil.containsBye(message.body)) {
        message.reply(BYE).then();
        PhoneService.unlockPhoneNumber(message);
        PhoneService.cleanClientSession(message);
        return;
      }

      if (!isBlockedPhone && isExistSession) {
        messageService.sendNoUnderstand(message, clientName);
      }
    });
  });
});
