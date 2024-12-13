import dayjs from "dayjs";
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
/**
 * @description get an hour collection
 * @param {Number} count
 * @return  {Array}
 * @date 2020/9/4
 *
 */
export const handleHourSet = (count) => {
  const data = [];
  let character = 0;
  while (count >= 1) {
    data.push(character);
    character++;
    count--;
    if (character === 24) character = 0;
  }
  return data;
};
/**
 * @description get a set of days
 * @param {Object} start
 * @param {Object} end
 * @return  {Array}
 * @date 2020/9/4
 *
 */
export const handleDateSet = (start, end) => {
  const dataList = [];
  let startTime = dayjs(start);
  const endTime = dayjs(end);
  while (startTime.isSameOrBefore(endTime, "day")) {
    dataList.push(startTime.format("MM/DD/YYYY"));
    startTime = startTime.add(1, "day");
  }
  return dataList;
};

export const handleDaySet = (startDate, endDate) => {
  const data = [];
//   const startDateLocal = new Date(startDate);
//   const endDateLocal = new Date(endDate);
//   let totalSeconds = Math.abs(endDateLocal - startDateLocal) / 1000;
//   let daysDifference = Math.floor (totalSeconds / (60 * 60 * 24));
//   for (var i = 0; i <= daysDifference; i++) {
//     let currentDate = new Date();
//     currentDate.setDate(startDateLocal.getDate() + i);
//     data.push(currentDate.toLocaleDateString("en-US", { day: "numeric" }));
//   }
// return data;
  
  function getDaysInMonth(date) { // Use 1 for January, 2 for February, etc.
    const month = date.month() + 1;
    const year = date.year();
    return new Date(year, month, 0).getDate();
  }

  let startTime = dayjs(startDate);
  const endTime = dayjs(endDate);
  let daysInMonth = getDaysInMonth(startTime);
  let dataModifier = startTime.get("date");
  while (startTime.isSameOrBefore(endTime, "day")) {
    data.push({
      label: `${startTime.format("ddd, DD MMM YYYY")}`,
      value: dataModifier,
      isWeekend: startTime.day() === 0 || startTime.day() === 6,
    });
    dataModifier++;
    if ([28, 29, 30, 31].some((x) => x < dataModifier)) {
      if (dataModifier > daysInMonth) {
        dataModifier = 1;
        daysInMonth = getDaysInMonth(startTime.add(1, "month"));
      }
    }
    startTime = startTime.add(1, "day");
  }
  return data;
}

export const handleWeekSet = (startDate, endDate) => {
  const data = [];
  let startTime = dayjs(startDate);
  let endTime = dayjs(endDate);

  const differenceInWeeks = endTime.diff(startTime, "week");
  // Default week window of 12 weeks
  // if (differenceInWeeks < 12) {
  //   endTime = startTime.add(12, "week");
  // }
  /* Start form start of week*/
  // startTime = startTime.subtract(startTime.day(), "day");
  // endTime = endTime.add(6 - endTime.day(), "day");
  
  const start = startTime.format("MM/DD/YYYY");
  const end = endTime.format("MM/DD/YYYY");
  const differenceInDayCount = differenceInDays(start, end);
  while (startTime.isSameOrBefore(endTime, "day")) {
    let startWeek = startTime;
    let endWeek
    if (dayjs(startTime).day() === 0) {
      endWeek = startWeek.add(6, "day");
    } else {
      endWeek = startWeek.add(6 - startWeek.day(), "day");
    }

    if (endWeek.isAfter(endTime)) {
      endWeek = startWeek.add(endTime.day(), "day");
    }

    let length = endWeek.diff(startWeek, "day") + 1;
    let label;
    if (differenceInDayCount > 20) {
      // Label Update case for Ui where per hour is too small 
      switch (length) {
        case 1:
          label = `${startWeek.get("date")}`
          break;
        case 2:
          label = `${startWeek.get("date")} - ${endWeek.get("date")}`
          break;
          case 3:
            label = `${startWeek.format("MMM")} ${startWeek.get("date")} - ${endWeek.get("date")}`
            break;
        default:
          label = `${startWeek.format("MMM")} ${startWeek.get("date")} - ${endWeek.format("MMM")} ${endWeek.get("date")}`;
          break;
      }
    } else {
      label = `${startWeek.format("MMM")} ${startWeek.get("date")} - ${endWeek.format("MMM")} ${endWeek.get("date")}`;
    }

    data.push({
      label,
      length,
    });
    if (dayjs(startWeek).day() === 0) {
      startTime = startWeek.add(7, "day");
    } else {
      startTime = startWeek.add(7 - startWeek.day(), "day");
    }
  }
  return {
    data,
    startDate: start,
    endDate: end,
  };
};

export const differenceInDays = (start, end) => {
  let startTime = dayjs(start);
  let endTime = dayjs(end);
  return endTime.diff(startTime, "minute") / (60 * 24);
};

export const differenceInHours = (start, end, forceTimeCheck) => {
  let startTime = dayjs(start);
  let endTime = dayjs(end);
  const diff = endTime.diff(startTime, "minute") / 60;
  return forceTimeCheck ? diff : diff + 24;
};

