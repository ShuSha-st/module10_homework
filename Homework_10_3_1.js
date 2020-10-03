var numm = prompt('Введите данные');
var res, result;
res = + numm;
console.log('Тип преобразованных входящих данных: ' + typeof(res));

result = numm % 2;
//console.log(result)

if (res) {
    if (result == 0) {console.log('Введенное число ' + numm + ' является чётным')}
    else {console.log('Введенное число ' + numm + ' является нечётным')}}
else
{console.log('Упс, кажется, вы ошиблись')};