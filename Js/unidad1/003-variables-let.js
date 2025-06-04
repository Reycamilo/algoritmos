// console.log("Desde variables con let");

// VARIABLES CON LET DESDE ES6, para tener una forma mas precisa de declarar mas variables

function ejemplo () {
    let x = 12;

    if(true) {
        let x = 15;
        console.log(x);
        
    }

    console.log(x);
}

ejemplo();

