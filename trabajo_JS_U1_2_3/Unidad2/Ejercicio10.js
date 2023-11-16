// 10. Se le solicita al usuario que ingrese el diámetro de un círculo. Realice un programa 
// para calcular e informar el perímetro y el área del círculo. Se considerará para este 
// ejercicio que el valor de PI será 3.1416.

var Pi = 3.1416 ; 
var diametro = Number(prompt('ingrese el diametro del circulo'))
var perimetro = diametro * Pi;
var area = diametro **2 * Pi;

alert('el perimetro de su círculo es : ' + perimetro + ' y su área es : ' + area)