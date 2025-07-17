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

let resultado = carrito.every(producto => producto.precio < 3000)

// console.log(resultado);

let filtro = carrito.filter(producto => producto.precio <= 3000)
console.log(filtro);



// resultado = carrito.every(producto => producto.precio <= 2000)
// // console.log(resultado);

// resultado = meses.concat(messes2,messes3)

// resultado = [...meses, ...messes2, ...messes3]

// // console.log(resultado);


// const numeros = [12, 25, 18, 30, 45];

// let mayoresTen = numeros.every(numero => numero >= 10)

// console.log(mayoresTen);
