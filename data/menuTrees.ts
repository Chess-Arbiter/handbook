import { EPAGE_TYPES } from "../models/page";

export interface IPages {
  title_ru: string;
  title_hy: string;
  title_en: string;
  slug: string;
  description_en?: string;
  description_hy?: string;
  description_ru?: string;
}

export interface IMenuTrees {
  id: string;
  title_ru: string;
  title_hy: string;
  title_en: string;
  pages: IPages[];
  order: number;
  type: EPAGE_TYPES;
}

export const menuTrees: IMenuTrees[] = [
  {
    id: "ratings",
    title_ru: "рейтинги",
    title_hy: "վարկանիշներ",
    title_en: "ratings",
    pages: [
      {
        title_ru: "рейтинг эло",
        title_hy: "էլո վարկանիշ",
        title_en: "elo rating",
        slug: "rating_elo",
        description_en:
          "Elo rating is a method of calculating the relative strength of players in chess. This rating system was developed by the American professor Arpad Elo.",
        description_hy:
          "Էլո վարկանիշը շախմատում խաղացողների հարաբերական ուժը հաշվարկելու մեթոդ է: Այս վարկանիշային համակարգը մշակվել է ամերիկացի պրոֆեսոր Արփադ Էլոյի կողմից:",
        description_ru:
          "Рейтинг Эло - метод расчёта относительной силы игроков в шахматах. Эту систему рейтингов разработал американский профессор Арпад Эло.",
      },
      {
        title_ru: "рейтинговый перфоманс",
        title_hy: "վարկանիշային պերֆոմանս",
        title_en: "the tournament rating (performance)",
        slug: "rating_performance",
        description_en:
          "A rating performance is a rating due to which a chess player played in a given tournament.",
        description_hy:
          "Վարկանիշային պերֆորմանսը ցույց է տալիս այն ուժը, որով շախմատիստը խաղացել է տվյալ մրցաշարում։",
        description_ru:
          "Рейтинговый перфоманс - это рейтинг, в силу которого шахматист сыграл в данном турнире.",
      },
      {
        title_ru: "шахматные звания фиде",
        title_hy: "ֆիդե-ի շախմատի կոչումներ",
        title_en: "chess titles",
        slug: "chess_role",
        description_en:
          "The International Chess Federation awards three chess titles - FIDE Master (MF), International Master (MM) and International Grandmaster (MG).",
        description_hy:
          "Շախմատի միջազգային ֆեդերացիան շնորհում է շախմատի երեք կոչում ՝ ՖԻԴԵ-ի վարպետ (FM), միջազգային վարպետ (IM) և միջազգային գրոսմայստեր (GM):",
        description_ru:
          "Международная шахматная федерация присваивает три шахматных звания - мастер ФИДЕ (МФ), международный мастер (ММ) и международный гроссмейстер (МГ).",
      },
    ],
    order: 2,
    type: EPAGE_TYPES.MORE,
  },
  {
    id: "intro",
    title_ru: "введение",
    title_en: "introduction",
    title_hy: "ներածություն",
    pages: [
      {
        title_ru: "предисловие",
        title_en: "preface",
        title_hy: "նախաբան",
        slug: "intro",
      },
    ],
    order: 1,
    type: EPAGE_TYPES.LAWS,
  },
  {
    id: "basic_rules",
    title_ru: "основные правила игры",
    title_en: "basic rules of play",
    title_hy: "խաղի հիմնական կանոնները",
    pages: [
      {
        title_ru: "статья 1: сущность и цели игры в шахматы",
        title_en: "article 1: the nature and objectives of the game of chess",
        title_hy: "հոդված 1: շախմատիէությունը և նպատակները",
        slug: "article1",
      },
      {
        title_ru: "статья 2: начальная позиция фигур на шахматной доске",
        title_en:
          "article 2: the initial position of the pieces on the chessboard",
        title_hy:
          "հոդված 2: խաղաքարերի սկզբնական դասավորվածությունը շախմատի տախտակի վրա",
        slug: "article2",
      },
      {
        title_ru: "статья 3: ходы фигур",
        title_en: "article 3: the moves of the pieces",
        title_hy: "հոդված 3: խաղաքարերի քայլերը",
        slug: "article3",
      },
      {
        title_ru: "статья 4: выполнение ходов",
        title_en: "article 4: the act of moving the pieces",
        title_hy: "հոդված 4: քայլերի կատարումը",
        slug: "article4",
      },
      {
        title_ru: "статья 5: завершение партии",
        title_en: "article 5: the completion of the game",
        title_hy: "հոդված 5: պարտիայի ավարտը",
        slug: "article5",
      },
    ],
    order: 2,
    type: EPAGE_TYPES.LAWS,
  },
  {
    id: "additional_indicators",
    title_ru: "доп показатели",
    title_hy: "լրացուցիչ ցուցանիշներ",
    title_en: "additional indicators",
    pages: [
      {
        title_ru: "армагеддон",
        title_hy: "արմագեդդոն",
        title_en: "armageddon",
        description_en:
          "Armageddon is the name of a special chess game that is played if the previous tie-breaks have not revealed a winner.",
        description_hy:
          "Արմագեդդոնը հատուկ շախմատային պարտիայի անուն է, որը խաղացվում է, եթե նախորդ թայ-բրեյքներում հաղթողը չի հայտնաբերվել:",
        description_ru:
          "Армагеддон - название особой шахматной партии, которая играется, если предыдущие тай - брейки не выявили победителя.",
        slug: "armageddon",
      },
      {
        title_ru: "бухгольц",
        title_hy: "բուհգոլց",
        title_en: "buchholz system",
        description_en:
          "Buchholz coefficient - an indicator that helps determine places in chess tournaments",
        description_hy:
          "Բուխհոլցի գործակիցը ցուցանիշ է, որը շախմատային մրցաշարերում հավասար միավորներ վաստակելու դեպքում օգնում է դասակարգել շախմատիստներին",
        description_ru:
          "Коэффициент Бухгольца - показатель, помогающий определению мест в шахматных турнирах",
        slug: "buchholz",
      },
      {
        title_ru: "зонеборн-бергер",
        title_hy: "զոնեբոռն-բերգեր",
        title_en: "zonneborn-berger",
        description_en:
          "Berger&#39;s coefficient is a way of determining places in a competition among participants who have scored an equal number of points. It is mainly used in round robin tournaments.",
        description_hy:
          "Բերգերի գործակիցը հավասար թվով միավորներ վաստակած մասնակիցների տեղերը որոշելու միջոց է: Այն հիմնականում օգտագործվում է շրջանաձև մրցակարգերում:",
        description_ru:
          "Коэффициент Бергера - способ определения мест в соревнованиях среди участников, набравших равное количество очков. В основном применяется в круговых турнирах.",
        slug: "berger",
      },
      {
        title_ru: "нарастающий итог или прогресс",
        title_hy: "պրոգրես",
        title_en: "progress",
        description_en:
          "Progress, or cumulative total, is the sum of the participant&#39;s points after each round.",
        description_hy:
          "Պրոգրեսսը մասնակցի ամեն տուրից հետո հավաքած միավորների համագումարն է",
        description_ru:
          "Прогресс, или нарастающий итог - это сумма очков участника, набранная им после каждого тура.",
        slug: "progress",
      },
      {
        title_ru: "тай-брейк",
        title_hy: "թայ-բրեյկ",
        title_en: "tie-break",
        description_en:
          "Tie-break is a special shortened game that allows you to determine the winner if the score is tied",
        description_hy:
          "Թայ-բրեյքը հատուկ կրճատված ժամակարգով խաղ է, որը հավասար հաշվի դեպքում թույլ է տալիս որոշել հաղթողին։",
        description_ru:
          "Тай-брейк — специальная укороченная партия, которая позволяет выявить победителя при ничейном счёте",
        slug: "tie_break",
      },
      {
        title_ru: "остальное",
        title_hy: "մնացածը",
        title_en: "other",
        description_en: "",
        description_hy: "",
        description_ru: "",
        slug: "others",
      },
    ],
    order: 3,
    type: EPAGE_TYPES.MORE,
  },
  {
    id: "tournament_systems",
    title_ru: "турнирные системы",
    title_en: "tournament systems",
    title_hy: "մրցաշարային համակարգեր",
    pages: [
      {
        title_ru: "круговая система",
        title_en: "round robin",
        title_hy: "շրջանաձև մրցակարգ",
        description_en:
          "Round robin - a system of drawing in which each participant of the tournament plays with everyone during the round.",
        description_hy:
          "Շրջանաձև համակարգը մրցակարգ է, որտեղ մրցաշարի ընթացքում յուրաքանչյուր մասնակից խաղում է մյուս բոլոր մասնակիցների դեմ։",
        description_ru:
          "Круговая система - система розыгрыша, при которой каждый участник турнира играет с каждым в ходе тура.",
        slug: "round_system",
      },
      {
        title_ru: "олимпийская система(нокаут)",
        title_en: "knockout system",
        title_hy: "օլիմպիական համակարգ(նոկաուտ)",
        description_en:
          "The knockout system (Olympic system) is a system for holding chess tournaments, it is a playoff version, built taking into account the peculiarities of chess.",
        description_hy:
          "Նոկաուտի համակարգը (օլիմպիական համակարգ) շախմատի մրցաշարերի անցկացման համակարգ է, այն նման է փլեյ-օֆֆի, որը կառուցվել է՝ հաշվի առնելով շախմատի առանձնահատկությունները:",
        description_ru:
          "Нокаут-система(олимпийская система) - система проведения шахматных турниров, представляет собой вариант плей-офф, построенный с учётом особенностей шахмат.",
        slug: "olympic_system",
      },
      {
        title_ru: "система матчей",
        title_en: "match",
        title_hy: "մատչեր",
        description_en:
          "A match is one of the forms of chess competition. It is a competition between two opponents or teams.",
        description_hy:
          "Մրցամարտը շախմատային մրցակցության ձևեր է, որը անց է կացվում երկու մրցակիցների կամ թիմերի միջեւ:",
        description_ru:
          "Матч - одна из форм шахматных соревнований. Представляет собой состязание между двумя соперниками или командами.",
        slug: "match_system",
      },
      {
        title_ru: "схевингенская система",
        title_en: "the scheveningen system",
        title_hy: "սխևինգենյան համակարգ",
        description_en:
          "Scheveningen system - a system of holding chess competitions in which each member of one group of participants plays with all members of the other group.",
        description_hy:
          "Սխևենինգենյան համակարգը շախմատային մրցաշարերի անցկացման թիմային համակարգ է, որում մասնակիցների մի թիմի յուրաքանչյուր անդամ խաղում է մյուս թիմի բոլոր անդամների հետ:",
        description_ru:
          "Схевенингенская система — система проведения шахматных соревнований, при которой каждый член одной группы участников играет со всеми членами другой группы.",
        slug: "skh_system",
      },
      {
        title_ru: "швейцарская система",
        title_en: "swiss system",
        title_hy: "շվեյցարական համակարգ",
        description_en:
          "The Swiss system is a system of holding chess tournaments, where opponents with the same or similar number of points play in each round.",
        description_hy:
          "Շվեյցարական համակարգը շախմատի մրցաշարերի անցկացման համակարգ է, որտեղ յուրաքանչյուր տուրում խաղում են նույն կամ իրար մոտ միավոր ունեցող հակառակորդներ:",
        description_ru:
          "Швейцарская система - система проведения шахматных турниров, где в каждом туре играют соперники, имеющие одинаковое или близкое количество очков.",
        slug: "sw_system",
      },
    ],
    order: 4,
    type: EPAGE_TYPES.MORE,
  },

  {
    id: "competition_rules",
    title_ru: "правила соревнований",
    title_en: "competition rules",
    title_hy: "մրցաշարերի կանոններ",
    pages: [
      {
        title_ru: "статья 6: шахматные часы",
        title_en: "article 6: the chessclock",
        title_hy: "հոդված 6: շախմատի ժամեր",
        slug: "article6",
      },
      {
        title_ru: "статья 7: нарушения",
        title_en: "article 7: irregularities",
        title_hy: "հոդված 7: խախտումներ",
        slug: "article7",
      },
      {
        title_ru: "статья 8: запись ходов",
        title_en: "article 8: the recording of the moves",
        title_hy: "հոդված 8: քայլերի գրանցումը",
        slug: "article8",
      },
      {
        title_ru: "статья 9: ничья",
        title_en: "article 9: the drawn game",
        title_hy: "հոդված 9: ոչ-ոքի",
        slug: "article9",
      },
      {
        title_ru: "статья 10: очки",
        title_en: "article 10: points",
        title_hy: "հոդված 10: միավորների հաշվարկը",
        slug: "article10",
      },
      {
        title_ru: "статья 11: поведение игроков",
        title_en: "article 11: the conduct of the players",
        title_hy: "հոդված 11: խաղացողների վարքը",
        slug: "article11",
      },
      {
        title_ru: "статья 12: роль арбитра (см. предисловие)",
        title_en: "article 12: the role of the arbiter (see preface)",
        title_hy: "հոդված 12: մրցավարի դերը (տես՝ նախաբան)",
        slug: "article12",
      },
    ],
    order: 3,
    type: EPAGE_TYPES.LAWS,
  },
  {
    id: "appendices",
    title_ru: "приложения",
    title_en: "appendices:",
    title_hy: "հավելվածներ",
    pages: [
      {
        title_ru: "приложение а. быстрые шахматы",
        title_en: "application а. rapid chess",
        title_hy: "հավելված а. արագ շախմատ",
        slug: "applicationa",
      },
      {
        title_ru: "приложение в. блиц",
        title_en: "application в. blitz",
        title_hy: "հավելված в. կայծակնային խաղ (բլից)",
        slug: "applicationb",
      },
      {
        title_ru: "приложение с. алгебраическая нотация",
        title_en: "application с. algebraic notation",
        title_hy: "հավելված с. հանրահաշվակակ նշագրություն",
        slug: "applicationc",
      },
      {
        title_ru:
          "приложение d. правила игры для слепых и игроков с ослабленным зрением",
        title_en:
          "application d. rules for play with blind and visually disabled players",
        title_hy:
          "հավելված d. կույր և թույլ տեսողություն ունեցող շախմատիստների հետ խաղալու կանոնները",
        slug: "applicationd",
      },
    ],
    order: 3,
    type: EPAGE_TYPES.LAWS,
  },
  {
    id: "guidelines",
    title_ru: "рекомендации",
    title_en: "guidelines:",
    title_hy: "խորհուրդներ",
    pages: [
      {
        title_ru: "i. отложенные партии",
        title_en: "i. adjourned games",
        title_hy: "i. հետաձգված պարտիաներ",
        slug: "rec1",
      },
      {
        title_ru: "ii. правила игры в шахматы 960",
        title_en: "ii. chess960 rules",
        title_hy: "ii. շախմատ 960 խաղի կանոններ",
        slug: "rec2",
      },
      {
        title_ru:
          "iii. партии без добавления времени, в том числе  быстрая игра до конца партии",
        title_en: "iii. games without increment including quickplay finishes",
        title_hy: "iii արագ ավարտ",
        slug: "rec3",
      },
    ],
    order: 4,
    type: EPAGE_TYPES.LAWS,
  },
  {
    id: "glossary",
    title_en: "glossary",
    title_ru: "словарь",
    title_hy: "բառարան",
    pages: [
      {
        title_ru: "словарь терминов, используемых в правилах игры в шахматы",
        title_en: "glossary of terms in the laws of chess",
        title_hy: "շախմատի կանոնների տերմինաբանական բառարան",
        slug: "voc",
      },
    ],
    order: 5,
    type: EPAGE_TYPES.LAWS,
  },
];
