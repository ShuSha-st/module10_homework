/* Задание 3.
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH". */

function revStr(str) {
    return str.split("").reverse().join("");
}
let str1 = prompt('Введите строку')
console.log(revStr(str1));