let temperature = 20;
let isRaining = true;
let minutes = 0;

if (isRaining) {
  minutes = 0
} else if (temperature >=10 && temperature < 15) {
  minutes = 30
} else if (temperature >= 15 && temperature < 25) {
  minutes = 40
} else if (temperature >= 25 && temperature <= 35) {
  minutes = 20
} 