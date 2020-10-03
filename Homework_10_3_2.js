var x, result;
//x = prompt('введите данные');

x = true
result = typeof(x);
console.log(x, result);

switch (result){
    case 'string':
        console.log('тип текущей переменной x: ' + x + ' - строка');
        break;
    case 'number':
        console.log('тип текущей переменной x: ' + x + ' - число');
        break;
    case 'boolean':
        console.log('тип текущей переменной x: ' + x + ' - логический');
        break;
};