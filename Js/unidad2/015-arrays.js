
const producto = {
    nombre : 'Semitas',
    precio : 22,
    cantidad : 1,
}

const {nombre} = producto;

console.log(nombre);

const  numeros = [50, 100, 150, 200, 250, 300, 350]

const [primero, segundo, tercero] = numeros;

const [, , , cuarto] = numeros

const [uno, dos, ...restoNumeros] = numeros;


console.log(primero);
console.log(segundo);
console.log(tercero);
console.log(cuarto);
console.log(restoNumeros);




