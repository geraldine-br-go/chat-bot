const fs = require("fs");
const path = require("path");

const basePath = path.join(__dirname, "../entity", "phones.json");
// eslint-disable-next-line import/no-dynamic-require
const phoneBase = require(basePath);

class PhoneService {
  static blockPhoneNumber(message) {
    phoneBase.blockedNumbers.push(message.from);
    fs.writeFileSync(basePath, JSON.stringify(phoneBase), "utf-8");
  }

  static unlockPhoneNumber(message) {
    phoneBase.blockedNumbers = phoneBase.blockedNumbers.filter(
      (it) => it !== message.from
    );
    fs.writeFileSync(basePath, JSON.stringify(phoneBase), "utf-8");
  }

  static startClientSession(message) {
    phoneBase.sessionNumbers.push(message.from);
    fs.writeFileSync(basePath, JSON.stringify(phoneBase), "utf-8");
  }

  static cleanClientSession(message) {
    phoneBase.sessionNumbers = phoneBase.sessionNumbers.filter(
      (it) => it !== message.from
    );
    fs.writeFileSync(basePath, JSON.stringify(phoneBase), "utf-8");
  }
}

module.exports = PhoneService;
