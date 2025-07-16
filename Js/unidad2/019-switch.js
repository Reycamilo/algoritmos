// const metodoPago = 'Efectivo'

// switch (metodoPago) {
//     case 'Efectivo' : 
//         pagarEfectivo();
//         break;
    
//     case 'Tarjeta' :
//         console.log(`Pago con ${metodoPago}`);
//         break;
    
//     case 'Tranferencia' :
//         console.log(`Pago con Tranferencia`);
//         break;
    
    
//     default : 
//         console.log('No has seleccionado un metodo de pago.');
//         break;
        
// }

// function pagarEfectivo() {
//     console.log('Pagando con efectivo.');
    
// }

// practica

// let dia = 'Martes'

// switch (dia) {
//     case 'Lunes' : 
//         console.log('Hoy es Lunes, inicio de semana');
//         break;
//     case 'Martes' : 
//         console.log('Hoy es Martes, y da pereza.');
//         break;
//     case 'Miercoles' : 
//         console.log('Hoy es miercoles, y es mediado de semana.');
//         break;
//     case 'Jueves' : 
//         console.log('Hoy es Jueves, y ya mero terminan las clases.');
//         break;
//     case 'Viernes' : 
//         console.log('Hoy es viernes, y me voy a casa.');
//         break;
//     default :
//         console.log('Medio pereza hacer lo demas.');
//         break;
        
// }

// ejercicio

const edades = [12, 25, 17, 60, 45, 70];

edades.forEach((edad) => {
   if (edad >= 60) {
        console.log(`Edad ${edad}: Adulto Mayor.`);
        
   } else if ( 18 <= edad && edad <= 59){
                console.log(`Edad ${edad}: Adulto.`);
                
   } else {
    console.log(`Edad ${edad}: Menor de edad.`);
    
   }

})