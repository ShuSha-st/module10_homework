/*Задание 6.

Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех.
Проверить, все ли элементы в массиве одинаковые. */

let arr = [4,4,4,4,4,4,4,4,4];

let arrWork = [];

for (let i=0; i<arr.length; i=+1) {
    let elem = arr[0]
    if (arr.splice(0,1).includes(elem)) {
        arrWork.push(arr.splice(0,1).includes(elem))
    } else {
        console.log('False')
        break}
}

if (arrWork.includes(false)){
    console.log('False')
} else {console.log('True')}