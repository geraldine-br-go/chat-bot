const messageOptions = {
  WELCOME:
    "Olá, seja bem vindo ao 100spin!\n" +
    "Esse é nosso autoatendimento, selecione uma das opções abaixo👇🏻",

  REMEMBER:
    "LEMBRANDO PELO LINK TEMOS VANTAGENS DE ENTREGA GRATIS NO RAIO DE ATE 4 KM",

  OPTIONS:
    "1- Localização \n" +
    "2- Cardápio \n" +
    "3- Informações \n" +
    "4- Horários de funcionamento \n" +
    "5- Falar com uma atendente ( caso nenhuma das opções acima te atenda ) \n" +
    "6 - Pesca noturna",

  NO_UNDERSTAND:
    "Eu sou um robô." +
    "\nEscolha uma das opções a baixo\n" +
    "\nDigite *sair* para encerrar!",

  FIRST_OPTION: ["1", "1 - Localização.", "localizacao"],
  SECCOND_OPTION: ["2", "2 - Cardápio.", "cardápio", "cardapio"],
  THIRD_OPTION: ["3", "3 - Informações.", "Informações"],
  FOURTH_OPTION: ["4", "4 - Horários de funcionamento.", "Horário"],
  FIFTH_OPTION: [
    "5",
    "5 - Falar com uma atendente ( caso nenhuma das opções acima te atenda )",
    "atendente",
  ],
  SIXTH_OPTION: ["6", "6 - PESCA NOTURNA", "NOTURNA"],
  EXIT: "sair",

  FIRST_OPTION_RESPONSE:
    "Localização: https://www.google.com/maps/place/16%C2%B037'16.3%22S+49%C2%B028'06.8%22W/@-16.621187,-49.468566,17z",
  SECCOND_OPTION_RESPONSE:
    "Cardápio: https://drive.google.com/file/d/1dj8h2j49lZmUpWLLQDm6kFE8t7_AbinJ/view?usp=drivesdk",
  THIRD_OPTION_RESPONSE:
    "Informações :\n" +
    "❤️ SEJA BEM VINDO, POR FAVOR LEIA O TEXTO  !👇🏻 \n" +
    "😍 ENTRADA MEIO DE SEMANA GRÁTIS ! \n" +
    "❤️TEMOS BRINQUEDOTECA \n" +
    "☀️ FUNCIONAMOS TODOS OS DIAS 08:00  - 18:00\n" +
    "🐟  SEGUNDA E QUINTA TEM PESCA NOTURNA AGENDADA. \n" +
    "⏰ NOSSO ATENDIMENTO É POR ORDEM DE CHEGADA ( NÃO PRECISA DE RESERVA ) . \n" +
    "⚠️ ENTRADA FINAIS DE SEMANA E FERIADO R$10,00 ( O FERIADO PODE SER EM GOIÂNIA OU TRINDADE ).\n" +
    "🎣 PESCA ESPORTIVA MEIO DE SEMANA R$30,00\n" +
    "🎣 PESCA ESPORTIVA FDS E FERIADO R$ 40,00 .\n" +
    "🎣ALUGAMOS VARA DE BAMBU E KIT MOLINETE. \n" +
    "🎣 VENDEMOS ALGUMAS ISCAS.\n" +
    "🐕 ACEITAMOS PETS \n" +
    "🚗 ESTACIONAMENTO GRÁTIS TODOS OS DIAS. 🚫PROIBIDO A ENTRADA DE COMIDA E BEBIDAS.",
  FOURTH_OPTION_RESPONSE:
    "Horários de funcionamento :\n" +
    "Aberto todos os dias das 08:00 as 18:00.\n" +
    "Pesca noturna toda quinta feira das 18:30 as 23:30.\n" +
    "Bolão e torneio são informados semanalmente as datas e horários.",
  FIFTH_OPTION_RESPONSE: "Aguarde que em breve você será atendido!",
  SIXTH_OPTION_RESPONSE:
    "Grupo WhatsApp pesca noturna, acesso no link : https://chat.whatsapp.com/JKel1u9FHlKDsuIxz1Ybge",

  BYE: "Espero ter ajudado, até mais!",

  NO_SESSION_FOR_CLIENT:
    "Não achei uma sessão para esse cliente! Irei remover da lista das Sessões ativas.\n" +
    "Caso envie uma nova mensagem caira no menu principal.",
};

module.exports = messageOptions;
