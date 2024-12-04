import moment from "moment-jalaali";

moment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

export const convertDateToJalali = (date: string): string => {
  const today = moment().startOf("day");
  const inputDate = moment(date, "YYYY-MM-DD").startOf("day");

  if (inputDate.isSame(today)) {
    return "امروز";
  }

  return inputDate.format("jD jMMMM"); // E.g., ۳۰ مهر
};
