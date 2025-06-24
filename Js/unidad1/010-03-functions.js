iniciarApp();

function iniciarApp() {
    console.log('Iniciando App');
    segundaFuncion()
    
}

function segundaFuncion() {
    console.log('Desde la segunda funcion');
    terceraFuncion('Juan Perez')
    
}

function terceraFuncion(usuario) {
    console.log('Autenticando ususario... espere...');
    console.log(`Usuario autenticado exitosamente ${usuario}`);
    cuartaFuncion()
    
}

let total = 0

function agregarCarrito(precio) {
    return total += precio
}

agregarCarrito(350)
agregarCarrito(120)
agregarCarrito(340)

console.log(`total : ${total}`);

const totalPagar = calcularImpuesto(total)

function calcularImpuesto(total) {
    return total *= 1.5
}

// esto que es ? esto me gusta mas