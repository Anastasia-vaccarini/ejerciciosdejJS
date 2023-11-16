// 26. Se le solicita al usuario que ingrese una cantidad desconocida de números. Realice 
// un programa para calcular e informar:
// a. La sumatoria de los valores ingresados.
// b. El menor valor ingresado.
// c. El mayor valor ingresado.
let continuar = "s";
var mayornum = 0 ; 
var sum = 0 ; 
var mennum = false; 
while(continuar == "s"){
    var num = Number(prompt('ingrese un valor: ')); 

    if (num > mayornum){
        mayornum = num; 
    }
    sum += num; 
    if (mennum == false) {
        mennum = num ; 

    }else if (num < mennum){
        mennum = num; 
    }

    continuar = prompt('agregar otro valor?  ("s" para si  o  "n" para no ) : ').toLowerCase(); 

}
prompt(`final del programa; el numero mayor ingresado es : ${mayornum} , el menor es ${mennum} y la sumatoria de todos los numeros ingresados es ${sum}` )