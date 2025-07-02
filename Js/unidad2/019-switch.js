const metodoPago = 'Efectivo'

switch (metodoPago) {
    case 'Efectivo' : 
        pagarEfectivo();
        break;
    
    case 'Tarjeta' :
        console.log(`Pago con ${metodoPago}`);
        break;
    
    case 'Tranferencia' :
        console.log(`Pago con Tranferencia`);
        break;
    
    
    default : 
        console.log('No has seleccionado un metodo de pago.');
        break;
        
}

function pagarEfectivo() {
    console.log('Pagando con efectivo.');
    
}
