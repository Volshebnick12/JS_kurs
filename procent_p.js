let calculateSalary = function (dirtySalary) {
    let percent = 0.35;
    if (dirtySalary >= 100000) {
    percent = 0.45;
    }
    let netSalary =dirtySalary - Math.floor(dirtySalary*percent);
    return netSalary;
  };
  
  console.log(calculateSalary);
  
  
  /* Техническое задание
  
  Мяу! Мне нужна программа, которая от «грязной» зарплаты (зарплата до вычета налогов) посчитает примерную «чистую» зарплату (которая выдаётся на лапы).
  
  Оформи программу в виде функции calculateSalary c одним параметром — величиной грязной зарплаты. Функция должна возвращать чистую зарплату.
  
  Большая точность мне не нужна, просто считаем, что 35% величины грязной зарплаты составляют налоги, а если грязная зарплата больше или равна 100 тысячам, то налоги составляют уже 45%.
  
  */