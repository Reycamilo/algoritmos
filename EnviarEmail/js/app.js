
// este evento se ejecuta 
document.addEventListener("DOMContentLoaded", function() {

    // Creamos el Objeto email con tres propiedades
    const email = {
        email : "",
        asunto : "",
        mensaje : ""
    }


    // capturando los elementos
    const InputEmail = document.getElementById("email")
    const InputAsunto = document.getElementById("asunto")
    const InputMensaje = document.getElementById("mensaje")
    const formulario = document.getElementById("formulario")
    const BotonSubmit = document.querySelector("#formulario button[type='submit']")
    const BotonReset = document.querySelector("#formulario button[type='reset']")



    // asignar evento
    InputEmail.addEventListener("blur", validar)
    InputAsunto.addEventListener("blur", validar)
    InputMensaje.addEventListener("blur", validar)
    


    // funcion validar
    // verifica si hay espacios en blanco en los inputs
    function validar  (e) {
        if(e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio.`,e.target.parentElement);
            email[e.target.name] = ""
            
            return;
        }
    }



    // Funcion alerta
    function mostrarAlerta (mensaje, referencia) {

        // evita duplicados - solucion de chat gpt
        // const alertaExistente = document.querySelector(".bg-red-600")
        // if(alertaExistente) return


        // Generar Alerta
        const error = document.createElement("p")
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center', 'rounded-lg')
        error.textContent = mensaje

        // Inyectar el error en el Formular
        referencia.appendChild(error)
    }

})