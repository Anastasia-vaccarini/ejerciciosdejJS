

// 21. Realizar un sistema para el cálculo de sueldo de una empresa. Se le solicita al 
// usuario que ingrese la categoría a la que pertenece que define el sueldo básico 
// mensual (categoría 1: u$s 2000, categoría 2: u$s 3000, categoría 3: u$s 4000) y las 
// horas extras. Se sabe que:
// Materia: Lógica de programación Profesor: José Alejandro zapata
// a. Si es de la categoría 1 y trabajó más de 20 horas extra, suma un bono de u$s 500 
// más.
// b. Si es de la categoría 3 y trabajó más de 30 horas extra, suma un bono de u$s 1000 
// más.
// Realice un programa para calcular e informar el sueldo mensual del empleado, 
// indicando si su sueldo supera o no los u$s 4000.

var sueldo1 = 2000
var sueldo2 = 3000
var sueldo3 = 4000
var bono1 = 500
var bono3 = 1000

var categoria = Number(prompt('ingrese el numero de la categoría a la que pertenece el empleado : 1 , 2 o 3 '))
var canHext = Number(prompt('ingrese la cantidad de horas extra trabajadas por el empleado '))
if ( categoria == 1 ){
    if (canHext > 20 ){
        sueldo1 = sueldo1 + bono1 
        alert('el salario del empleado es : ' + sueldo1)
    }else {
        alert('el salario del empleado es : ' + sueldo1)
    }
    

}else if ( categoria == 2 ){
    alert('el salario del empleado es : ' + sueldo2)
}
else if ( categoria == 3 ){
    if (canHext > 30 ){
        sueldo3 = sueldo3 + bono3 
        alert('el salario del empleado es : ' + sueldo3)
    }else{
        alert('el salario del empleado es : ' + sueldo3)
    }
    
}

