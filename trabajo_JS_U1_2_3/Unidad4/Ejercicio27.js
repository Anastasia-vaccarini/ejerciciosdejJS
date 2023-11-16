// 27. Como resultado de una encuesta se recogen los siguientes datos: sexo (H: Hombre, 
//     M: Mujer), edad (en años) y altura (en centímetros). Realice un programa para calcular 
//     e informar:
//     a. El porcentaje de mujeres mayores a 25 años. --------- ok 
//      b. El porcentaje de hombres menores de 18 años.  --------- ok 
//      c. El promedio de edad de las mujeres.       --------- ok 
//      d. El promedio de altura de los hombres.   --------- ok  
//      e. La menor edad ingresada.
//      f. La mayor altura ingresada

var numpers = 1 ; 
var cantmujeres = 0 ; 
var canthom = 0 ; 
var canthommen18 = 0 ; 
var cantmujeresmay25 = 0 ; 

var continuar = "s";
var gen = 0 ; 
var edad = 0 ; 
var altura = 0; 

var sumalturahom = 0; 
var promalturahom = sumalturahom / canthom; // prom altura hombres 
var pormujemay25 = cantmujeresmay25 * 100 / cantmujeres; // porecentaje mujeres mayores de 25
var porhommen18 = canthommen18 *100 / canthommen18;    // 

var sumaedadmuj = 0 ; 

var promedioedadmuj = sumaedadmuj / cantmujeres;  // promedio edades de mujeres 


var menedad = null ; 
var mayedad = 0 ; 

while(continuar == "s"){
    gen = prompt('ingrese su género (m para mujer h para hombre ) ');
    edad = Number(prompt('ingrese su edad')); 
    altura = Number(prompt('ingrese su altura en cm '));
    if (gen == "m"){
        cantmujeres += 1; 
        sumaedadmuj += edad;
        if (edad> 25 ){
            cantmujeresmay25 += 1 ; 
        }
    }else if (gen == "h"){
        canthom += 1; 
        if (edad <18){

            canthommen18 += 1; 
        }
        sumalturahom += altura;
    }
    
    if (menedad == false ){
        menedad = edad ; 
    }else if (edad<menedad){
        menedad = edad;
    }else if (edad> mayedad){
        mayedad = edad; 
    }

    continuar = prompt('deasea agregar los datos de otra persona (s para si y n para no ) ');

}

alert(`el porcentaje de mujeres mayores de 25 es %${pormujemay25}, el porcentaje de hombres menores de 18 es %${porhommen18}, el promedio de las alturas de los hombres es ${promalturahom}, el promedio de las edades de las mujeres es ${promedioedadmuj}, la edad menor ingresada es ${menedad} y la mayor es ${mayedad}`); 