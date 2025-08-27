enum NUMBERS {
  TEN = 10,
  ONE_HUNDRED = 100,
  ONE_THOUSAND = 1_000,
  ONE_MILLION = 1_000_000,
  ONE_BILLION = 1_000_000_000, //         1.000.000.000 (9)
  ONE_TRILLION = 1_000_000_000_000, //     1.000.000.000.000 (12)
  ONE_QUADRILLION = 1_000_000_000_000_000, // 1.000.000.000.000.000 (15)
  MAX = 9_007_199_254_740_992, // 9.007.199.254.740.992 (15)
}

const LESS_THAN_TWENTY = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
] as const;

const TENTHS_LESS_THAN_HUNDRED = [
  'zero',
  'ten',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
] as const;

/**
 * Преобразует целое число в слова.
 * Если число десятичное, то десятичные дроби будут удалены.
 * @example toWords(12) => 'twelve'
 * @param {number|string} number
 * @param {boolean} [asOrdinal] - Считается устаревшим, вместо этого используйте toWordsOrdinal()!
 * @returns {string}
 */
function toWords(number: number | string, asOrdinal: boolean): string {
  let words: string;
  const num: number = parseInt(String(number), 10);

  if (!isFinite(num)) {
    throw new TypeError(
      'Не конечное число: ' + number + ' (' + typeof number + ')'
    );
  }
  // @ts-ignore - Чтобы компилятор не ругался на отсутствующий метод
  if (!isSafeNumber(num)) {
    throw new RangeError(
      'Вводимое число не является безопасным, оно либо слишком большое, либо слишком маленькое.'
    );
  }
  words = generateWords(num);
  // @ts-ignore - Чтобы компилятор не ругался на отсутствующий метод
  return asOrdinal ? makeOrdinal(words) : words;
}

function generateWords(number: number, words?: (string | undefined)[]): string {
  let remainder: number, word: string | undefined;

  // Мы закончили
  if (number === 0) {
    return !words ? 'zero' : words.join(' ').replace(/,$/, '');
  }
  // First run
  if (!words) {
    words = [];
  }
  // If negative, prepend “minus”
  if (number < 0) {
    words.push('minus');
    number = Math.abs(number);
  }

  if (number < 20) {
    remainder = 0;
    word = LESS_THAN_TWENTY[number];
  } else if (number < NUMBERS.ONE_HUNDRED) {
    remainder = number % NUMBERS.TEN;
    word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / NUMBERS.TEN)];
    // In case of remainder, we need to handle it here to be able to add the “-”
    if (remainder) {
      word += '-' + LESS_THAN_TWENTY[remainder];
      remainder = 0;
    }
  } else if (number < NUMBERS.ONE_THOUSAND) {
    remainder = number % NUMBERS.ONE_HUNDRED;
    word = generateWords(Math.floor(number / NUMBERS.ONE_HUNDRED)) + ' hundred';
  } else if (number < NUMBERS.ONE_MILLION) {
    remainder = number % NUMBERS.ONE_THOUSAND;
    word =
      generateWords(Math.floor(number / NUMBERS.ONE_THOUSAND)) + ' thousand,';
  } else if (number < NUMBERS.ONE_BILLION) {
    remainder = number % NUMBERS.ONE_MILLION;
    word =
      generateWords(Math.floor(number / NUMBERS.ONE_MILLION)) + ' million,';
  } else if (number < NUMBERS.ONE_TRILLION) {
    remainder = number % NUMBERS.ONE_BILLION;
    word =
      generateWords(Math.floor(number / NUMBERS.ONE_BILLION)) + ' billion,';
  } else if (number < NUMBERS.ONE_QUADRILLION) {
    remainder = number % NUMBERS.ONE_TRILLION;
    word =
      generateWords(Math.floor(number / NUMBERS.ONE_TRILLION)) + ' trillion,';
  } else if (number <= NUMBERS.MAX) {
    remainder = number % NUMBERS.ONE_QUADRILLION;
    word =
      generateWords(Math.floor(number / NUMBERS.ONE_QUADRILLION)) +
      ' quadrillion,';
  }

  words.push(word);
  return generateWords(remainder!, words);
}
