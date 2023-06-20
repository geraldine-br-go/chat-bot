const messageOptions = {
  WELCOME:
    "Bem vindo a Lord Tabacaria, eu sou o *Davi*, especialista em atendimento rápido.\n" +
    "Já vou te passar as opções disponíveis por aqui.",

  OPTIONS:
    "Digite o número da opção desejada:\n" +
    "1 - Link para pedido.\n" +
    "2 - Localização.\n" +
    "3 - Falar com atendente",

  NO_UNDERSTAND:
    "eu sou um robô." +
    "\nPreciso que me ajude escolhendo uma das alternativas." +
    "\nOu digite *sair* para encerrar!",

  FIRST_OPTION: ["1", "1 - cardapio.", "cardapio"],
  SECCOND_OPTION: ["2", "2 - localizacao.", "localizacao"],
  THIRD_OPTION: ["3", "3 - falar com atendente.", "atendente"],
  FOURTH_OPTION: ["4", "4 - horario de atendimento.", "horario"],
  FIFTH_OPTION: ["5", "5 - falar com atendente.", "atendente"],
  EXIT: "sair",

  FIRST_OPTION_RESPONSE:
    "https://lordbebidasetabacaria.flowapp.site/lordbebdidasetabacaria/pedidos",
  SECCOND_OPTION_RESPONSE: "https://goo.gl/maps/fUePyUcAQ3sDzy6R7",
  THIRD_OPTION_RESPONSE: "Aguarde que em breve você será atendido!",
  FOURTH_OPTION_RESPONSE: "Todos os dias das 19:00 as 23:00",
  FIFTH_OPTION_RESPONSE: "Aguarde que em breve você será atendido!",

  BYE: "Espero ter ajudado, até mais!",

  NO_SESSION_FOR_CLIENT:
    "Não achei uma sessão para esse cliente! Irei remover da lista das Sessões ativas.\n" +
    "Caso envie uma nova mensagem caira no menu principal.",
};

module.exports = messageOptions;
