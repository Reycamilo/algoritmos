
const alumnos = [
    {nombre: 'Karen Mejia', edad: 24, genero: 'F'},
    {nombre: 'Carlos Mejia', edad: 22, genero: 'M'},
    {nombre: 'Juan Perez', edad: 25, genero: 'M'},
    {nombre: 'Jesus Orellana', edad: 20, genero: 'M'},
    {nombre: 'Juana Trechos', edad: 70, genero: 'F'},
]

const nuevoArreglo = alumnos.forEach((alumno) => {
    return `${alumno.nombre} con edad ${alumno.edad}`
})

console.log(nuevoArreglo);
