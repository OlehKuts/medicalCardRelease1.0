export const diaryListCreator = (
  startDay,
  startMonth,
  startYear,
  lastDay,
  lastMonth,
  lastYear
) => {
  const startDayNum = Number(startDay);
  const startMonthNum = Number(startMonth);
  const startYearNum = Number(startYear);
  const lastDayNum = Number(lastDay);
  const lastMonthNum = Number(lastMonth);
  const lastYearNum = Number(lastYear);

  let dList = [];
  let daysAmount = countDiaryDays(
    startDayNum,
    startMonthNum,
    lastDayNum,
    lastMonthNum
  );
  if (daysAmount.firstMonth !== 0) {
    for (let i = 1; i < Number(daysAmount.firstMonth) + 1; i++) {
      dList.push({
        date: `${startDayNum + i}.${startMonthNum}.${startYearNum}`,
        workDay: workDayChecker(startDayNum + i, startMonthNum, startYearNum)
      });
    }
  }
  if (daysAmount.secondMonth !== 0) {
    for (let j = 1; j < Number(daysAmount.secondMonth) + 1; j++) {
      dList.push({
        date: `${Number(j)}.${lastMonthNum}.${lastYearNum}`,
        workDay: workDayChecker(Number(j), lastMonthNum, lastYearNum)
      });
    }
  }
  return dList;
};

const workDayChecker = (day, month, year) => {
  let correctMonth = Number(month) - 1;
  let checkedDate = new Date(year, correctMonth, day);
  let checkedDay = checkedDate.getDay();
  if (Number(checkedDay) === 0 || Number(checkedDay) === 6) {
    return false;
  } else {
    return true;
  }
};

const countDiaryDays = (startDay, startMonth, lastDay, lastMonth) => {
  let daysAmount = {};
  if (startMonth === lastMonth) {
    daysAmount.firstMonth = lastDay - startDay;
    daysAmount.secondMonth = 0;
  }
  if (startMonth + 1 === lastMonth) {
    switch (startMonth) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        daysAmount.firstMonth = 31 - startDay;
        daysAmount.secondMonth = lastDay;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        daysAmount.firstMonth = 30 - startDay;
        daysAmount.secondMonth = lastDay;
        break;
      case 2:
        daysAmount.firstMonth = 28 - startDay;
        daysAmount.secondMonth = lastDay;
        break;
      default:
        daysAmount.firstMonth = 0;
        daysAmount.secondMonth = 0;
    }
  }
  return daysAmount;
};
