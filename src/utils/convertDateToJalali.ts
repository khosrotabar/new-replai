import moment from "moment-jalaali";
import jalaali from "jalaali-js";

moment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

export const convertDateToJalali = (date: string): string => {
  const today = moment().startOf("day");
  const inputDate = moment(date, "YYYY-MM-DD").startOf("day");

  if (inputDate.isSame(today)) {
    return "امروز";
  }

  return inputDate.format("jD jMMMM"); // E.g., ۳۰ مهر
};

export function convertToJalaliFull(dateString: string) {
  // Parse the date string to a Date object
  const date = new Date(dateString);

  // Get the Jalali date components
  const { jy, jm, jd } = jalaali.toJalaali(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  );

  // Define an array of Jalali month names
  const months = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  // Format the date as "day month year"
  return `${jd} ${months[jm - 1]} ${jy}`;
}
