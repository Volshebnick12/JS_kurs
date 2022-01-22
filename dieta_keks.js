let initialWeight = 6000; // Исходный вес в граммах
let targetWeight = 5000; // Желанный вес в граммах
let days =0;
let i = 0;

while (initialWeight > targetWeight) {
  initialWeight = initialWeight - initialWeight/100 * 5;
  days += 1;
  i++;
}
console.log(days)

/* Техническое задание

Мяу! Меня утомляют диета и тренировки, поэтому я хочу узнать, сколько ещё дней осталось заниматься, чтобы добиться нужного веса к мероприятию.

Входные данные: вес в начале и вес в конце.

Логика работы: если я тренируюсь и сижу на диете, то теряю 5% своей массы в день (на сухом корме не особо пожируешь, а тренировки суровые).

Просто посчитай, сколько дней понадобится провести в таком режиме и запиши количество в переменную days.