
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

// alumnos.forEach(function(alumno) {
//     console.log(alumno);
    
// })

alumnos.forEach(alumno => console.log(alumno))
alumnos.forEach(alumno,index) => console.log(index, alumno);


