
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
pianos.forEach((piano,indice) => console.log(indice,piano))