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

// console.log( autenticado && puedePagar ? 'Si esta autenticado' : 'No esta autenticado');

// FORMA ABREVIADA DE UN IF/ELSE.

const edad = 20;
const resultado = (edad >= 18) ? 'Es mayor de edad.' : 'Es menor de edad.';
console.log(resultado);

// let numero = 6
// let verificarNumero = ( numero % 2 === 0) ? 'El numero es Par' : 'El numero es Impar';
// console.log(verificarNumero);


// let hora = 16

// let saludo = (hora < 12) ? 'Buenos dias' : (hora < 18) ? 'buenas tardes' : 'Buenas noches'
// console.log(saludo);

                        