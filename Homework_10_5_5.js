/*Задание 5.

Дан произвольный массив. Необходимо вывести количество элементов массива,
затем перебрать его и вывести в консоль каждый элемент массива. */

let arr = [1,2,3,4,4,4,4,4,8];
console.log('Длина массива: ' + arr.length);

let result = arr.map(function(item, index, array) {
    return console.log(item)
})