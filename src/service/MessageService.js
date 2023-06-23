const {
  WELCOME,
  REMEMBER,
  OPTIONS,
  FIRST_OPTION_RESPONSE,
  SECCOND_OPTION_RESPONSE,
  THIRD_OPTION_RESPONSE,
  FOURTH_OPTION_RESPONSE,
  FIFTH_OPTION_RESPONSE,
  BYE,
  NO_UNDERSTAND,
  NO_SESSION_FOR_CLIENT,
} = require("../constants/MessageOptions");

const PhoneService = require("./PhoneService");

class MessageService {
  constructor(client) {
    this.client = client;
  }

  sendWelcomeMessage(clientName, from) {
    this.client.sendMessage(from, `${WELCOME}`).then();
  }

  sendRemember(from) {
    this.client.sendMessage(from, `${REMEMBER}`).then();
  }

  sendOptions(from) {
    this.client.sendMessage(from, OPTIONS).then();
  }

  responseFirstOption(from) {
    this.client.sendMessage(from, FIRST_OPTION_RESPONSE).then();
  }

  responseSeccondOption(from) {
    this.client.sendMessage(from, SECCOND_OPTION_RESPONSE).then();
  }

  responseThirdOption(from) {
    this.client.sendMessage(from, THIRD_OPTION_RESPONSE).then();
  }

  responseFourthOption(from) {
    this.client.sendMessage(from, FOURTH_OPTION_RESPONSE).then();
  }

  responseFifthOption(from) {
    this.client.sendMessage(from, FIFTH_OPTION_RESPONSE).then();
  }

  sendBye(from) {
    this.client.sendMessage(from, BYE).then();
  }

  sendNoUnderstand(message, name) {
    message.reply(`${name} ${NO_UNDERSTAND}`).then();
    this.sendOptions(message.from);
  }

  sendNoSessionForClient(name, message) {
    const { to, from } = message;

    this.client
      .sendMessage(to, `${NO_SESSION_FOR_CLIENT}, ${name} | ${from}`)
      .then(() => {
        PhoneService.cleanClientSession(message);
      });
  }
}

module.exports = MessageService;
