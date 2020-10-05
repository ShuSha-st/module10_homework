/*Задание 7.

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
При выполнении задания необходимо учесть, что массив может содержать не только числа,
но и, например, знаки, null и так далее. */

let arr = [1,2,3,null,true,"hallo",4,8,9,18,11,0,0,12,13];
//console.log(arr.length)

let arrNull = [];
let arrEven = [];
let arrOdd = [];


for (let i = 0; i < arr.length-1; i = i + 1) {
    if (arr[i] == 0) {
        arrNull.push(arr[i])
    }
    else if (arr[i]%2 == 0) {
        arrEven.push(arr[i])
    }
    else if ((typeof(arr[i])== "number") && (arr[i]%2 != 0)) {
        arrOdd.push(arr[i])
    }
    else
    {continue}
};

console.log('Во входящем массиве ' + arrNull.length + ' нулевых элементов');
console.log('Во входящем массиве ' + arrEven.length + ' четных элементов');
console.log('Во входящем массиве ' + arrOdd.length + ' нечетных элементов');