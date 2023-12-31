
//📌Parametros rest
//Nos permiten representar un número indefinido de argumentos como un array.

function sumar(a,b,...c){
    let resultado = a + b;

    c.forEach(function(n){
        resultado += n;
    });
    return resultado;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));


//📌Operador Spread

const arr1 = [1,2,3,4,5],
    arr2 = [6,7,8,9,0];
console.log(arr1, arr2);

const arr3 = [...arr1,...arr2]
console.log(arr3);
