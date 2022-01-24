let qualificationDistance = 200;
let attempts = [120, 150, 160, 201, 203, 180, 202];
let qualified = false;
let averageBest = 0;

for (let i= 0; i <= attempts.length - 2; i++) {
  let maxValue = attempts[i];
  
  for (let j=i+1; j<=attempts.length - 1; j++) {
    if (attempts[j] > maxValue) {
      maxValue = attempts[j];
      let swap = attempts[i];
      attempts[i] = maxValue;
      attempts[j] = swap;
    }
  }
}

averageBest = (attempts[0] + attempts[1] + attempts[2]) / 3;
if (averageBest > qualificationDistance) {
  qualified = true
} else {
  qualified = false
}