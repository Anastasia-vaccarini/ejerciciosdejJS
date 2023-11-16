// 13. Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que 
// ingrese el valor de la hora, la cantidad de horas trabajadas en el mes y los años de 
// antigüedad en la empresa. Realice un programa para calcular e informar el sueldo 
// mensual del empleado, teniendo en cuenta que se le asigna un bono mensual igual al 
// 15% del sueldo por año de antigüedad.



var valorH = Number(prompt('ingrese el valor de la hora que cobra el empleado '));
var cantidadHmen = Number(prompt('ingrese la cantidad de horas trabajadas por el empleado en el mes  '));
var yearsAntiguedad = Number(prompt('ingrese los años de antiguedad del empleado '))
var sueldo = valorH * cantidadHmen;
var bonomen = sueldo * 15 /100 * yearsAntiguedad;
sueldo = sueldo + bonomen;
alert('el sueldo del empleado es : $' + sueldo )

