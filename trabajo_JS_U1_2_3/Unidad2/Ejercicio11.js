// 11. Se le solicita al usuario que ingrese 4 números. Realice un programa para calcular e 
// informar la suma y el promedio

alert('ingrese los valores para calcular el promedio y su suma ');
var num1 = Number(prompt('ingrese el número 1 '));
var num2 = Number(prompt('ingrese el número 2 '));
var num3 = Number(prompt('ingrese el número 3 '));
var num4 = Number(prompt('ingrese el número 4 '));

var suma = num1 +num2 + num3 + num4;
var promedio = suma / 4; 
alert('la suma de su valore es : ' + suma + ' y su promedio es : ' + promedio);
