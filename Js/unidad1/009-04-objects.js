
// objeto lietal 
const producto = {
    nombre : 'Semitas',
    precio : 35,
    disponible : true,
}

// conjelar un objeto
// Object.freeze(producto);

// sellar objeto
Object.seal(producto);
// producto.color = blanco;
producto.disponible = false;
producto.color = "blanco"

// producto.disponible = false;

console.log(producto);




