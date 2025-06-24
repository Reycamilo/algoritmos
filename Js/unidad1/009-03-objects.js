
// objeto lietal 
const producto = {
    nombre : 'Semitas',
    precio : 35,
    disponible : true,
}

// const nombre = producto.nombre 
// const {nombre, precio} = producto;
// console.log(nombre);
// console.log(precio);

// objeto anidado
const producto2 = {
    nombre : 'Monitor 27"',
    precio : 6000,
    disponible : true,
    imagen : 'imagen2.pg',
    informacion : {
        medidas : {
            peso : '2kg',
            medido : '0.5m',
        },
        fabricacion : {
            pais : 'china',
        }
    } 
}

// console.log(producto2);
// console.log(producto2.informacion);
// console.log(producto2.informacion.fabricacion);
// console.log(producto2.informacion.fabricacion.pais);
console.log(producto2.informacion.fabricacion.pais);

// // 
// const {nombre} = producto2;
// const {informacion } = producto2;
// const {informacion : {fabricacion}} = producto2;
// const {informacion : {fabricacion : {pais}}} = producto2;

// console.log(informacion);
// console.log(fabricacion);
// console.log(pais);



