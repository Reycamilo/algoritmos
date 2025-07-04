const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

const nombreMes = 'Enero'

const carrito = [
  {nombre : 'celular Samsung', precio: 6000},
  {nombre : 'Televisor', precio: 600},
  {nombre : 'Mouse', precio: 3000},
  {nombre : 'Teclado Mecanico', precio: 6000},
  {nombre : 'Monitor', precio: 6000},
]

let resultado;

carrito.forEach((producto, index) => {
  if(producto.nombre === 'Televisor') {
    resultado = carrito[index]
  }
})


resultado = carrito.find(producto => producto.nombre === 'Televisor')

console.log(resultado);
