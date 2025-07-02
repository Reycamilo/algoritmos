
const meses = ['Enero', 'Febreo', 'Marzo', 'Abril']

// meses[0] = 'Nuevo mes'
// meses[10] = 'Octubre'

// AGREGA UN ELEMENTO AL FINAL DEL ARREGLO "PUSH"
meses.push('Julio')

// AGREGA AL PRIMER PUESTO, CORRIENDO UNA POSICION LOS DEMAS
meses.unshift('Nuevo mes')

// creamo un arreglo vacio
const carrito = []

// creamos dos objetos
const producto = {
    nombre : 'Semitas',
    precio : 35,
    cantidad : 1,
}
// segundo objeto
const producto2 = {
    nombre : 'Cafe',
    precio : 35,
    cantidad : 1,
}

// agregamos los objetos al arrelgo 
carrito.push(producto, producto2)

// mostramos en pantalla
console.log(meses);
console.log(carrito);



