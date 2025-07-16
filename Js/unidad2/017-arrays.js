const alumnos = [
    {nombre: 'Karen Mejia', edad: 24, genero: 'F'},
    {nombre: 'Carlos Mejia', edad: 22, genero: 'M'},
    {nombre: 'Juan Perez', edad: 28, genero: 'M'},
    {nombre: 'Jesus Orellana', edad: 30, genero: 'M'},
    {nombre: 'Juana Trochez', edad: 60, genero: 'F'},
]

// const nuevoArreglo = alumnos.forEach((alumno) => {
//     return `${alumno.nombre} con edad ${alumno.edad}` // esto es un undefiel en consola.
// })

// console.log(nuevoArreglo);

// // para copiar en nuevo arreglo utilizamos map

// const nuevoArreglo2 = alumnos.map((alumno) => {
//     if(alumno.edad >= 28) {
//         return `${alumno.nombre} con edad ${alumno.edad}`
//     }
// })

// console.log(nuevoArreglo2);

// practica

// const soloNombres = alumnos.map((alumno) => {
//     return alumno.nombre
// })

// console.log(soloNombres);

// const nombreGenero = alumnos.map((alumno) => {
//     return `${alumno.nombre} ${alumno.genero}`
// })

// nombreGenero.forEach((i) => {
//     console.log(i);
    
// } )

// ejercicio de practica
const estudiantes = ["Karen", "Carlos", "Juana", "Pedro", "Luis"];

estudiantes.forEach((estudiante, indice) => {
    console.log(`${indice + 1}. El estudiante ${estudiante} ha asistido a clases.`);
    
})