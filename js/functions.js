const checkLength = (string = '', length = 1) => string.length <= length;

checkLength('проверяемая строка', 20);
// тест
// console.log(checkLength('проверяемая строка', 20)); // true
// console.log(checkLength('проверяемая строка', 18)); // true
// console.log(checkLength('проверяемая строка', 10)); // false


const isPalindrome = (string) => {
  const noSpacesStr = string.replaceAll(' ', '').toLowerCase();

  const reversedStr = noSpacesStr.split('').reverse().join('');

  return reversedStr === noSpacesStr;
};

isPalindrome('топот');
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

extractDigits('2023 год');
// тест
// console.log(extractDigits('2023 год'));            // 2023
// console.log(extractDigits('ECMAScript 2022'));     // 2022
// console.log(extractDigits('1 кефир, 0.5 батона')); // 105
// console.log(extractDigits('агент 007'));           // 7
// console.log(extractDigits('а я томат'));           // NaN
// console.log(extractDigits(2023)); // 2023
// console.log(extractDigits(-1));   // 1
// console.log(extractDigits(1.5));  // 15

const isWorkingHours = (startWork, endWork, startMeeting, meetingLength) => {
  const [startHours, startMinutes] = startWork.split(':').map((item) => Number(item));
  const [endHours, endMinutes] = endWork.split(':').map((item) => Number(item));
  const [meetingHours, meetingMinutes] = startMeeting.split(':').map((item) => Number(item));

  const startDate = new Date(0);
  startDate.setUTCHours(startHours, startMinutes);

  const endDate = new Date(0);
  endDate.setUTCHours(endHours, endMinutes);

  const meetingStartDate = new Date(0);
  meetingStartDate.setUTCHours(meetingHours, meetingMinutes);

  const meetingEndDate = new Date(0);
  meetingEndDate.setTime(meetingStartDate.getTime() + meetingLength * 60 * 1000);

  return (meetingStartDate >= startDate && meetingEndDate <= endDate);
};

isWorkingHours('08:00', '17:30', '14:00', 90);
// тест
// console.log(isWorkingHours('08:00', '17:30', '14:00', 90)); // true
// console.log(isWorkingHours('8:0', '10:0', '8:0', 120));     // true
// console.log(isWorkingHours('08:00', '14:30', '14:00', 90)); // false
// console.log(isWorkingHours('14:00', '17:30', '08:0', 90));  // false
// console.log(isWorkingHours('8:00', '17:30', '08:00', 900)); // false
