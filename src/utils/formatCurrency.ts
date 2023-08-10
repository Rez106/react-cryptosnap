const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

const formatCurrency = (number: number): string => {
  if (number == undefined || number == null) return "";

  return CURRENCY_FORMATTER.format(number);
};

export default formatCurrency;
