const messageOptions = {
  WELCOME:
    "👇 *Faça seu pedido pelo nosso link.*\nhttps://naldimpasteisburger.flowapp.site/naldimpasteisburgers/pedidos\n" +
    "👉 ```Salve nosso contato para poder clicar no link do pedido.```",

  REMEMBER:
    "LEMBRANDO PELO LINK TEMOS VANTAGENS DE ENTREGA GRATIS NO RAIO DE ATE 4 KM",

  OPTIONS: "Ou caso necessário digite 1 para falar com o(a) atendente!",

  NO_UNDERSTAND:
    "```eu sou um robô.```" +
    "\nClique no link para pedidos" +
    "\nDigite *sair* para encerrar!",

  FIRST_OPTION: ["1", "1 - falar com atendente.", "atendente"],
  SECCOND_OPTION: ["2", "2 - link para pedido.", "link", "pedido"],
  THIRD_OPTION: ["3", "3 - localizacao.", "localizacao"],
  FOURTH_OPTION: ["4", "4 - horario de atendimento.", "horario"],
  FIFTH_OPTION: ["5", "5 - falar com atendente.", "atendente"],
  EXIT: "sair",

  FIRST_OPTION_RESPONSE:
    "https://naldimpasteisburger.flowapp.site/naldimpasteisburgers/pedidos",
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
