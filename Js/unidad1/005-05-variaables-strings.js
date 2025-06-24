const producto = "Monitor de 20\""
console.log(producto);
const x = 'variable para reemplazar'

// Reemplazar texto por otro
console.log(producto.replace('"', ' pulgadas'));
console.log(x.replace('para', 'por'));


// extraer una parte de una cadena de texto
console.log(producto.slice(0,10));
console.log(producto.slice(8))
console.log(producto.slice(2,1))

// Alternativa a slice
console.log('SUBSTRING');
console.log(producto.substring(0,10));
console.log(producto.substring(8));
console.log(producto.substring(2,1));

console.log('charAt');
console.log(producto.charAt(0));



