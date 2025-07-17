const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

const nombreMes = 'Diciembre'

const carrito = [
  {nombre : 'celular Samsung', precio: 6000},
  {nombre : 'Televisor', precio: 600},
  {nombre : 'Mouse', precio: 3000},
  {nombre : 'Teclado Mecanico', precio: 6000},
  {nombre : 'Monitor', precio: 6000},
]



// // meses.forEach(mes => {
// //   if ( mes == nombreMes) {
// //     console.log(`El mes ${nombreMes} existe.`);
    
// //   }
// // })

// const resultado = meses.includes(nombreMes)
// // console.log(meses);

// // console.log(resultado);

// const existe = carrito.some(producto => producto.nombre === 'Mouse')

// // console.log(existe);

// const existe2 = meses.some(mes => mes === nombreMes)
// // console.log(existe2);

// const frutas = ["manzana", "pera", "uva"];

// let prueba = frutas[2]

// console.log("hola como estas".includes('hola'));

// const usuarios = ["Karen", "Carlos", "Juana"];
// const nombreIngresado = "Camilo";

// if (usuarios.includes(nombreIngresado)) {
//   console.log(`${nombreIngresado} es un empleado.`);
  
// } else {
//   console.log(`${nombreIngresado} no es un empleado.`);
  
// }

// const numeros = [2, 5, 8, 12, 3];

// const numeroMayor = numeros.some(numero => 
//   numero > 10
// )

// console.log(numeroMayor);

const nombres = ["Carlos", "Karen", "Juana", "Pedro"];

const inicial = nombres.some(inicial => inicial.startsWith('Ju'))

console.log(inicial);
