const autenticado = true;

if (autenticado) {

}

const puntos = 500

// if (puntos > 400) {
//     console.log('Excelente.');
    
// } else if ( puntos > 300) {
//     console.log('Felicidades.');
    
// }

function revisarPuntos() {
    if(puntos > 400) {
        console.log('Excelnte');
        return
        
    }

    if ( puntos > 350) {
        console.log('Buen puntaje, felicidades.');
        return
    }
}

revisarPuntos();

// OPERADOR TERNARIO

const puedePagar = true

console.log( autenticado && puedePagar ? 'Si esta autenticado' : 'No esta autenticado');
