export const isDatePast = (date) =>
  date.setHours(0, 0, 0, 0) <= new Date().setHours(0, 0, 0, 0);
