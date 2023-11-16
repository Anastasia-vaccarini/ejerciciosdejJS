// Resolver los ejercicios utilizando variables y operadores. Para el ingreso y egreso de 
// información utilizar los métodos de JavaScript vistos en clase. Cada ejercicio debe ser 
// realizado en un archivo HTML y un JS (extensiones .html y .js).

// 22. Se le solicita al usuario que ingrese 3 números. Realice un programa para informar 
// si el número es múltiplo de 3, múltiplo 5, múltiplo de ambos o múltiplo de ninguno.


var num1 = prompt('ingrese el primer numero : ')
var num2 = prompt('ingrese el segundo numero : ')
var num3 = prompt('ingrese el tercer numero : ')
var nums = [num1, num2, num3]

for (let i = 0 ; i < nums.length ; i++){
    if (nums[i] % 3 == 0 ){
        alert('El numero' +nums[i]+' es multiplo de 3 ')
    }else if (nums[i] % 5 == 0){
        alert('El numero ' +nums[i]+' es multiplo de 5 ')
    }else if (nums[i] % 3 == 0 && nums[i] % 5 == 0){
        alert('El numero ' +nums[i]+' es multiplo de 3 y de 5  ')
    }else {
        alert('El numero ' +nums[i]+' no es multiplo de 3 , ni de 5 ')
    }


}