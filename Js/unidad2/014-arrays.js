
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

let resultado;

resultado = [producto, producto2, producto3, producto4]
// resultado = [...resultado, producto2]
// resultado = [producto3, ...resultado]
// resultado = [...resultado, producto4, ...resultado]

console.log(resultado);

// ELEIMINAR ULTIMO ELEMENTO DEL ARREGLO
// resultado.pop()

// ELIMINAR EL PRIMER ELEMENTO DEL ARREGLO
// resultado.shift()

// ELIMAR UN ELEMENTO EN ESPECIFICO
resultado.splice(1,1)

console.table(resultado);


