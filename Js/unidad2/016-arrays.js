
const alumnos = [
    {nombre: 'Karen Mejia', edad: 24, genero: 'F'},
    {nombre: 'Carlos Mejia', edad: 22, genero: 'M'},
    {nombre: 'Juan Perez', edad: 25, genero: 'M'},
    {nombre: 'Jesus Orellana', edad: 20, genero: 'M'},
    {nombre: 'Juana Trechos', edad: 70, genero: 'F'},
]

// for( let i = 0; i < alumnos.length; i++) {
//     console.log(alumnos[i]);
    
// }

// forEach
// alumnos.forEach(function(alumno) {
//     console.log(alumno);
    
// })

// })

// alumnos.forEach(alumno => console.log(alumno))
// alumnos.forEach(alumno,index) => console.log(index, alumno);

const pianos = [
    {nombre : 'Yamaha 145', marca : 'Yamaha', precio : 10000},
    {nombre : 'Fp-110', marca : 'Rolland', precio : 12000},
]

// recorrer de forma normal el arreglo pianos
// for (let i = 0; i < pianos.length; i++) {
//     console.log(pianos[i]);
    
// }

// usando el foreach
// pianos.forEach(function(alumno) {
//     console.log(alumno);
    
// })

// FUNCION FLECAH =>
// pianos.forEach(piano => console.log(piano))
// pianos.forEach((piano,indice) => console.log(indice,piano))

// const numeros = [10,20,30]

// numeros.forEach((numero) => {
//     console.log(numero);
    
// })

// numeros.forEach(function(numero) {
//     let resultado = numero + 5
//     console.log(resultado);
    
// })

// const nombres = ['Juan', 'Pedro', 'Ana']

// nombres.forEach(function(nombre) {
//     console.log(`hola ${nombre}`);
    
// })

// const frutas = ['banana', 'melon', 'manzana']

// frutas.forEach(function(fruta,indice) {
//     console.log(`${indice + 1}.${fruta}`);
    
// })

let edades = [18,20,15]

let masEdades = []

masEdades.push(43,2,34)

edades = [...edades,...masEdades]

edades.forEach((edad) => {
    if(edad >= 18) {
        console.log(`${edad} es mayor de edad`);
        
    } else {
        console.log(`${edad} es menor de edad`);

    }
} )

// edades.forEach(function(edad) {
//     if(edad >= 18) {
//         console.log(`${edad} es mayor de edad.`);
        
//     } else {
//         console.log(`${edad} es menor de edad.`);
        
// //     }
// })