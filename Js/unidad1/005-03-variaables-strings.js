const producto = 'Bolsa de Semitas'
const precio = 30
const descuento = precio * 0.10 
const precioTotal = precio - descuento;

// concatenar usando la funcion (.concat)
console.log(producto.concat(' ').concat(precio));

// Concatenar usando el operado +
console.log(producto + ' ' + precio);
console.log(producto + ' ' + precio + ' en descuento');


console.log('El producto : ' + producto + ' tiene un descuento de ' + precio);
console.log(`Pero tiene un descuento del ${descuento} %, por lo que le queda en : ${precioTotal}`);


