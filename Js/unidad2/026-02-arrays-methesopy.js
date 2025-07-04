const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

const nombreMes = 'Enero'

const carrito = [
  {nombre : 'celular Samsung', precio: 6000},
  {nombre : 'Televisor', precio: 600},
  {nombre : 'Mouse', precio: 3000},
  {nombre : 'Teclado Mecanico', precio: 6000},
  {nombre : 'Monitor', precio: 6000},
]


const indice = meses.findIndex(mes => mes === nombreMes)
console.log(indice);

const indice2 = carrito.findIndex(producto => producto.precio === 6000)

console.log(indice2);

meses.forEach((mes, index) => {
  if(mes === nombreMes) {
    console.log(`${nombreMes} encontrado en el indice ${index}`);
    
  }
})