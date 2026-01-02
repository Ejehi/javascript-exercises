const convertToCelsius = function(temp) {
  let tempInCelsius = Math.round(((temp - 32) * (5/9)) * 10)/10;
  return tempInCelsius; 
};

const convertToFahrenheit = function(temp) {
  let tempInFahrenheit = Math.round(((temp * 9/5) + 32) * 10)/10;
  return tempInFahrenheit; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
