let getDayOfWeek = function (firstDayOfWeek, number) {
    let dayOfWeek = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
    let result = dayOfWeek.indexOf(firstDayOfWeek);
        result += number - 1;    
    let circle = result % 7,
        answer = circle;
    return dayOfWeek[answer];
  }
  
  
  
  /* Техническое задание
  
  Мяу! Напиши для меня программу-календарь.
  
  Оформи программу в виде функции getDayOfWeek. У неё должно быть два параметра: день недели, на который выпадает первое число месяца, и число, для которого нужно найти день недели в этом месяце.
  
  Функция должна возвращать строку с названием дня недели. Название должно быть написано с маленькой буквы в именительном падеже: 'понедельник', 'вторник' и так далее.
  
  */
  