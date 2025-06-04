// Las variables const estan a apartir de ES6
// se utilizan para definir variables que no cambiaran a lo largo del ciclo de vida del programa.
// las variables const tambien tienen un ambito de bloque.

function ejemplo() {
    const x = 15;

    if (true) {
        const x = 23;
    }

    

    console.log(x);

}

ejemplo();

const producto = "Semitas"

// producto = "Cafecito"