const producto = 'Monitor 27"';
console.log(producto);

// Para contar los caracteres de un string
console.log(`total caracteres: ${producto.length}`);

// Buscar valor dentro de un strings
console.log(producto.indexOf('Monitor'));
console.log(producto.indexOf('i'));
console.log(producto.indexOf('27'));
console.log(producto.indexOf(' '));
console.log(producto.indexOf('tablet')); // No existe.Arroga valor -1.

console.log(producto.includes("Monitor")); // Busca la palabra completa. ".includes"



