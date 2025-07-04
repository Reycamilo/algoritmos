const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

const nombreMes = 'Diciembre'

const carrito = [
  {nombre : 'celular Samsung', precio: 6000},
  {nombre : 'Televisor', precio: 600},
  {nombre : 'Mouse', precio: 3000},
  {nombre : 'Teclado Mecanico', precio: 6000},
  {nombre : 'Monitor', precio: 6000},
]



meses.forEach(mes => {
  if ( mes == nombreMes) {
    console.log(`El mes ${nombreMes} existe.`);
    
  }
})

const resultado = meses.includes(nombreMes)
console.log(resultado);

const existe = carrito.some(producto => producto.nombre === 'Mouse')

// console.log(existe);

const existe2 = meses.some(mes => mes === nombreMes)
console.log(existe2);
