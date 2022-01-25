let playerOne = {
    name: 'Кекс',
    goals: 3,
    passes: 2
  };
  
  let playerTwo = {
    name: 'Том',
    goals: 4,
    passes: 3
  };
  
  let playerThree = {
    name: 'Джаз',
    goals:2,
    passes:5
  };
  
  let array = [playerOne, playerTwo, playerThree];
  
  let getStatistics = function (players) {
    let totalGoals = 0;
    for (let i=0; i <=players.length -1; i++) {
      players[i].coefficient = players[i].goals*2 + players[i].passes;
      totalGoals += players[i].goals;
    }
    for (let i=0; i <=players.length -1; i++) {
      players[i].percent = Math.round(players[i].goals*100/totalGoals);
    }
    return players;
  };
  
  getStatistics(array);
  
  
  /* Техническое задание
  
  Мяу! Мне нужна программа, которая подсчитает полезность и результативность игроков на основе их статистики. Оформи код в виде функции getStatistics с одним параметром — массивом игроков.
  
  Каждый футболист в этом массиве описывается объектом с тремя полями: имя (свойство name), забитые голы (свойство goals) и голевые пасы (свойство passes).
  
  Функция должна возвращать этот же массив, в котором каждому игроку добавлены ещё два поля: коэффициент полезности по Кексу® (свойство coefficient) и результативность (свойство percent).
  
  Коэффициент полезности считается так: умножаем голы игрока на 2 (потому что я считаю, что голы важнее всего) и прибавляем к этому значению все голевые пасы футболиста.
  
  Результативность (процент забитых мячей футболиста от результата всей команды) считаем так: находим сумму голов всех игроков и выясняем, сколько процентов от этого числа забил каждый футболист. Округляй значение с помощью Math.round.
  
  */
  