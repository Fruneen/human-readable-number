module.exports = function toReadable (number) {
  if (number === 0) return 'zero';
  let demicalNumbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  let secondDecade = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let firstHundred = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (number <= 10) {
      return demicalNumbers[number - 1];
  } else if (number > 10 && number < 20) {
    number -= 10;
    return secondDecade[number - 1];
    } else if (number >= 20 && number < 100) {
      if (number % 10 === 0) {
        number = String(number);
        return firstHundred[+number[0] - 2];     
      } else {
        number = String(number);
        return firstHundred[+number[0] - 2] + ' ' + demicalNumbers[+number[1] - 1];
        }
      } else if (number >= 100 && number < 1000) {
        number = String(number);
            if (number[1] === '0' && number[2] !== '0') {
                return demicalNumbers[+number[0] - 1] + ' hundred ' + demicalNumbers[+number[2] - 1];   
            } else if (number[1] === '1' && number[2] === '0') {
                return demicalNumbers[+number[0] - 1] + ' hundred ' + demicalNumbers[9]; 
            } else if (number[1] === '1') {
                return demicalNumbers[+number[0] - 1] + ' hundred ' + secondDecade[+number[2] - 1];
            } else if (number % 100 === 0) {
                return demicalNumbers[+number[0] - 1] + ' hundred';     
            } else if (number % 10 === 0) {
                return demicalNumbers[+number[0] - 1] + ' hundred ' + firstHundred[+number[1] - 2];    
             } else {
                return demicalNumbers[+number[0] - 1] + ' hundred ' + firstHundred[+number[1] - 2] + ' ' + demicalNumbers[+number[2] - 1];
               }
      }
}