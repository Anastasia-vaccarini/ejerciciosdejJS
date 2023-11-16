

// 20. Se le solicita al usuario que ingrese los tres lados de un triángulo. Realice el 
// algoritmo para informar si el triángulo es equilátero, isósceles o escaleno.


var lado1 = prompt('ingrese el lado 1 del triangulo : ')
var lado2 = prompt('ingrese el lado 2 del triangulo : ')
var lado3 = prompt('ingrese el lado 3 del triangulo : ')

if (lado1 == lado2 && lado2 == lado3 ){
    alert('el triangulo es equilatero')
}else if (lado1 == lado2 | lado2 == lado3 | lado1 == lado3 && lado2 != lado3 | lado2 != lado1){
    alert('el triangulo es isóceles')
}else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3 ){
    alert('el triangulo es escaleno')
}