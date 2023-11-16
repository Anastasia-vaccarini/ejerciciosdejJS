

// 24. Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). Realice 
// un programa para calcular e informar cada operación deseada entre los dos números. 
// Ese proceso se puede repetir mientras lo desee el usuario. Todos los valores deben ser 
// validados.
var program = "si"
var continuar = 'si'

while (program == "si"){
    var num1 = Number(prompt('ingrese el primer número de la operación ')); 
    var num2 = Number(prompt('ingrese el segundo número de la operación ')); 
    
 

    
    do {
        var oper = prompt('ingrese un operador (+, -, *, /):'); 
        switch (oper){
            case "+":
                alert(num1 + num2);
                break
            case "-" :
                alert(num1 - num2);
                break
            case "*" : 
                alert(num1 * num2);
                break
            case "/" : 
                if (num2 !=0){
                    alert(num1 / num2);
                    break
                }else{
                    alert('no es posible dividir por "0')
                    break
                }
        }; 
        continuar = prompt('desea continuar operando con estos números  (si o no )').toLowerCase()

    }while (continuar == 'si')

    
    program = prompt('¿Desea realizar otra operación? (si o no ) ').toLowerCase()


    
}
alert('final del programa')
