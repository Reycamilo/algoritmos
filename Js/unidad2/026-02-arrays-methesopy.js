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
// console.log(indice);

const indice2 = carrito.findIndex(producto => producto.precio === 6000)

// console.log(indice2);

// meses.forEach((mes, index) => {
//   if(mes === nombreMes) {
//     console.log(`${nombreMes} encontrado en el indice ${index}`);
    
//   }
// })

// const numeros = [5, 8, 12, 20, 3];

// let numeroMayor = numeros.find(numero => numero >= 10)
// console.log(numeroMayor);

// const nombres = ["Carlos", "Juana", "Pedro", "Jorge"];

// const inicial = nombres.find(inicial => inicial.startsWith('J'))
// console.log(inicial);

const personas = [
  { nombre: "Karen", edad: 24 },
  { nombre: "Camilo", edad: 21 },
  { nombre: "Luis", edad: 30 }
];

let personaBuscada = personas.findIndex(persona => persona.edad >= 18)

console.log(personaBuscada);
