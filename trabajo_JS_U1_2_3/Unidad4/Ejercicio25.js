

// 25. Se le solicita al usuario que ingrese las notas del parcial de los alumnos de una 
// comisión. Se desconoce la cantidad de alumnos. Realice el algoritmo para informar:
//  El porcentaje de alumnos aprobados (nota igual o superior a 4).
//  El porcentaje de alumnos desaprobados (nota inferior a 4).
//  El promedio de las notas.
// Tenga en cuenta que solamente las notas pueden ir del 1 al 10.

var continuar = "si"; 
var sumanotas = 0 ; 
var cantidadnotas = 0 ; 
var desaprobados = 0 ; 
var aprobados = 0 ; 


while(continuar == "si"){
    var nota = 0 ; 
    while (nota <1 | nota > 10){
        
        alert('la nota debe estar comprendida entre 1 y 10 ')
        nota = Number(prompt('ingrese nota del alumno:  '));
    }
    sumanotas += nota
    cantidadnotas += 1 
    if (nota < 4){
        desaprobados += 1 ;
        
        
    }else{
        aprobados += 1 ;   
    }   
    continuar = prompt('desea continuar  ingreasando notas de alumnos (si o no )');
}

alert(`el promedio de las notas de los alumnos es : ${ sumanotas /cantidadnotas} , la cantidad de alumnos desaprobados es ${desaprobados}, los alumnos aprobados son ${aprobados} , la cantidad de alumnos es ${cantidadnotas}`)