
// 19. Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). Realice 
// un programa para calcular e informar la operación solicitada entre ambos números.

var operadores = ['+', '-', 'x', 'X','/','*']
var num1 = prompt('ingrese un número')

var num2 = prompt('ingrese el segundo número')
var resultado = 0 
var operador = prompt('ingrese el operador correspondiente a la operación que desea realizar (+ , - , x , / )')

if (operador == operadores[0]){

} else if (operador == operadores[1]){
    operador == operadores[3]
}else if (operador == operadores[2] | operador == operadores[3] | operador == operadores[5]){
    resultado = num1 * num2
}else if (operador == operadores[4] ){
    resultado = num1 / num2
}