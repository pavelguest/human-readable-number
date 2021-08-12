module.exports = function toReadable (number) {
  let onesNumbers = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'];
  let decadesNumbers = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
  let otherNumbers = [' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
  let hundreds = Math.floor(number / 100); 
  let decades = Math.floor((number - hundreds * 100) / 10); 
  let decadesOther = Math.floor(number - hundreds * 100);
  let decadesOst = Math.floor((number - hundreds * 100) % 10);  
  let decadesTwo = Math.floor(number % 10);
  let ones = number % 10;

  if (number === 0) {
    return 'zero';
  } else if (number < 10) {
      return `${onesNumbers[ones]}`.trim();
  } else if (number >= 10 && number <= 19) {
      return `${otherNumbers[decadesTwo]}`.trim();  
  } else if (number > 19 && number < 100) {
      return `${decadesNumbers[decades]}${onesNumbers[ones]}`.trim();  
  } else if (decadesOther >= 10 && decadesOther <= 19) {
      return `${onesNumbers[hundreds]} hundred${otherNumbers[decadesOst]}`.trim();    
  } else {
      return `${onesNumbers[hundreds]} hundred${decadesNumbers[decades]}${onesNumbers[ones]}`.trim();
  }
}
