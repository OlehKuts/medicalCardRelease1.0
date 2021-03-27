export const diseaseList = [
  { name: "Оберіть патологію", value: "" },
  { name: "періодонтит", value: "periodontit" },
  { name: "періостит", value: "periostit" },
  { name: "запальні процеси м'яких тканин", value: "abscess" },
  { name: "травма м'яких тканин", value: "skinWound" },
  { name: "вивих зуба", value: "dislocationTooth" },
  { name: "перелом нижньої щелепи", value: "fractureLowerJaw" },
  { name: "множинний карієс", value: "caries" },
  { name: "коротка вуздечка язика", value: "tongueBridle" },
  { name: "коротка вуздечка верхньої губи", value: "lipBridle" },
  { name: "новоутвори м'яких тканин", value: "neoplasm" },
  { name: "одонтогенні кісти щелеп", value: "cyst" },
  { name: "ретенція зубів", value: "retention" },
  { name: "надкомплектні зуби", value: "overComplete" }
];
export const doctors = [
  { name: "Особистий лікар", value: "" },
  { name: "Куц О.В.", value: "Куц О.В." },
  { name: "Кучмій В.Я.", value: "Кучмій В.Я." },
  { name: "Піх І.І.", value: "Піх І.І." },
  { name: "Панченко В.А.", value: "Панченко В.А." },
  { name: "Романюк Н.М.", value: "Романюк Н.М." },
  { name: "Маркевич С.А.", value: "Маркевич С.А." },
  { name: "Питляр О.В.", value: "Питляр О.В." }
];
export const start2List = ["день", "тиждень", "місяць", "рік"];
export const conditionList = [
  "задовільний",
  "близький до задовільного",
  "середнього ступеню важкості",
  "важкий"
];
export const crownDestructionList = [
  { name: "коронка зруйнована частково", value: "частково" },
  { name: "коронка зруйнована повністю", value: "повністю" }
];
export const drugName1List = [
  { name: "Антибіотик", value: "" },
  { name: "Амоксиклав", value: "Амоксиклав" },
  { name: "Лінкоміцин", value: "Лінкоміцин" },
  { name: "Сумамед", value: "Сумамед" },
  { name: "Цефодокс", value: "Цефодокс" },
  { name: "Лопракс", value: "Лопракс" },
  { name: "Цефтріаксон", value: "Цефтріаксон" },
  { name: "Діацеф", value: "Діацеф" },
  { name: "Цефотаксим", value: "Цефотаксим" },
  { name: "Аміцил", value: "Аміцил" },
  { name: "Цефікс", value: "Цефікс" }
];
export const drugName2List = [
  { name: "Протизапальний", value: "" },
  { name: "Нурофен", value: "Нурофен" },
  { name: "Парацетамол", value: "Парацетамол" }
];
export const drugName3List = [
  { name: "Пробіотик", value: "" },
  { name: "Неофлорум", value: "Неофлорум" },
  { name: "Пробіз", value: "Пробіз" },
  { name: "Ентерожерміна форте", value: "Ентерожерміна форте" }
];
export const drugName4List = [
  { name: "Антигістамінний", value: "" },
  { name: "Лоратадин", value: "Лоратадин" },
  { name: "Феністил", value: "Феністил" }
];
export const drugName5List = [
  { name: "Інші призначення", value: "" },
  { name: "Метрогіл", value: "Метрогіл" },
  { name: "Гепарин", value: "Гепарин" },
  { name: "L-лізину есцинат", value: "L-лізину есцинат" },
  { name: "Содовий розчин", value: "Содовий розчин" }
];
export const pliersList = [
  { name: "Оберіть щипці", value: "" },
  { name: "багнетоподібні", value: "з допомогою багнетоподібних щипців" },
  { name: "дзьобоподібні", value: "з допомогою дзьобоподібних щипців" },
  { name: "прямі", value: "з допомогою прямих щипців" }
];
export const elevatorList = [
  { name: "Оберіть елеватор", value: "" },
  { name: "прямий", value: "з допомогою прямого елеватора" },
  { name: "кутовий", value: "з допомогою кутового елеватора" }
];
export const surgeons = [{ name: "Хірург", value: "" }].concat(
  doctors.slice(1)
);
export const assistants = [{ name: "Асистент", value: "" }].concat(
  doctors.slice(1)
);
export const anesthetistList = [
  { name: "Анестезіолог", value: "" },
  { name: "Блажевич І.Є.", value: "Блажевич І.Є." },
  { name: "Бренькач Н.С.", value: "Бренькач Н.С." },
  { name: "Германюк Ю.В.", value: "Германюк Ю.В." },
  { name: "Голінка Ю.Я.", value: "Голінка Ю.Я." },
  { name: "Дзюбановська Л.Л.", value: "Дзюбановська Л.Л." },
  { name: "Дубчак О.П.", value: "Дубчак О.П." },
  { name: "Козярик Х.А.", value: "Козярик Х.А." },
  { name: "Криницький Б.В.", value: "Криницький Б.В." },
  { name: "Москальчук О.О.", value: "Москальчук О.О." },
  { name: "Панченко О.І.", value: "Панченко О.І." },
  { name: "Решетуха О.В.", value: "Решетуха О.В." },
  { name: "Ровецька Л.І.", value: "Ровецька Л.І." },
  { name: "Романенко Л.М.", value: "Романенко Л.М." },
  { name: "Січкар Б.С.", value: "Січкар Б.С." },
  { name: "Ткачук С.І.", value: "Ткачук С.І." },
  { name: "Цісарський С.В.", value: "Цісарський С.В." },
  { name: "Шалабай І.Г.", value: "Шалабай І.Г." },
  { name: "відсутній", value: " - " }
];
export const areaList = [
  { value: "", name: "ділянка" },
  { value: "підщелепної ділянки", name: "підщелепна" },
  { value: "підборідної ділянки", name: "підборідна" },
  { value: "щічної ділянки", name: "щічна" },
  { value: "нижньої губи", name: "нижня губа" },
  { value: "верхньої губи", name: "верхня губа" },
  { value: "підочної ділянки", name: "підочна" },
  { value: "привушно-жувальної ділянки", name: "привушно-жувальна" },
  { value: "виличної ділянки", name: "вилична" },
  { value: "скроневої ділянки", name: "скронева" },
  { value: "лобної ділянки", name: "лобна" },
  { value: "брови", name: "брова" },
  { value: "твердого піднебіння", name: "тверде піднебіння" },
  { value: "м'якого піднебіння", name: "м'яке піднебіння" },
  { value: "під'язикової ділянки", name: "під'язикова" },
  { value: "язика", name: "язик" }
];
export const sideList = [
  { value: "", name: "сторона" },
  { value: " ліворуч", name: "ліва" },
  { value: " праворуч", name: "права" }
];
export const injuryReasonList = [
  { name: "причина травми", value: "падіння та удару до підлоги" },
  { name: "удар до гойдалки", value: "удару до гойдалки" },
  { name: "удар до краю мебелі", value: "удару до краю мебелі" },
  {
    name: "падіння та удар до підлоги",
    value: "падіння та удару до підлоги"
  },
  { name: "зіткнення з іншою дитиною", value: "зіткнення з іншою дитиною" }
];
export const woundSurfaceList = [
  { value: "", name: "поверхня" },
  { value: "шкіра", name: "шкіра" },
  { value: "слизова оболонка", name: "слизова оболонка" },
  { value: "червона облямівка", name: "червона облямівка" }
];
export const woundTypeList = [
  { value: "", name: "вид рани" },
  { value: "розсічена", name: "розсічена" },
  { value: "рвана", name: "рвана" },
  { value: "кусано-рвана", name: "кусано-рвана" },
  { value: "забійно-рвана", name: "забійно-рвана" },
  { value: "скальповано-рвана", name: "скальповано-рвана" },
  { value: "рублена", name: "рублена" },
  { value: "колота", name: "колота" },
  { value: "скальпована", name: "скальпована" }
];
export const woundFormList = [
  { name: "неправильна форма", value: "неправильної" },
  { name: "лінійна", value: "лінійної" },
  { name: "веретеноподібна", value: "веретеноподібної" },
  { name: "серпоподібна", value: "серпоподібної" },
  { name: "зигзагоподібна", value: "зигзагоподібної" },
  { name: "округла", value: "округлої" },
  { name: "ромбоподібна", value: "ромбоподібної" }
];
export const woundLedgesList = [
  { value: "Краї рани рівні", name: "краї рівні" },
  { value: "Краї рани нерівні", name: "краї нерівні" }
];
export const woundBleedingList = [
  { value: "незначна", name: "кровоточивість незначна" },
  { value: "значна", name: "кровоточивість значна" },
  { value: "відсутня", name: "кровоточивість відсутня" }
];
export const woundAliensList = [
  {
    value: "Візуально сторонніх тіл в рані не виявлено",
    name: "забруднення відсутнє"
  },
  { value: "Рана забруднена брудом", name: "брудом" },
  { value: "Рана забруднена землею", name: "землею" },
  { value: "Рана забруднена піском", name: "піском" },
  { value: "Рана забруднена дрібним камінням", name: "дрібним камінням" },
  { value: "Рана забруднена залишками фарби", name: "залишками фарби" }
];
export const sutureTypeList = [
  { value: "вузловими швами", name: "вузлові шви" },
  { value: "матрацними швами", name: "матрацні" },
  { value: "внутрішньошкірним безперервним швом", name: "внутрішньошкірний" }
];
export const sutureMaterialList = [
  { value: "PDS ", name: "PDS" },
  { value: "Vicryl ", name: "Vicryl" },
  { value: "Maxon ", name: "Maxon" }
];
export const sutureSizeList = [
  { value: "5-0 ", name: "5-0" },
  { value: "3-0 ", name: "3-0" },
  { value: "4-0 ", name: "4-0" },
  { value: "6-0 ", name: "6-0" }
];
export const toothList = [
  "",
  55,
  54,
  53,
  52,
  51,
  61,
  62,
  63,
  64,
  65,
  75,
  74,
  73,
  72,
  71,
  81,
  82,
  83,
  84,
  85,
  16,
  26,
  36,
  46,
  11,
  12,
  13,
  14,
  15,
  17,
  18,
  21,
  22,
  23,
  24,
  25,
  27,
  28,
  31,
  32,
  33,
  34,
  35,
  37,
  38,
  41,
  42,
  43,
  44,
  45,
  47,
  48
];
export const retention1List = ["", 18];
export const retention2List = ["", 28];
export const retention3List = ["", 38];
export const retention4List = ["", 48];
export const morbiList = [
  { name: "", value: "" },
  { name: "г.глибокий", value: "acuteDeep" },
  { name: "г.середній", value: "acuteMiddle" },
  { name: "г.поверх.", value: "acuteFacial" },
  { name: "х.глибокий", value: "chronicDeep" },
  { name: "х.середній", value: "chronicMiddle" },
  { name: "х.поверх.", value: "chronicFacial" },
  { name: "пульпіт", value: "pulpit" },
  { name: "періодонтит", value: "periodontit" }
];
export const abscessTypeList = [
  { name: "абсцес", value: "абсцес" },
  { name: "флегмона", value: "флегмона" },
  { name: "лімфаденіт", value: "лімфаденіт" },
  { name: "фурункул", value: "фурункул" }
];

export const abscessAreaList = [
  { value: "", name: "ділянка" },
  { value: "підщелепної", name: "підщелепна" },
  { value: "субментальної", name: "субментальна" },
  {
    value: "в ділянці сонного трикутника",
    name: "ділянка сонного трикутника"
  },
  { value: "привушної", name: "привушна" },
  { value: "підборідної", name: "підборідна" },
  { value: "щічної", name: "щічна" },
  { value: "нижньої губи", name: "нижня губа" },
  { value: "верхньої губи", name: "верхня губа" },
  { value: "підочної", name: "підочна" },
  { value: "виличної", name: "вилична" },
  { value: "лобної", name: "лобна" },
  { value: "позадувушної", name: "позадувушна" },
  { value: "дна порожнини рота", name: "дно порожнини рота" },
  { value: "твердого піднебіння", name: "тверде піднебіння" },
  { value: "щелепно-язикового жолобка", name: "щелепно-язиковий жолобок" },
  { value: "крило-щелепного простору", name: "крило-щелепний простір" }
];
export const abscessReasonList = [
  { name: "причина", value: "" },
  { name: "лімфовузол", value: "лімфовузол" },
  { name: "зуб", value: "зуб" },
  { name: "відсутня", value: "" }
];
export const cystTypeList = [
  { name: "вид кісти", value: "" },
  { name: "фолікулярна", value: "фолікулярна кіста" },
  { name: "радикулярна", value: "радикулярна кіста" },
  { name: "кістогранульома", value: "апікальна кістогранульома" }
];
export const rootSealedList = [
  { name: "канал зуба", value: "" },
  { name: "запломбовано", value: "rootSealed" },
  { name: "незпломбовано", value: "rootSealedNot" }
];
export const neoplasmTypeList = [
  { name: "новоутвір", value: "новоутвір" },
  { name: "папілома", value: "папілома" },
  { name: "ретенційна кіста", value: "ретенційна кіста" },
  { name: "фіброма", value: "фіброма" },
  { name: "атерома", value: "атерома" }
];
export const growthRateList = [
  { name: "темп росту", value: "" },
  { name: "швидко", value: "швидко" },
  { name: "поволі", value: "поволі" },
  {
    name: "спочатку швидко, потім поволі",
    value: "спочатку швидко, потім поволі"
  },
  {
    name: "спочатку поволі, потім швидко",
    value: "спочатку поволі, потім швидко"
  }
];
export const neoplasmFormList = [
  { name: "форма", value: "" },
  { name: "кругла", value: "круглої" },
  { name: "овальна", value: "овальної" },
  { name: "циліндрична", value: "циліндричної" },
  { name: "неправильна", value: "неправильної" },
  { name: "конусоподібна", value: "конусоподібної" }
];
export const neoplasmBorderList = [
  { name: "чіткі межі", value: "з чіткими межами" },
  { name: "розмиті межі", value: "з розмитими межами" },
  { name: "нерівні краї", value: "з нерівними краями" }
];
export const neoplasmMovabilityList = [
  { name: "рухомий", value: "рухомий" },
  { name: "нерухомий", value: "нерухомий" },
  { name: "обмежено рухомий", value: "обмежено рухомий" }
];
export const neoplasmPoignancyList = [
  { name: "безболісний", value: "безболісний" },
  { name: "болісний", value: "болісний" }
];
export const neoplasmConsistanceList = [
  { name: "щільна", value: "щільної" },
  { name: "м'яка", value: "м'якої" },
  { name: "еластична", value: "еластичної" },
  { name: "щільно-еластична", value: "щільно-еластичної" },
  { name: "мяко-еластична", value: "м'яко-еластичної" },
  { name: "тістоподібна", value: "тістоподібної" }
];
export const neoplasmSurfaceList = [
  { value: "шкіра", name: "шкіра" },
  { value: "слизова оболонка", name: "слизова оболонка" },
  { value: "червона облямівка", name: "червона облямівка" }
];
export const neoplasmColorList = [
  { name: "забарвлення", value: "" },
  { name: "червоний", value: "червоного" },
  { name: "темно-бурий", value: "темно-бурого" },
  { name: "синюшний", value: "синюшного" },
  { name: "темно-коричневий", value: "темно-коричневого" },
  { name: "блідо-рожевий", value: "блідо-рожевого" }
];
export const uColorList = [
  "жовта",
  "світло-жовта",
  "темно-жовта",
  "помаранчева",
  "бліда",
  "рожева",
  "темно-рожева"
];
export const uOpacityList = ["повна", "слабко-мутна", "мутна"];
export const enterobiozList = [
  {
    name: "яйця гостриків не виявлено",
    value: " яйця гостриків не виявлено"
  },
  { name: "яйця гостриків виявлено", value: " яйця гостриків виявлено" },
  { name: "не визначався", value: "не визначався" }
];
export const dungList = [
  {
    name: "яйця гельмінтів не виявлено",
    value: "яйця гельмінтів не виявлено"
  },
  { name: "яйця гельмінтів виявлено", value: "яйця гельмінтів виявлено" },
  { name: "не визначався", value: "не визначався" }
];
export const bloodGroupList = [
  { name: "група крові", value: "" },
  { name: "I(0)", value: "I(0)" },
  { name: "II(A)", value: "II(A)" },
  { name: "III(B)", value: "III(B)" },
  { name: "IV(AB)", value: "IV(AB)" }
];
export const rezusFactorList = [
  { name: "резус-фактор", value: "" },
  { name: "+", value: "+" },
  { name: "-", value: "-" }
];
export const townList = [
  { value: "", name: "оберіть місто" },
  { value: "м.Тернопіль, ", name: "Тернопіль" },
  { value: "м.Бережани, ", name: "Бережани" },
  { value: "м.Борщів, ", name: "Борщів" },
  { value: "м.Бучач, ", name: "Бучач" },
  { value: "м.Заліщики, ", name: "Заліщики" },
  { value: "м.Збараж, ", name: "Збараж" },
  { value: "м.Зборів, ", name: "Зборів" },
  { value: "м.Копичинці, ", name: "Копичинці" },
  { value: "м.Кременець, ", name: "Кременець" },
  { value: "м.Ланівці, ", name: "Ланівці" },
  { value: "м.Монастириська, ", name: "Монастириська" },
  { value: "м.Підгайці, ", name: "Підгайці" },
  { value: "м.Почаїв, ", name: "Почаїв" },
  { value: "м.Скалат, ", name: "Скалат" },
  { value: "м.Теребовля, ", name: "Теребовля" },
  { value: "м.Чортків, ", name: "Чортків" },
  { value: "м.Шумськ, ", name: "Шумськ" }
];
export const districtList = [
  { value: "", name: "оберіть район" },
  { value: "Тернопільський район, ", name: "Тернопільський" },
  { value: "Бережанський район, ", name: "Бережанський" },
  { value: "Борщівський район, ", name: "Борщівський" },
  { value: "Бучачцький район, ", name: "Бучацький" },
  { value: "Гусятинський район, ", name: "Гусятинський" },
  { value: "Заліщицький район, ", name: "Заліщицький" },
  { value: "Збаразький район, ", name: "Збаразький" },
  { value: "Зборівський район, ", name: "Зборівський" },
  { value: "Козівський район, ", name: "Козівський" },
  { value: "Кременецький район, ", name: "Кременецький" },
  { value: "Лановецький район, ", name: "Лановецький" },
  { value: "Монастириський район, ", name: "Монастириський" },
  { value: "Підволочиський район, ", name: "Підволочиський" },
  { value: "Підгаєцький район, ", name: "Підгаєцький" },
  { value: "Теребовлянський район, ", name: "Теребовлянський" },
  { value: "Чортківський район, ", name: "Чортківський" },
  { value: "Шумський район, ", name: "Шумський" }
];
export const restMaterialList = [
  { value: "", name: "пломбувальний матеріал" },
  { value: '"Latelux"', name: "Latelux" },
  { value: '"Charisma"', name: "Charisma" },
  { value: '"Filtek"', name: "Filtek" },
  { value: '"Spectrum"', name: "Spectrum" },
  { value: '"Dyract XP"', name: "Dyract XP" }
];
export const editTypeList = [
  { value: "", name: "оберіть частину" },
  { value: "name", name: "ПІБ пацієнта" },
  { value: "cardNumber", name: "номер мед.карти" },
  { value: "reviewDate", name: "дата огляду" },
  { value: "doctor", name: "особистий лікар" },
  { value: "complaintsContent", name: "скарги" },
  { value: "anamnesisMorbiContent", name: "анамнез хвороби" },
  { value: "anamnesisVitaeContent", name: "анамнез життя" },
  { value: "statusPraesensContent", name: "об'єктивний стан" },
  { value: "statusLocalisContent", name: "стан ЩЛД" },
  { value: "diagnosis", name: "діагноз" },
  { value: "protocolNumber", name: "номер протоколу" },
  { value: "operationName", name: "назва операції" },
  { value: "operationDate", name: "дата операції" },
  { value: "operationTime", name: "час операції" },
  { value: "operationContent", name: "протокол операції" },
  { value: "drugName1", name: "антибіотик" },
  { value: "drugName2", name: "протизапальний" },
  { value: "drugName3", name: "пробіотик" },
  { value: "drugName4", name: "антигістамінний" },
  { value: "drugName5", name: "інші призначення" },
  { value: "appointment", name: "дод. призначення 1" },
  { value: "appointment2", name: "дод. призначення 2" },
  { value: "appointment3", name: "дод. призначення 3" },
  { value: "shortStatusContent", name: "стан ЩЛД(епікриз)" }
];
export const bloodTestExponents = [
  "Hb, г/л",
  "Er, T/л	",
  "КП",
  "Leu, T/л",
  "пал, %",
  "сегм, %",
  "еоз, %",
  "лімф, %",
  "мон, %",
  "ШОЕ, мм/год"
];
export const urineTestExponents = [
  "Колір",
  "Прозорість",
  "Питома вага",
  "pH",
  "Білок",
  "Лейкоцити",
  "Плоский епіт.",
  "Перехідний епіт.",
  "Інше"
];
export const examinations = [
  "Загальний аналіз крові",
  "Загальний аналіз сечі",
  "Глюкоза крові",
  "Зішкріб на ентеробіоз",
  "Кал на яйця глистів"
];
export const baseIndications = [
  "Згоду батьків до операції отримано.",
  "Протипоказання до операції відсутні."
];
export const bilateralismList = [
  { name: "однобічний", value: false },
  { name: "двобічний", value: true }
];
export const fractureLowerAreaList = [
  { name: "ділянка перелому", value: "" },
  { name: "центральний", value: "центральний" },
  { name: "ментальний", value: "ментальний" },
  { name: "тіла в ділянці молярів", value: "тіла" },
  { name: "кутовий", value: "кутовий" },
  { name: "гілки", value: "гілки" },
  { name: "суглобового відростка", value: "суглобового відростка" },
  { name: "переломо-вивих", value: "переломо-вивих" }
];
export const fractureBiasList = ["без зміщення", "зі зміщенням"];
export const fractureDirectionList = ["лінійний", "косий", "зигзагоподібний"];
export const fractureLowerTeethList = [
  ``,
  38,
  37,
  36,
  35,
  34,
  33,
  32,
  31,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  75,
  74,
  73,
  72,
  71,
  81,
  82,
  83,
  84,
  85
];
export const teethInFractureLineList = [
  { name: "зуби інтактні", value: "" },
  { name: "лінія через зуб", value: "through" },
  { name: "лінія між зубами", value: "between" }
];
export const fractureStepList = [
  { name: "симптом сходинки", value: "неінформативний із-за набряку тканин" },
  { name: "відсутній", value: "відсутній" },
  { name: "позитивний", value: "позитивний" },
  { name: "неінформативний", value: "неінформативний із-за набряку тканин" }
];
export const xRayList = ["рентген", "КТ"];
export const continuityList = [
  { name: "безперерв. нижнього краю", value: "не порушена" },
  { name: "не порушена", value: "не порушена" },
  { name: "порушена", value: "порушена" }
];
export const fractureOperationTypeList = [
  { name: "тип операції", value: "шинами Васильєва" },
  { name: "шинами Васильєва", value: "шинами Васильєва" },
  { name: "по Айві", value: "по Айві" },
  { name: "остеосинтез", value: "остеосинтез" }
];
export const dlTypeList = [
  { name: "тип вивиху", value: "" },
  { name: "повний", value: "повний" },
  { name: "неповний", value: "неповний" },
  { name: "вколочений", value: "вколочений" }
];
export const dlOperationTypeList = [
  { name: "тип операції", value: "" },
  { name: "видалення", value: "extraction" },
  { name: "ушивання", value: "suturing" },
  { name: "шина-скоба", value: "splinting" }
];
export const dlToothList = toothList.sort();
export const dlDirectionList = [
  { name: "зміщення", value: "" },
  { name: "вниз", value: "вниз" },
  { name: "вгору", value: "вгору" }
];
export const overCompleteLocationList = [
  { name: "положення", value: "" },
  { name: "вестибулярне", value: "vestibular" },
  { name: "піднебінне", value: "palatine" },
  { name: "язикове", value: "lingual" }
];
export const xRayList2 = [
  { name: "оглядова Rg", value: "Rg" },
  { name: "КТ", value: "СT" }
];
export const overCompleteFormList = [
  { name: "форма", value: "" },
  { name: "конусоподібна", value: "конусоподібної" },
  { name: "шилоподібна", value: "шилоподібної" },
  { name: "анатомічна", value: "анатомічної" }
];
export const overCompleteAmountList = [
  { name: "кількість зубів", value: 2 },
  { name: 1, value: 1 },
  { name: 2, value: 2 }
];
export const days = [
  "",
  "1 день",
  "2 дні",
  "3 дні",
  "4 дні",
  "5 днів",
  "6 днів",
  "7 днів",
  "8 днів",
  "9 днів",
  "10 днів"
];

export const maleNames = [
  "Аркадій",
  "Антон",
  "Артур",
  "Арсен",
  "Анатолій",
  "Семен",
  "Олег",
  "Василь",
  "Степан",
  "Михайло",
  "Мирон",
  "Мирослав",
  "Роман",
  "Тарас",
  "Святослав",
  "В'ячеслав",
  "Ярослав",
  "Володимир",
  "Петро",
  "Павло",
  "Гнат",
  "Борис",
  "Ростислав",
  "Станіслав",
  "Семен",
  "Тимур",
  "Лука",
  "Тимофій",
  "Тадей",
  "Пилип",
  "Адріан",
  "Андрій",
  "Валерій",
  "Едуард",
  "Віталій",
  "Віктор",
  "Григорій",
  "Максим",
  "Констянтин",
  "Ілля",
  "Любомир",
  "Руслан",
  "Рустам",
  "Назар",
  "Назарій",
  "Олексій",
  "Захар",
  "Олександр",
  "Іван",
  "Ігор",
  "Зіновій",
  "Артем",
  "Даніель",
  "Данило",
  "Артур",
  "Денис",
  "Владислав",
  "Вадим",
  "Юрій",
  "Владлен",
  "Матвій",
  "Устим",
  "Йосип",
  "Осип",
  "Орест",
  "Генадій",
  "Адам",
  "Кирило",
  "Гліб",
  "Богдан",
  "Євген",
  "Марк",
  "Марко",
  "Маркіян",
  "Адріян",
  "Олесь",
  "Сергій",
  "Альберт",
  "Валентин",
  "Влад",
  "Всеволод",
  "Георгій",
  "Гордій",
  "Дем'ян",
  "Давид",
  "Дмитро",
  "Єгор",
  "Зиновій",
  "Зорян",
  "Леонід",
  "Лев",
  "Мартин",
  "Мар'ян",
  "Нестор",
  "Омелян",
  "Остап",
  "Горден",
  "Северин",
  "Федір",
  "Юлій",
  "Юхим",
  "Юліан",
  "Ян",
  "Микола"
  // "",
];
