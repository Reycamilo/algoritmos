
// COMO BORRAR ELEMENTOS DE UN ARRAYS
const producto = {
    nombre : 'Semitas',
    precio : 22,
    cantidad : 1,
}

const producto2 = {
    nombre : 'Cafe',
    precio : 22,
    cantidad : 1,
}

const producto3 = {
    nombre : 'CocaCola',
    precio : 22,
    cantidad : 1,
}

const producto4 = {
    nombre : 'Copan Dry',
    precio : 22,
    cantidad : 1,
}

const producto5 = {
    nombre : 'Teclado',
    precio : 4000,
    cantidad : 3,
}

let resultado;

resultado = [producto, producto2, producto3]
// resultado = [...resultado, producto2]
// resultado = [producto3, ...resultado]
// resultado = [...resultado, producto4, ...resultado]
// resultado = [...resultado, producto5]
resultado = [...resultado, producto5]

// console.log(resultado);

// ELEIMINAR ULTIMO ELEMENTO DEL ARREGLO
// resultado.pop()

// ELIMINAR EL PRIMER ELEMENTO DEL ARREGLO
// resultado.shift()

// ELIMAR UN ELEMENTO EN ESPECIFICO
// resultado.splice(1,1)

// console.table(resultado);

let frutas = ["manzana", "pepino", "uva", "tomate"]


frutas.splice(0,1) // el primer valor indica la posicion, y el segundo valor indica cuantos elementos desde esa posicion quieres eliminar.

// PRACTICA

// console.log(frutas);

// hace una copia temporal de algun arrays
// const numero = [1,2]
// const copia = [...numero]
// console.log(copia);


// podemos unir arrayas
const a = [1,2]
const b = [3,4]
const c = [...a,...b]
// console.log(c);

// eliminar elementos de un arrays
// c.pop()// elemina el ultimo elemento.
// c.shift()// elimina el primer elemento.
// c.splice(1,1)// quiere decir, desde la posicion 1 elimina un elemento.

// let palabra = 'hola como estas'
// let letras = [...palabra]
// console.log(letras);

let letras = [...'hola']
console.log(letras);






