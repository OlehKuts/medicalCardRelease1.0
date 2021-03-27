export const treatmentCreator = (drugName, age, weight) => {
  if (drugName === "Амоксиклав") {
    return amoxyclavCounter(weight);
  } else if (drugName === "Лінкоміцин") {
    return lincomycinCounter(weight);
  } else if (drugName === "Сумамед") {
    return sumamedCounter(weight);
  } else if (drugName === "Цефодокс") {
    return cefodoxCounter(weight);
  } else if (drugName === "Лопракс") {
    return lopraxCounter(weight);
  } else if (drugName === "Цефтріаксон") {
    return ceftriaxonCounter(weight);
  } else if (drugName === "Діацеф") {
    return diacefCounter(weight);
  } else if (drugName === "Цефотаксим") {
    return cefotaximCounter(weight);
  } else if (drugName === "Аміцил") {
    return amicylCounter(weight);
  } else if (drugName === "Нурофен") {
    return nurofenCounter(age);
  } else if (drugName === "Парацетамол") {
    return paracetamolCounter(age);
  } else if (drugName === "Неофлорум") {
    return neoflorumCounter(age);
  } else if (drugName === "Пробіз") {
    return probizCounter(age);
  } else if (drugName === "Лоратадин") {
    return loratadynCounter(weight);
  } else if (drugName === "Феністил") {
    return fenistylCounter(weight);
  } else if (drugName === "Метрогіл") {
    return metrogilCounter(weight);
  } else if (drugName === "Содовий розчин") {
    return sodaCounter();
  } else if (drugName === "Ентерожерміна форте") {
    return enterogerminaCounter();
  } else if (drugName === "Цефікс") {
    return cefixCounter(weight);
  } else if (drugName === "L-лізину есцинат") {
    return l_LisynCounter(weight, age);
  } else if (drugName === "Гепарин") {
    return heparynCounter(weight);
  } else return "";
};

const loratadynCounter = (weight) => {
  if (weight < 30) {
    return "Лоратадин, сироп, по 5 мл, 1 р/д";
  } else return "Лоратадин, таблетки, по 10 мг, 1 р/д";
};
const sodaCounter = () => {
  return "Ротові ваночки з содовим розчином, по 1хв., 4 р/д";
};
const fenistylCounter = (weight) => {
  let kilo = Number(weight);
  let dose = 0;
  dose = (kilo * 2) / 3;
  return `Феністил, по ${dose.toFixed()} кап., 3 р/д`;
};
const lincomycinCounter = (weight) => {
  let kilo = Number(weight);
  let dose = 0;
  if (kilo < 41 && kilo > 0) {
    dose = kilo / 20;
    return `Лінкоміцину гідрохлорид(30%), по ${dose.toFixed(
      1
    )} мл в/м'язово, 2 р/д`;
  } else {
    dose = kilo / 30;
    return `Лінкоміцину гідрохлорид(30%), по
      ${dose.toFixed(1)} мл в/м'язово, 3 р/д`;
  }
};
const amoxyclavCounter = (weight) => {
  let dose = weight / 6;
  if (weight < 40) {
    return `Амоксиклав(250/62.5мг), по ${dose.toFixed()} мл, 3 р/д`;
  } else if (weight < 60) {
    return "Амоксиклав(500/125мг), таблетки, по 1 таб., 2 р/д";
  } else return "Амоксиклав(875/125мг), таблетки, по 1 таб., 2 р/д";
};
const sumamedCounter = (weight) => {
  let dose = 0;
  if (weight < 16) {
    dose = weight / 2;
    return ` Сумамед(100мг/5мл), по ${dose.toFixed(1)} мл, 1 р/д`;
  } else if (weight < 45) {
    dose = weight / 4;
    return ` Сумамед(200мг/5мл), по ${dose.toFixed(1)} мл, 1 р/д`;
  } else {
    return " Сумамед(500мг), по 1таб., 1 р/д";
  }
};
const cefodoxCounter = (weight) => {
  let dose = 0;
  if (weight < 21) {
    dose = weight / 2;
    return `Цефодокс(50мг/5мл), по ${dose.toFixed(1)} мл, 2 р/д`;
  } else if (weight < 41) {
    dose = weight / 4;
    return `Цефодокс(100мг/5мл), по ${dose.toFixed(1)} мл, 2 р/д`;
  } else {
    return " Цефодокс(200мг), по 1таб., 2 р/д";
  }
};
const lopraxCounter = (weight) => {
  let dose = 0;
  if (weight < 41) {
    dose = weight / 5;
    return `Лопракс(100мг/5мл), по ${dose.toFixed(1)} мл, 2 р/д`;
  } else {
    return " Лопракс(400мг), по 1таб., 1 р/д";
  }
};
const ceftriaxonCounter = (weight) => {
  let kilo = Number(weight);
  let dose = 0;
  if (kilo < 21) {
    dose = kilo / 20;
    return `Цефтріаксон, по ${dose.toFixed(1)} г, в/венно, 2 р/д`;
  } else if (kilo < 51) {
    return "Цефтріаксон, по 1,0 г, в/венно, 2 р/д";
  } else {
    return "Цефтріаксон, по 1,0 г, в/венно, 3 р/д";
  }
};
const diacefCounter = (weight) => {
  let kilo = Number(weight);
  let dose = 0;
  if (kilo < 21) {
    dose = kilo / 20;
    return `Діацеф, по ${dose.toFixed(1)} г, в/венно, 2 р/д`;
  } else if (kilo < 51) {
    return "Діацеф, по 1,0 г, в/венно, 2 р/д";
  } else {
    return "Діацеф, по 1,5 г, в/венно, 2 р/д";
  }
};
const cefotaximCounter = (weight) => {
  let kilo = Number(weight);
  let dose = 0;
  if (kilo < 21) {
    dose = kilo / 20;
    return `Цефотаксим, по ${dose.toFixed(1)} г, в/венно, 2 р/д`;
  } else if (kilo < 51) {
    return "Цефотаксим, по 1,0 г, в/венно, 2 р/д";
  } else {
    return "Цефотаксим, по 1,0 г, в/венно, 3 р/д";
  }
};
const amicylCounter = (weight) => {
  let dose = (weight * 15) / 2;
  if (weight < 34) {
    return `Аміцил(250мг), по ${dose.toFixed(0)} мг, в/венно, 2 р/д`;
  } else if (weight < 67) {
    return `Аміцил(500мг), по ${dose.toFixed(0)} мг, в/венно, 2 р/д`;
  } else {
    return `Аміцил(1000мг), по ${dose.toFixed(0)} мг, в/венно, 2 р/д`;
  }
};
const nurofenCounter = (age) => {
  if (age < 1) {
    return "Нурофен, сироп, по 2.5мл, 3 р./д.";
  } else if (age < 4) {
    return "Нурофен, сироп, по 5мл, 3 р./д.";
  } else if (age < 7) {
    return "Нурофен, сироп, по 7.5мл, 3 р./д.";
  } else if (age < 10) {
    return "Нурофен, сироп, по 10мл, 3 р./д.";
  } else if (age < 14) {
    return "Ібупрофен(200мг), таблетки, по 1 таб., 2 р./д.";
  } else return "Ібупрофен(200мг), таблетки, по 2 таб., 2 р./д.";
};
const paracetamolCounter = (age) => {
  if (age < 1) {
    return "Панадол, сироп, по 5мл, 3 р./д.";
  } else if (age < 4) {
    return "Панадол, сироп, по 7,5мл, 3 р./д.";
  } else if (age < 7) {
    return "Панадол, сироп, по 10мл, 3 р./д.";
  } else if (age < 10) {
    return "Парацетамол(250мг), по 1 таб.,3 р./д.";
  } else if (age < 12) {
    return "Парацетамол(325мг), по 1 таб., 3 р./д.";
  } else return "Парацетамол(500мг),по 1 таб., 3 р./д.";
};
const neoflorumCounter = (age) => {
  if (age < 6) {
    return "Лактомун, по 1 саше, 1 р./д.";
  } else if (age < 12) {
    return "Неофлорум, по 1 капсулі, 1 р./д.";
  } else {
    return "Неофлорум, по 1 капсулі, 2 р./д.";
  }
};
const probizCounter = (age) => {
  if (age < 6) {
    return "Пробіз кідс, по 1 міні-флакону, 1 р./д.";
  } else if (age < 12) {
    return "Пробіз, по 1 капсулі, 1 р./д.";
  } else {
    return "Пробіз, по 1 капсулі, 2 р./д.";
  }
};
const metrogilCounter = (weight) => {
  let dose = (weight * 3) / 2;
  if (weight < 67) {
    return `Метрогіл, по ${dose.toFixed(0)} мл, в/венно, 3 р/д`;
  } else {
    return "Метрогіл, по 100 мл, в/венно, 3 р/д";
  }
};
export const heparynCounter = (weight) => {
  let resultMo = 100 * weight;
  let resultMl = resultMo / 5000;
  return `Гепарин, по ${resultMo} МО(${resultMl} мл), 4 р/д, п/ш`;
};

const l_LisynCounter = (weight, age) => {
  let dose = age < 6 ? 0.22 * weight : age < 11 ? 0.18 * weight : 0.18 * weight;
  return `L-лізину есцинат, по ${dose.toFixed(0)} мл, в/венно, 2 р/д`;
};
const enterogerminaCounter = () => {
  return "Ентерожерміна форте, по 5 мл, 1 р/д";
};
const cefixCounter = (weight) => {
  let result = 0;
  if (weight < 40) {
    result = (weight * 2) / 5;
    return `Цефікс(100мг/5мл), по ${result} мл, 1 р/д`;
  } else {
    return `Цефікс(400мг), по 1 таб., 1 р/д`;
  }
};
