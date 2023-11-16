

// 14. Realizar un sistema para el cálculo de sueldo de una empresa de seguros. Se le 
// solicita que ingrese el valor de la hora,
//  la cantidad de horas trabajadas en el mes, los 
// años de antigüedad,
//  la cantidad de seguros vendidos y el valor del seguro más caro 
// vendido. Realice un programa para calcular e informar el sueldo mensual del 
// empleado, teniendo en cuenta que se le asigna un bono igual al 50% del seguro más
// caro vendido, un bono igual al 25% del sueldo por la cantidad de seguros vendidos y 
// otro bono igual al 15% del sueldo por año de antigüedad. Una vez obtenido el sueldo 
// final, calcular e informar el valor promedio de la hora del empleado.

var valorH = Number(prompt('ingrese el valor de la hora que cobra el empleado '));
var cantidadHmen = Number(prompt('ingrese la cantidad de horas trabajadas por el empleado en el mes  '));
var yearsAntiguedad = Number(prompt('ingrese los años de antiguedad del empleado '));
var cantidadSegurosVendidos = Number(prompt('la cantidad de seguros vendidos en el mes '));
var valorSeguromasCaro = Number(prompt('ingrese el valor del seguro más caro vendidio'));
var sueldo = valorH * cantidadHmen;

var bono = valorSeguromasCaro/2 + sueldo *25/100 * cantidadSegurosVendidos + sueldo * 15 /100 * yearsAntiguedad ;
sueldo = sueldo + bono ; 
var promedioHora = sueldo / cantidadHmen; 

alert('El valor total del bono a cobrar es : $' + bono + 'el sueldo neto es igual a : $' + sueldo + ' la hora promedio es igual a : $' + promedioHora )


