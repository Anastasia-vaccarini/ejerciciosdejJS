// 5. Realice el algoritmo para calcular e informar el perímetro y el área del rectángulo

var lado1 = Number(prompt('ingrese la longitud del lado 1 mas chico del rectángulo en m'));
var lado2 = Number(prompt('ingrese la longitud del lado 2 mas largo del rectángulo en m'));


var perimetro = lado1 *2 + lado2 *2;
var area = lado1 * lado2;
alert('el perimetro del rectángulo es : ' + perimetro + ' y su area es igual a ' + area ) ;