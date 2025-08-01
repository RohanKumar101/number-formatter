function formatCurrency(number, locale = 'en-US', currency = 'USD') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(number);
}

function addCommas(number) {
  return number.toLocaleString();
}

function formatPercent(number, decimalPlaces = 2) {
  return (number * 100).toFixed(decimalPlaces) + '%';
}

function toCompact(number, locale = 'en-US') {
  return new Intl.NumberFormat(locale, {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(number);
}

function roundTo(number, decimalPlaces = 2) {
  return Number(number.toFixed(decimalPlaces));
}

function abbreviateNumber(number) {
  const abs = Math.abs(number);

  if (abs >= 1e15) return (number / 1e15).toFixed(2) + 'P';
  if (abs >= 1e12) return (number / 1e12).toFixed(2) + 'T';
  if (abs >= 1e9) return (number / 1e9).toFixed(2) + 'B';
  if (abs >= 1e6) return (number / 1e6).toFixed(2) + 'M';
  if (abs >= 1e3) return (number / 1e3).toFixed(2) + 'K';
  return number.toString();
}

function numberToOrdinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function toRomanNumeral(num) {
  const romanMap = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
  ];
  let result = '';
  for (const [val, sym] of romanMap) {
    while (num >= val) {
      result += sym;
      num -= val;
    }
  }
  return result;
}

function formatDuration(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const parts = [];
  if (hrs) parts.push(`${hrs}h`);
  if (mins) parts.push(`${mins}m`);
  if (secs || parts.length === 0) parts.push(`${secs}s`);

  return parts.join(' ');
}



module.exports = {
  formatCurrency,
  addCommas,
  formatPercent,
  toRomanNumeral,
  numberToOrdinal,
  toCompact,
  roundTo,
  abbreviateNumber,
  formatDuration,
};