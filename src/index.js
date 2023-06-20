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
});

const validBotMessage = (chat, message) =>
  chat.isGroup || message.isStatus || message.type !== MessageTypes.TEXT;

console.log("Inicializando...");

client.initialize().then(() => {
  console.log("ok");
});

const messageService = new MessageService(client);

client.on("qr", (qr) => {
  console.log("Please scan the QR code on the browser.");
  qrcode.generate(qr, { small: true }, (generated) => {
    console.log(generated);
  });
});

client.on("ready", () => {
  const shell = repl.start("wwebjs> ");
  shell.context.client = client;
  shell.on("exit", async () => {
    phoneBase.sessionNumbers = [];

    fs.writeFileSync(basePath, JSON.stringify(phoneBase), "utf-8");
    await client.destroy();
  });
});

client.on("message", (message) => {
  let isBlockedPhone = phoneBase.blockedNumbers.includes(message.from);
  const isExistSession = phoneBase.sessionNumbers.includes(message.from);

  const limitIndex = 3;
  const fiveHours = 5 * 60 * 60; // multiplicar por 5
  const clientName = message?._data?.notifyName;

  client.getChatById(message.from).then((chat) => {
    if (validBotMessage(chat, message)) {
      return;
    }

    chat.fetchMessages({ limit: limitIndex }).then((messages) => {
      const penultimateMessage = messages[messages.length - 2];

      if (penultimateMessage === null) {
        messageService.sendWelcomeMessage(clientName, message.from);
        messageService.sendOptions(message.from);
        PhoneService.startClientSession(message);
        return;
      }

      const lastMessageAt = penultimateMessage.timestamp;
      const now = Math.floor(new Date().getTime() / 1000);

      if (now - lastMessageAt > fiveHours && !isExistSession) {
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
      /*
      Desativado no lord
      if (isExistSession && StringUtil.containsFourthOption(message.body)) {
        messageService.responseFourthOption(message.from);
        return;
      }

      if (isExistSession && StringUtil.containsFifthOption(message.body)) {
        messageService.responseFifthOption(message.from);
        PhoneService.blockPhoneNumber(message);
        return;
      }

 */

      if (!isBlockedPhone && StringUtil.containsBye(message.body)) {
        message.reply(BYE).then();
        PhoneService.blockPhoneNumber(message);
        return;
      }

      if (!isBlockedPhone && isExistSession) {
        messageService.sendNoUnderstand(message, clientName);
        return;
      }

      messageService.sendNoSessionForClient(clientName, message);
    });
  });
});
