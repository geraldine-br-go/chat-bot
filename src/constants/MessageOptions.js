const messageOptions = {
  WELCOME:
    "Bem vindo a Spezialle Pizzaria, eu sou o *Davi*, especialista em atendimento rápido.\n" +
    "Já vou te passar as opções disponíveis por aqui.",

  OPTIONS:
    "Digite o número da opção desejada:\n" +
    "1 - Cardápio.\n" +
    "2 - Link para pedido.\n" +
    "3 - Localização.\n" +
    "4 - Horário de atendimento.\n" +
    "5 - Falar com atendente",

  NO_UNDERSTAND:
    "eu sou um robô." +
    "\nPreciso que me ajude escolhendo uma das alternativas." +
    "\nOu digite *sair* para encerrar!",

  FIRST_OPTION: ["1", "1 - cardapio.", "cardapio"],
  SECCOND_OPTION: ["2", "2 - link para pedido.", "link", "pedido"],
  THIRD_OPTION: ["3", "3 - localizacao.", "localizacao"],
  FOURTH_OPTION: ["4", "4 - horario de atendimento.", "horario"],
  FIFTH_OPTION: ["5", "5 - falar com atendente.", "atendente"],
  EXIT: "sair",

  FIRST_OPTION_RESPONSE: "https://spezialle.web.app",
  SECCOND_OPTION_RESPONSE: "https://laddelivery.com/#/app/cardapio/375",
  THIRD_OPTION_RESPONSE: "https://goo.gl/maps/SMeLBrL6YvHZBMdL8",
  FOURTH_OPTION_RESPONSE: "Todos os dias das 19:00 as 23:00",
  FIFTH_OPTION_RESPONSE: "Aguarde que em breve você será atendido!",

  BYE: "Espero ter ajudado, até mais!",

  NO_SESSION_FOR_CLIENT:
    "Não achei uma sessão para esse cliente! Irei remover da lista das Sessões ativas.\n" +
    "Caso envie uma nova mensagem caira no menu principal.",
};

module.exports = messageOptions;
