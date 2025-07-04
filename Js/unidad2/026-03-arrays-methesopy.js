const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

const nombreMes = 'Enero'

const carrito = [
  {nombre : 'celular Samsung', precio: 6000},
  {nombre : 'Televisor', precio: 600},
  {nombre : 'Mouse', precio: 3000},
  {nombre : 'Teclado Mecanico', precio: 6000},
  {nombre : 'Monitor', precio: 6000},
]

let total = 0;

carrito.forEach(producto => total += producto.precio)

console.log(total);

total = carrito.reduce((total, producto) => total + producto.precio, 0)

console.log(total);

