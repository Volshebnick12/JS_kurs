let getPrice = function (time, urgently) {
    let fixPrice = 1500
    if (urgently) {
      time /= 2;
      fixPrice *= 2.5;
    }
    if (time > 150) {
      fixPrice -= 250;
  } 
    return time * fixPrice;
  };