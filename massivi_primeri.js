let styles = ["Джаз", "Блюз"];   // Джаз, Блюз
styles.push("Рок-н-ролл");       // Джаз, Блюз, Рок-н-ролл

// styles[Math.floor((styles.length - 1) / 2)] = "Классика";

styles.splice(1,1,"Классика");   // Джаз, Классика, Рок-н-ролл
styles.shift("Джаз");            // Классика, Рок-н-ролл
styles.unshift("Рэп", "Регги");  // Рэп, Регги, Классика, Рок-н-ролл
console.log(styles); //

