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

// carrito.forEach(producto => total += producto.precio)

// console.log(total);

// total = carrito.reduce((total, producto) => total + producto.precio, 0)

// console.log(total);

// carrito.forEach(prodcuto => total += prodcuto.precio)
// console.log(total);

// const numeros = [10, 20, 30, 40];

// const suma = numeros.reduce((acumulador, actual) => {
//   return acumulador + actual
// }, 0)

// console.log(suma);

// const palabras = ["Hola", "soy", "Camilo"];

// let oracion = palabras.reduce((oracion, palabra) => oracion + " " + palabra,"")
// console.log(oracion);

const numeros = [1, 4, 6, 3, 8, 9];

const pares = numeros.reduce((acumulador,actual) => {
  if(actual % 2 == 0) {
    return acumulador + actual;
  } else {
    return acumulador
  }
},0)

// console.log(pares);

const personas = [
  { nombre: "Karen", edad: 20 },
  { nombre: "Pedro", edad: 25 },
  { nombre: "Juana", edad: 30 }
];

let edadesPersonas = personas.reduce((acumulador, actual) => {
  if ( actual.edad >= 25) {
    return acumulador + 1
  } else {
    return acumulador
  }
},0);

console.log(edadesPersonas);






