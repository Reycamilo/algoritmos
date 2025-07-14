const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

const messes2 = ['Julio', 'Agosto', 'Septiembre']
const messes3 = ['Octubre', 'Noviembre', 'Diciembre']

const carrito = [
  {nombre : 'celular Samsung', precio: 6000},
  {nombre : 'Televisor', precio: 600},
  {nombre : 'Mouse', precio: 3000},
  {nombre : 'Teclado Mecanico', precio: 6000},
  {nombre : 'Monitor', precio: 6000},
]

let resultado;

resultado = carrito.every(producto => producto.precio <= 2000)
console.log(resultado);

resultado = meses.concat(messes2,messes3)

resultado = [...meses, ...messes2, ...messes3]

console.log(resultado);

let saludo = 'hola'

console.log(saludo);

console.log("Esto es una prueba desde linux");


