const messageOptions = require("../constants/MessageOptions");

class StringUtil {
  static removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  static removeAccentAndLowerCase(str) {
    return this.removeAccents(str.toLowerCase());
  }

  static containsFirstOption(str) {
    const strAjust = this.removeAccentAndLowerCase(str);
    return messageOptions.FIRST_OPTION.includes(strAjust);
  }

  static containsSeccondOption(str) {
    const strAjust = this.removeAccentAndLowerCase(str);
    return messageOptions.SECCOND_OPTION.includes(strAjust);
  }

  static containsThirdOption(str) {
    const strAjust = this.removeAccentAndLowerCase(str);
    return messageOptions.THIRD_OPTION.includes(strAjust);
  }

  static containsFourthOption(str) {
    const strAjust = this.removeAccentAndLowerCase(str);
    return messageOptions.FOURTH_OPTION.includes(strAjust);
  }

  static containsFifthOption(str) {
    const strAjust = this.removeAccentAndLowerCase(str);
    return messageOptions.FIFTH_OPTION.includes(strAjust);
  }

  static containsSixthOption(str) {
    const strAjust = this.removeAccentAndLowerCase(str);
    return messageOptions.SIXTH_OPTION.includes(strAjust);
  }

  static containsBye(str) {
    const strAjust = this.removeAccentAndLowerCase(str);
    return messageOptions.EXIT === strAjust;
  }
}

module.exports = StringUtil;
