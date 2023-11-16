
// 17. Se le solicita al usuario que ingrese una letra. Realice el algoritmo para informar si 
// el valor ingresado es una vocal.


var letra = prompt('ingrese una letra ')

var vocales = ["a","e","i","o","u","A","E","I","O","U"]

for (let i = 0; i < vocales.length; i++) {
    console.log(vocales[i])

    if (letra == vocales[i]){
        alert('es una vocal ')
        
        break
    }
    if (letra != vocales[i] && i == vocales.length ){
        alert('no es una vocal')
        
        
    };

};
