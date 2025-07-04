//  DESESTRUCTURACION DE OBJETOS
const producto = {
    nombre : 'Semitas',
    precio : 22,
    cantidad : 1,
}


const {nombre} = producto; // se extrae la propiedad de "nombre" del objeto y se crea un variable con el mismo nombre.
// const nombre = producto.nombre // es lo mismo que hacer este, pero la de arriba es mas elegante.
console.log(nombre);


// USANDO EL METODO CON ARREGLOS

// creacion de arrays de numeros
const  numeros = [50, 100, 150, 200, 250, 300, 350]
// se extren los primeros valores, TENIENDO EN CUENTA LA POSICION
// const [primero] = numeros;
// const [,segundo] = numeros;
// const [,,,cuarto] = numeros
const [primero, segundo] = numeros
const [,,,... restoNumeros] = numeros

// console.log(primero, segundo);
console.log(restoNumeros);


console.log('**************************************************************************');

const letras = [1,2,3,4,5]

const [a,b,c] = letras // extrae los primeros valores del array

const [,,,x] = letras // extra el cuarto valor ( indice 3)

const [,,,,...resto] = letras // toma los demas valores del arrays en otro arryas.

console.log(resto)





