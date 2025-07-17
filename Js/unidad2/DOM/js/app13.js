const $formulario = document.querySelector('#formulario')

$formulario.addEventListener('submit', validarFormulario)

function validarFormulario(e) {
    e.preventDefault(); // no nos saca de la pagina.
    // console.log('Buscando ...');
    // console.log(e.target.method);
    // console.log(e.target.action);
    // console.log(e.target['busqueda'].value);
    
    if (e.target['busqueda'].value === '') {
        console.log('Datos no validos');
        
    } else {
        console.log('Los datos son validos');
        
    }
    
    
}

let hola