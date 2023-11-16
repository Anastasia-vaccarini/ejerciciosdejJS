// 23. Se le solicita al usuario que ingrese los extremos de un rango numérico y una 
// cantidad de valores desconocidos.
// Realice un programa para informar si cada número está dentro del rango.
// Si está en rango, informar si el número es par.
// Si no está dentro del rango, informar si es número es impar.
// Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números 
// enteros.
document.addEventListener('DOMContentLoaded', function(){

    var num1 = Number(prompt('ingrese es el primer número de un rango numerico (cuyos extremos deben tener almenos 5 digitos de por medio ) '));
    var num2  = 0

    let counter = 0 ; 

    while (  num2 < (num1 + 6 )){
        num2 = Number(prompt('ingrese es el último número de un rango numerico (cuyos extremos deben tener almenos 5 digitos de por medio )'));

        if ( num2 < num1 + 6){
            alert('el extremo del rango debe estar separado del inicio por 5 digitos , intente ingresarlo de nuevo ')
           
        }

        counter ++
    };
    

    var cantnum = Number(prompt('¿cuantos numeros desea comprobar? (ingreselo en dígitos)'));

    for (let i = 0 ; i < cantnum; i++){
        var num = Number(prompt(`ingrese el número ${i+1} a comprobar`));   
        var mesagge = ''
        for (let a = num1; a <= num2; a++ ){
            if (num == a  ){  
                
                if (num % 2 ==0 ){
                    mesagge = `El número ${num} es par`;
                } else {
                    mesagge = `El número ${num} no es par`;
                };
                    
                alert(` ${num} está dentro del rango ${num1} - ${num2} y ${mesagge}`);
                break

            }if (a == num2 && num != num2 ){
                if (num % 2 ==0 ){
                    mesagge = `El número ${num} no es impar`;
                } else {
                    mesagge = `El número ${num} es impar`;
                };
                
                alert(`${num} no está dentro del rango ${num1}-${num2} y ${mesagge}`);
            }
        };

            
    }



});
