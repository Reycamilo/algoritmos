
// objeto lietal 
const producto = {
    nombre : 'Semitas',
    precio : 35,
    disponible : true,
}

const medidas = {
    peso : '2kg',
    medida : '2.5m'
}

console.log(producto);
console.log(medidas);

//    FUCIONAMIENTO DE OBJETOS
const resultado = Object.assign(producto,medidas);
// console.log(resultado);

// Spread Operator
const resultado2 = {...producto,...medidas}
console.log(resultado2);

const resultado3 = {...producto, medidas}
console.log(resultado3);
