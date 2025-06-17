const boolean1 = true;
const boolean2 = false
const boolena3 = 'true'

console.log(boolean1);
console.log(boolean2);
console.log(boolena3);
console.log(typeof(boolean2));

console.log(`boolena 1 es igual a booelan2 = ${boolean1 == boolean2}`);
console.log(`boolena 1 es igual a booelan3 = ${boolean1 == boolena3}`);
console.log(`boolena 1 es igual a booelan3 = ${boolean1 === boolena3}`);

const boolean4 = new Boolean(true)

console.log(boolean4);

const autenticado = true;
if (autenticado) {
    console.log(`Si puede ver sus notas`);
} else {
    console.log(`No puede ver sus notas`);
    
}

// Operador Ternario
console.log(autenticado ? `Si puede ver sus notas` : `No puede ver sus notas`);



