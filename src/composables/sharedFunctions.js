export function convertDateToMonthYear(dateToConvert) {
  return new Date(dateToConvert).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
  });
}
