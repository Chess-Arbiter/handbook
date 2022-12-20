export const menuTrees = [
  {
    id: "ratings",
    title_ru: "Рейтинги",
    title_hy: "Վարկանիշներ",
    title_en: "Ratings",
    pages: [
      {
        title_ru: "Рейтинг Эло",
        title_hy: "Էլո վարկանիշ",
        title_en: "ELO rating",
        slug: "rating_elo",
        description_en:
          "Elo rating is a method of calculating the relative strength of players in chess. This rating system was developed by the American professor Arpad Elo.",
        description_hy:
          "Էլո վարկանիշը շախմատում խաղացողների հարաբերական ուժը հաշվարկելու մեթոդ է: Այս վարկանիշային համակարգը մշակվել է ամերիկացի պրոֆեսոր Արփադ Էլոյի կողմից:",
        description_ru:
          "Рейтинг Эло - метод расчёта относительной силы игроков в шахматах. Эту систему рейтингов разработал американский профессор Арпад Эло.",
      },
      {
        title_ru: "Рейтинговый Перфоманс",
        title_hy: "Վարկանիշային պերֆոմանս",
        title_en: "The Tournament Rating (Performance)",
        slug: "rating_perfomance",
        description_en:
          "A rating performance is a rating due to which a chess player played in a given tournament.",
        description_hy:
          "Վարկանիշային պերֆորմանսը ցույց է տալիս այն ուժը, որով շախմատիստը խաղացել է տվյալ մրցաշարում։",
        description_ru:
          "Рейтинговый перфоманс - это рейтинг, в силу которого шахматист сыграл в данном турнире.",
      },
      {
        title_ru: "Шахматные звания ФИДЕ",
        title_hy: "ՖԻԴԵ-ի շախմատի կոչումներ",
        title_en: "Chess Titles",
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
    type: 1,
  },

  {
    id: "intro",
    title_ru: "ВВЕДЕНИЕ",
    title_en: "INTRODUCTION",
    title_hy: "ՆԵՐԱԾՈՒԹՅՈՒՆ",
    pages: [
      {
        title_ru: "ПРЕДИСЛОВИЕ",
        title_en: "PREFACE",
        title_hy: "ՆԱԽԱԲԱՆ",
        slug: "intro",
      },
    ],
    order: 1,
    type: 2,
  },
  {
    id: "basic_rules",
    title_ru: "ОСНОВНЫЕ ПРАВИЛА ИГРЫ",
    title_en: "BASIC RULES OF PLAY",
    title_hy: "ԽԱՂԻ ՀԻՄՆԱԿԱՆ ԿԱՆՈՆՆԵՐԸ",
    pages: [
      {
        title_ru: "Статья 1: СУЩНОСТЬ И ЦЕЛИ ИГРЫ В ШАХМАТЫ",
        title_en: "Article 1: The nature and objectives of the game of chess",
        title_hy: "Հոդված 1: ՇԱԽՄԱՏԻԷՈՒԹՅՈՒՆԸ և ՆՊԱՏԱԿՆԵՐԸ",
        slug: "article1",
      },
      {
        title_ru: "Статья 2: НАЧАЛЬНАЯ ПОЗИЦИЯ ФИГУР НА ШАХМАТНОЙ ДОСКЕ",
        title_en:
          "Article 2: The initial position of the pieces on the chessboard",
        title_hy:
          "Հոդված 2: ԽԱՂԱՔԱՐԵՐԻ ՍԿԶԲՆԱԿԱՆ ԴԱՍԱՎՈՐՎԱԾՈՒԹՅՈՒՆԸ ՇԱԽՄԱՏԻ ՏԱԽՏԱԿԻ ՎՐԱ",
        slug: "article2",
      },
      {
        title_ru: "Статья 3: ХОДЫ ФИГУР",
        title_en: "Article 3: The moves of the pieces",
        title_hy: "Հոդված 3: ԽԱՂԱՔԱՐԵՐԻ ՔԱՅԼԵՐԸ",
        slug: "article3",
      },
      {
        title_ru: "Статья 4: ВЫПОЛНЕНИЕ ХОДОВ",
        title_en: "Article 4: The act of moving the pieces",
        title_hy: "Հոդված 4: ՔԱՅԼԵՐԻ ԿԱՏԱՐՈՒՄԸ",
        slug: "article4",
      },
      {
        title_ru: "Статья 5: ЗАВЕРШЕНИЕ ПАРТИИ",
        title_en: "Article 5: The completion of the game",
        title_hy: "Հոդված 5: ՊԱՐՏԻԱՅԻ ԱՎԱՐՏԸ",
        slug: "article5",
      },
    ],
    order: 2,
    type: 2,
  },
  {
    id: "additional_indicators",
    title_ru: "Доп показатели",
    title_hy: "Լրացուցիչ ցուցանիշներ",
    title_en: "Additional indicators",
    pages: [
      {
        title_ru: "Армагеддон",
        title_hy: "Արմագեդդոն",
        title_en: "Armageddon",
        description_en:
          "Armageddon is the name of a special chess game that is played if the previous tie-breaks have not revealed a winner.",
        description_hy:
          "Արմագեդդոնը հատուկ շախմատային պարտիայի անուն է, որը խաղացվում է, եթե նախորդ թայ-բրեյքներում հաղթողը չի հայտնաբերվել:",
        description_ru:
          "Армагеддон - название особой шахматной партии, которая играется, если предыдущие тай - брейки не выявили победителя.",
        slug: "armageddon",
      },
      {
        title_ru: "Бухгольц",
        title_hy: "Բուհգոլց",
        title_en: "Buchholz system",
        description_en:
          "Buchholz coefficient - an indicator that helps determine places in chess tournaments",
        description_hy:
          "Բուխհոլցի գործակիցը ցուցանիշ է, որը շախմատային մրցաշարերում հավասար միավորներ վաստակելու դեպքում օգնում է դասակարգել շախմատիստներին",
        description_ru:
          "Коэффициент Бухгольца - показатель, помогающий определению мест в шахматных турнирах",
        slug: "bugolz",
      },
      {
        title_ru: "Зонеберн-Бергер",
        title_hy: "Զոնեբոռն-Բերգեր",
        title_en: "Zonneborn-Berger",
        description_en:
          "Berger&#39;s coefficient is a way of determining places in a competition among participants who have scored an equal number of points. It is mainly used in round robin tournaments.",
        description_hy:
          "Բերգերի գործակիցը հավասար թվով միավորներ վաստակած մասնակիցների տեղերը որոշելու միջոց է: Այն հիմնականում օգտագործվում է շրջանաձև մրցակարգերում:",
        description_ru:
          "Коэффициент Бергера - способ определения мест в соревнованиях среди участников, набравших равное количество очков. В основном применяется в круговых турнирах.",
        slug: "berger",
      },
      {
        title_ru: "Нарастающий итог или прогресс",
        title_hy: "Պրոգրես",
        title_en: "Progress",
        description_en:
          "Progress, or cumulative total, is the sum of the participant&#39;s points after each round.",
        description_hy:
          "Պրոգրեսսը մասնակցի ամեն տուրից հետո հավաքած միավորների համագումարն է",
        description_ru:
          "Прогресс, или нарастающий итог - это сумма очков участника, набранная им после каждого тура.",
        slug: "progress",
      },
      {
        title_ru: "Остальное",
        title_hy: "Մնացածը",
        title_en: "Other",
        description_en: "",
        description_hy: "",
        description_ru: "",
        slug: "others",
      },
      {
        title_ru: "Тай-брейк",
        title_hy: "Թայ-բրեյկ",
        title_en: "Tie-break",
        description_en:
          "Tie-break is a special shortened game that allows you to determine the winner if the score is tied",
        description_hy:
          "Թայ-բրեյքը հատուկ կրճատված ժամակարգով խաղ է, որը հավասար հաշվի դեպքում թույլ է տալիս որոշել հաղթողին։",
        description_ru:
          "Тай-брейк — специальная укороченная партия, которая позволяет выявить победителя при ничейном счёте",
        slug: "tie_break",
      },
    ],
    order: 3,
    type: 1,
  },
  {
    id: "tournament_systems",
    title_ru: "Турнирные системы",
    title_en: "Tournament systems",
    title_hy: "Մրցաշարային համակարգեր",
    pages: [
      {
        title_ru: "Круговая система",
        title_en: "Round robin",
        title_hy: "Շրջանաձև մրցակարգ",
        description_en:
          "Round robin - a system of drawing in which each participant of the tournament plays with everyone during the round.",
        description_hy:
          "Շրջանաձև համակարգը մրցակարգ է, որտեղ մրցաշարի ընթացքում յուրաքանչյուր մասնակից խաղում է մյուս բոլոր մասնակիցների դեմ։",
        description_ru:
          "Круговая система - система розыгрыша, при которой каждый участник турнира играет с каждым в ходе тура.",
        slug: "round_system",
      },
      {
        title_ru: "Олимпийская система(нокаут)",
        title_en: "Knockout system",
        title_hy: "Օլիմպիական համակարգ(նոկաուտ)",
        description_en:
          "The knockout system (Olympic system) is a system for holding chess tournaments, it is a playoff version, built taking into account the peculiarities of chess.",
        description_hy:
          "Նոկաուտի համակարգը (օլիմպիական համակարգ) շախմատի մրցաշարերի անցկացման համակարգ է, այն նման է փլեյ-օֆֆի, որը կառուցվել է՝ հաշվի առնելով շախմատի առանձնահատկությունները:",
        description_ru:
          "Нокаут-система(олимпийская система) - система проведения шахматных турниров, представляет собой вариант плей-офф, построенный с учётом особенностей шахмат.",
        slug: "olympic_system",
      },
      {
        title_ru: "Система матчей",
        title_en: "Match",
        title_hy: "Մատչեր",
        description_en:
          "A match is one of the forms of chess competition. It is a competition between two opponents or teams.",
        description_hy:
          "Մրցամարտը շախմատային մրցակցության ձևեր է, որը անց է կացվում երկու մրցակիցների կամ թիմերի միջեւ:",
        description_ru:
          "Матч - одна из форм шахматных соревнований. Представляет собой состязание между двумя соперниками или командами.",
        slug: "match_system",
      },
      {
        title_ru: "Схевингенская система",
        title_en: "The Scheveningen system",
        title_hy: "Սխևինգենյան համակարգ",
        description_en:
          "Scheveningen system - a system of holding chess competitions in which each member of one group of participants plays with all members of the other group.",
        description_hy:
          "Սխևենինգենյան համակարգը շախմատային մրցաշարերի անցկացման թիմային համակարգ է, որում մասնակիցների մի թիմի յուրաքանչյուր անդամ խաղում է մյուս թիմի բոլոր անդամների հետ:",
        description_ru:
          "Схевенингенская система — система проведения шахматных соревнований, при которой каждый член одной группы участников играет со всеми членами другой группы.",
        slug: "skh_system",
      },
      {
        title_ru: "Швейцарская система",
        title_en: "Swiss system",
        title_hy: "Շվեյցարական համակարգ",
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
    type: 1,
  },
  {
    id: "glossary",
    pages: [
      {
        title_ru: "СЛОВАРЬ ТЕРМИНОВ, ИСПОЛЬЗУЕМЫХ В ПРАВИЛАХ ИГРЫ В ШАХМАТЫ",
        title_en: "Glossary of terms in the Laws of Chess",
        title_hy: "ՇԱԽՄԱՏԻ ԿԱՆՈՆՆԵՐԻ ՏԵՐՄԻՆԱԲԱՆԱԿԱՆ ԲԱՐԱՌԱՆ",
        slug: "voc",
      },
    ],
    order: 5,
    type: 2,
  },
  {
    id: "competition_rules",
    title_ru: "ПРАВИЛА СОРЕВНОВАНИЙ",
    title_en: "COMPETITION RULES",
    title_hy: "ՄՐՑԱՇԱՐԵՐԻ ԿԱՆՈՆՆԵՐ",
    pages: [
      {
        title_ru: "Статья 6: ШАХМАТНЫЕ ЧАСЫ",
        title_en: "Article 6: The chessclock",
        title_hy: "Հոդված 6: ՇԱԽՄԱՏԻ ԺԱՄԵՐ",
        slug: "article6",
      },
      {
        title_ru: "Статья 7: НАРУШЕНИЯ",
        title_en: "Article 7: Irregularities",
        title_hy: "Հոդված 7: ԽԱԽՏՈՒՄՆԵՐ",
        slug: "article7",
      },
      {
        title_ru: "Статья 8: ЗАПИСЬ ХОДОВ",
        title_en: "Article 8: The recording of the moves",
        title_hy: "Հոդված 8: ՔԱՅԼԵՐԻ ԳՐԱՆՑՈՒՄԸ",
        slug: "article8",
      },
      {
        title_ru: "Статья 9: НИЧЬЯ",
        title_en: "Article 9: The drawn game",
        title_hy: "Հոդված 9: ՈՉ-ՈՔԻ",
        slug: "article9",
      },
      {
        title_ru: "Статья 10: ОЧКИ",
        title_en: "Article 10: Points",
        title_hy: "Հոդված 10: ՄԻԱՎՈՐՆԵՐԻ ՀԱՇՎԱՐԿԸ",
        slug: "article10",
      },
      {
        title_ru: "Статья 11: ПОВЕДЕНИЕ ИГРОКОВ",
        title_en: "Article 11: The conduct of the players",
        title_hy: "Հոդված 11: ԽԱՂԱՑՈՂՆԵՐԻ ՊԱՀՎԱԾՔԸ",
        slug: "article11",
      },
      {
        title_ru: "Статья 12: РОЛЬ АРБИТРА (см. Предисловие)",
        title_en: "Article 12: The role of the arbiter (see Preface)",
        title_hy: "Հոդված 12: ՄՐՑԱՎԱՐԻ ԴԵՐԸ (տես՝ ՆԱԽԱԲԱՆ)",
        slug: "article12",
      },
    ],
    order: 3,
    type: 2,
  },
  {
    id: "guidelines",
    title_ru: "Рекомендации",
    title_en: "Guidelines:",
    title_hy: "Խորհուրդներ",
    pages: [
      {
        title_ru: "I. ОТЛОЖЕННЫЕ ПАРТИИ",
        title_en: "I. Adjourned games",
        title_hy: "I. ՀԵՏԱՁԳՎԱԾ ՊԱՐՏԻԱՆԵՐ",
        slug: "rec1",
      },
      {
        title_ru: "II. ПРАВИЛА ИГРЫ В ШАХМАТЫ 960",
        title_en: "II. Chess960 rules",
        title_hy: "II. ՇԱԽՄԱՏ 960 ԽԱՂԻ ԿԱՆՈՆՆԵՐ",
        slug: "rec2",
      },
      {
        title_ru:
          "III. ПАРТИИ БЕЗ ДОБАВЛЕНИЯ ВРЕМЕНИ, в том числе  БЫСТРАЯ ИГРА ДО КОНЦА ПАРТИИ",
        title_en: "III. Games without increment including Quickplay Finishes",
        title_hy: "III ԱՐԱԳ ԱՎԱՐՏ",
        slug: "rec3",
      },
    ],
    order: 4,
    type: 2,
  },
  {
    id: "appendices",
    title_ru: "ПРИЛОЖЕНИЯ",
    title_en: "Appendices:",
    title_hy: "ՀԱՎԵԼՎԱԾՆԵՐ",
    pages: [
      {
        title_ru: "Приложение А. БЫСТРЫЕ ШАХМАТЫ",
        title_en: "Application А. Rapid chess",
        title_hy: "Հավելված А. ԱՐԱԳ ՇԱԽՄԱՏ",
        slug: "applicationa",
      },
      {
        title_ru: "Приложение В. БЛИЦ",
        title_en: "Application В. Blitz",
        title_hy: "Հավելված В. ԿԱՅԾԱԿՆԱՅԻՆ ԽԱՂ (ԲԼԻՑ)",
        slug: "applicationb",
      },
      {
        title_ru: "Приложение С. АЛГЕБРАИЧЕСКАЯ НОТАЦИЯ",
        title_en: "Application С. Algebraic notation",
        title_hy: "Հավելված С. ՀԱՆՐԱՀԱՇՎԱԿԱԿ ՆՇԱԳՐՈՒԹՅՈՒՆ",
        slug: "applicationc",
      },
      {
        title_ru:
          "Приложение D. ПРАВИЛА ИГРЫ ДЛЯ СЛЕПЫХ И ИГРОКОВ С ОСЛАБЛЕННЫМ ЗРЕНИЕМ",
        title_en:
          "Application D. Rules for play with blind and visually disabled players",
        title_hy:
          "Հավելված D. ԿՈՒՅՐ և ԹՈՒՅԼ ՏԵՍՈՂՈՒԹՅՈՒՆ ՈՒՆԵՑՈՂ ՇԱԽՄԱՏԻՍՏՆԵՐԻ ՀԵՏ ԽԱՂԱԼՈՒ ԿԱՆՈՆՆԵՐԸ",
        slug: "applicationd",
      },
    ],
    order: 3,
    type: 2,
  },
];
