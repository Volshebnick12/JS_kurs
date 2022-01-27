let days = 9; // Дней в периоде
let period = 3; // Как часто я ем протеин (раз в три дня)
let workDayAmount = 200; // Количество протеина в будние
let weekendAmount = 100; // Количество протеина в выходные
let total = 0;

for (let i=period; i <= days; i +=period) {
  if (i%7 === 6 || i%7 === 0) {
    total +=weekendAmount;
  } else {
  total +=workDayAmount;
}
}

/* Техническое задание

Мяу! Программа должна считать количество протеина необходимое на период.

Во-первых, расчёт всегда начинается с понедельника. Это первый день.

Во-вторых, я принимаю протеин каждый третий день:
1 день, понедельник – нет,
2 день, вторник – нет,
3 день, среда – да,
4 день, четверг – нет,
5 день, пятница – нет,
6 день, суббота – да,
7 день, воскресенье – нет,
8 день, понедельник – нет,
9 день, вторник – да
и так далее.

В-третьих, известно, сколько протеина я съедаю в будние и сколько в выходные дни.

В-четвёртых, период задаётся целым числом, от одного до бесконечности (хотя планы дальше чем на месяц я обычно не строю).

Программа должна возвращать общее количество протеина за период, записанное в переменную total.


Чтобы найти каждый n-ый день, можно воспользоваться оператором %, который находит остаток от деления.
Если номер текущего дня делится нацело на заданный период, то этот оператор вернёт ноль, иначе он вернёт число больше нуля. Например, если заданный период равен 3, а сейчас пятый день периода, то 5 % 3 === 2, а если шестой день периода, то 6 % 3 === 0.

Для определения дня недели тоже поможет %: номер дня в периоде делим на 7, в остатке получаем номер дня в неделе. 
Для воскресенья остаток будет равен 0. Например, поделим 15 по счёту день в периоде на 7, в остатке получится 1. Значит это понедельник.
*/
