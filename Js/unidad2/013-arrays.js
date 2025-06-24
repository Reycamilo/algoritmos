
const meses = ['Enero', 'Febreo', 'Marzo', 'Abril']

// meses[0] = 'Nuevo mes'
// meses[10] = 'Octubre'

// AGREGA UN ELEMENTO AL FINAL DEL ARREGLO "PUSH"
meses.push('Julio')

// AGREGA AL PRIMER PUESTO, CORRIENDO UNA POSICION LOS DEMAS
meses.unshift('Nuevo mes')

const carrito = []

const producto = {
    nombre : 'Semitas',
    precio : 35,
    cantidad : 1,
}


const producto2 = {
    nombre : 'Cafe',
    precio : 35,
    cantidad : 1,
}

// agregamos 
carrito.push(producto, producto2)

console.log(meses);
console.log(carrito);



