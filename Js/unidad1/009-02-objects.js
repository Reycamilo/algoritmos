const nombre = 'Semitas'
const precio = 35
const disponible = true

// objeto lietal 
const producto = {
    nombre : 'Semitas',
    precio : 35,
    disponible : true,

}

// agregar 
producto.creadoPor = 'Juan Perez'
console.log(producto);

producto.fechaCaducidad = '12/2/2022'
delete producto.fechaCaducidad
// quitar
delete producto.creadoPor
console.log(producto);
