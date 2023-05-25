// formatter utils function

const formatBalance = (number,  mode, currency) =>  {
  const formatter = new Intl.NumberFormat("en-US", {
    style: mode ? mode : undefined,
    currency: currency ? currency : undefined,
    minimumFractionDigits: 2,
    maximumFractionDigits: mode ? 2 : 6,
  });

  return formatter.format(number);
};

const formatPercentage = (value) => formatBalance(value / 100, 'percent');

function sortTable(table, field, operator = "<") {
  if (field === "#")
    return table.reverse();

  if (field.includes('.')) {
    const keys = field.split('.');
    return table.sort((a, b) => {
      const isString = isNaN(parseFloat(a[keys[0]][keys[1]]));
      if (isString) {
        if (a[keys[0]][keys[1]] === b[keys[0]][keys[1]]) return 0;
        return eval(`'${a[keys[0]][keys[1]]}' ${operator} '${b[keys[0]][keys[1]]}'`) ? -1 : 1;
      } else {
        if (parseFloat(a[keys[0]][keys[1]]) === parseFloat(b[keys[0]][keys[1]])) return 0;
        return eval(parseFloat(a[keys[0]][keys[1]]) + operator + parseFloat(b[keys[0]][keys[1]]))  ? -1 : 1;
      }
    });
  }

  return table.sort((a, b) => {
    const isString = isNaN(parseFloat(a[field]));
    if (isString) {
      if (a[field] === b[field]) return 0;
      return eval(`'${a[field].toLowerCase()}' ${operator} '${b[field].toLowerCase()}'`) ? -1 : 1;
    } else {
      if (parseFloat(a[field]) === parseFloat(b[field])) return 0;
      return eval(parseFloat(a[field]) + operator + parseFloat(b[field]))  ? -1 : 1;
    }
  });
}

const formatPriceColor = (price) => price >= 0 ? 'success.main' : 'error.main';

const formatNumberChange = (price, mode = "percent", currency) => ((price < 0 ? "" : "+") + formatBalance(price, mode, currency));

export {
  formatBalance,
  formatNumberChange,
  formatPercentage,
  sortTable,
  formatPriceColor,
};
