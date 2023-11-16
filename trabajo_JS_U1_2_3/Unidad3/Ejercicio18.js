

// 18. Se le solicita al usuario que ingrese los extremos de un rango numérico y un 
// número. Realice un programa para informar si el número está dentro del rango.
// Si está en rango, informar si el número es par.
// Si no está dentro del rango, informar si es número es impar.
// Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números 
// enteros.
var variable = false;
while( variable == false ){

    var num1 = prompt('ingrese el primer extremo de un rango numérico (tener en cuenta que deben estar separado por al menos 5 enteros)');
    
    var num2 = prompt('ingrese el segundo extremo del rango numérico (tener en cuenta que deben estar separado por al menos 5 enteros)');
    if (num1 <= num2 - 6 | num2 <= num1 -6 ){
        variable = true
    }else{
        alert('los numeros no están separados por almenos 5 numeros enteros')
        // console.log('los numeros no están separados por almenos 5 numeros enteros')
    };

};
var numVerificar = prompt('ingrese un numero para saber si está dentro del rango')
for (let i = num1 ; i<= num2; i++ ){
    if (i == numVerificar){
        var mensajeSi = 'sí, el numero se encuentra dentro del rango numerico'
        if (numVerificar % 2 == 0){
            alert(mensajeSi + ', este numero es par ')
        }else {
            alert(mensajeSi + ', este numero no es par ')
        }
        break;
    }else if (i != numVerificar && i == num2){
        
        var mensajeNo = 'el numero no se encuentra del rango numerico'
        
        if (numVerificar % 2 == 0){
            alert(mensajeNo + ', este numero no es impar ')
        }else {
            alert(mensajeNo + ', este numero es impar ')
        }
    }
};

