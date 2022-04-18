import "intl";

import "intl/locale-data/jsonp/en";

const formattMoney = (number) => {
  const moneyFormatt = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return moneyFormatt.format(number);
};

export default function MoneyConvert(moneyCurrent, convertCurrent, simbol) {
  let money = formattMoney(convertCurrent[simbol] * moneyCurrent);
  if (money !== "$NaN") return money;
  else return "$0";
}
