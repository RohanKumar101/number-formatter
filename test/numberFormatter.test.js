const {
  formatCurrency,
  addCommas,
  formatPercent,
  toRomanNumeral,
  numberToOrdinal,
  toCompact,
  roundTo,
  abbreviateNumber,
  formatDuration,
} = require('../index');

describe('Number Formatter Tests', () => {
    test('formatCurrency', () => {
        expect(formatCurrency(1234.56)).toBe('$1,234.56');
        expect(formatCurrency(1234.56, 'de-DE', 'EUR')).toBe('1.234,56 €');
    });
    
    test('addCommas', () => {
        expect(addCommas(1234567)).toBe('1,234,567');
        expect(addCommas(1000.5)).toBe('1,000.5');
    });
    
    test('formatPercent', () => {
        expect(formatPercent(0.1234)).toBe('12.34%');
        expect(formatPercent(0.1234, 3)).toBe('12.340%');
    });
    
    test('toCompact', () => {
        expect(toCompact(1500)).toBe('1.5K');
        expect(toCompact(1000000)).toBe('1M');
    });
    
    test('roundTo', () => {
        expect(roundTo(123.4567)).toBe(123.46);
        expect(roundTo(123.4567, 3)).toBe(123.457);
    });
    
    test('abbreviateNumber', () => {
        expect(abbreviateNumber(1500)).toBe('1.50K');
        expect(abbreviateNumber(1000000)).toBe('1.00M');
        expect(abbreviateNumber(-2500000000)).toBe('-2.50B');
    });
    
    test('numberToOrdinal', () => {
        expect(numberToOrdinal(1)).toBe('1st');
        expect(numberToOrdinal(2)).toBe('2nd');
        expect(numberToOrdinal(3)).toBe('3rd');
        expect(numberToOrdinal(4)).toBe('4th');
        expect(numberToOrdinal(21)).toBe('21st');
    });
    
    test('toRomanNumeral', () => {
        expect(toRomanNumeral(1999)).toBe('MCMXCIX');
        expect(toRomanNumeral(2023)).toBe('MMXXIII');
    });
    
    test('formatDuration', () => {
        expect(formatDuration(3661)).toBe('1h 1m 1s');
        expect(formatDuration(61)).toBe('1m 1s');
        expect(formatDuration(59)).toBe('59s');
        expect(formatDuration(3600)).toBe('1h');
        expect(formatDuration(0)).toBe('0s');
    });
});