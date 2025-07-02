// verdader o que sea fals

const puntos = 1000;
const puntos2 = '1000'

if(puntos == 1000) {
    console.log('Si es igual');
    
} else {
    console.log('No es igual');
    
}

if ( puntos2 === 1000) {
    console.log("Son iguales");
    
} else {
    console.log("No es igual");
    
}

console.log('----------------------------------------- Mayor que , o Menor que -----------------------------------------------------------');
// const dinero = 299;
// const totalPagar = 300;
// const edad = 24;

// if( edad >= 18) {
//     if (dinero >= totalPagar) {
//         console.log(`Proceda ha el pago.`);
        
//     } else {
//         console.log('Fondos insuficientes.');
        
//     }
// } else {
//     console.log('No es mayor de edad.');
    
// }


const dinero = 300;
const totalPagar = 500;
const edad = 24;
const cheque = true
const tarjeta = false;

if ( dinero >= totalPagar) {
    console.log(`Se puede realizar el cobro en efectivo.`);
    
} else if (tarjeta) {
    console.log(`Puede pagar con tarjeta de credito.`);
    
} else if (cheque) {
    console.log(`Puede pagar con cheque`);
    
} else {
    console.log(`Hay fondos insuficientes.`);
    
}