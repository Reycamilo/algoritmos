const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

const nombreMes = 'Enero'

const carrito = [
  {nombre : 'celular Samsung', precio: 6000},
  {nombre : 'Televisor', precio: 600},
  {nombre : 'Mouse', precio: 3000},
  {nombre : 'Teclado Mecanico', precio: 6000},
  {nombre : 'Monitor', precio: 6000},
]

let resultado

resultado = carrito.filter(producto => producto.precio >= 6000)
resultado = carrito.filter(producto => producto.nombre === 'celular Samsung')

resultado = carrito.filter(producto => producto.precio >= 2000 && producto.precio <= 7000)

// console.log(resultado);
const edades = [12, 25, 17, 30, 45, 15];

const mayorEdad = edades.filter(edad => edad >= 18)

// console.log(mayorEdad);

const nombres = ["Juan", "Pedro", "Juana", "Luis", "Julia"];

const inicial = nombres.filter(letra => letra.startsWith('J'))

console.log(inicial);


