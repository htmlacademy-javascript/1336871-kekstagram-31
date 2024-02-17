const checkLength = (string, length) => string.length <= length;
// тест
// console.log(checkLength('проверяемая строка', 20)); // true
// console.log(checkLength('проверяемая строка', 18)); // true
// console.log(checkLength('проверяемая строка', 10)); // false


const isPalindrome = (string) => {
  const noSpacesStr = string.replaceAll(' ', '').toLowerCase();

  const reversedStr = noSpacesStr.split('').reverse().join('');

  return reversedStr === noSpacesStr;
};
// тест
// console.log(isPalindrome('топот')); // true
// console.log(isPalindrome('ДовОд')); // true
// console.log(isPalindrome('Кекс')); // false
// console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true


const extractDigits = (string) => {
  let innerStr = string;

  if (typeof string === 'number') {
    innerStr = string.toString();
  }

  const digitsStr = innerStr.replace(/[^\d]/g, '');

  return parseInt(digitsStr, 10);
};
// тест
// console.log(extractDigits('2023 год'));            // 2023
// console.log(extractDigits('ECMAScript 2022'));     // 2022
// console.log(extractDigits('1 кефир, 0.5 батона')); // 105
// console.log(extractDigits('агент 007'));           // 7
// console.log(extractDigits('а я томат'));           // NaN
// console.log(extractDigits(2023)); // 2023
// console.log(extractDigits(-1));   // 1
// console.log(extractDigits(1.5));  // 15


export {checkLength, isPalindrome, extractDigits};
