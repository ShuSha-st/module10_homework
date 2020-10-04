/*Задание 4.

Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.*/

function RandomRange(min, max) {
    return Math.floor(Math.random() * (max - min));
}

const mini = 0;
const maxi = 100;

console.log(RandomRange(mini, maxi))