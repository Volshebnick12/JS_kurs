let getProfitableDeposit = function (deposit, term, perGeneral, perCapital) {
  
  let profGeneral = deposit + Math.floor(deposit * ((perGeneral / 100) / 12) * term);
    
  let getCapital = function () {
      
    for (i = 1; i <= term; i ++) {
    let income = deposit * ((perCapital / 100) / 12);
    deposit += income;
    
  }
  
  return Math.floor(deposit);

 } 
 
 let profCapital = getCapital();
  
  if(profGeneral > profCapital) {
    return 'Выбирай обычный вклад. Получишь ' + profGeneral;
  }else {
    return 'Выбирай капитализацию. Получишь ' + profCapital;
  }
}
  
/* Техническое задание

Мяу! Мне нужна программа getProfitableDeposit для сравнения вкладов. У неё должно быть четыре параметра:

исходный размер депозита;
срок депозита в месяцах;
процентная ставка для депозита с простыми процентами;
процентная ставка для депозита с капитализацией процентов.

Программа должна рассчитать, сколько я получу с двух разных вкладов: с обычными процентами и с капитализацией. Затем программа должна сравнить результаты и вернуть подходящую строку:

'Выбирай обычный вклад. Получишь ' + доход от вклада.
'Выбирай капитализацию. Получишь ' + доход от вклада.

*/
