
// BREAK
// for(let i = 0; i < 10; i++) {
//   if (i == 5 ) {
//     console.log('cinco');
//     break;
    
//   }
//   console.log(`Numero : ${i}`);
  
// // }

// //  CONTINUE
// for(let i = 0; i < 10; i++) {
//   if (i == 5 ) {
//     console.log('cinco');
//     continue;
    
//   }
//   console.log(`Numero : ${i}`);
  
// }

// FIZZ BUZZ - 100 numeros (juego)
// Multiplos de 3(3,6,9,12)
// cuando son multiplos, escrbimos la palabra fizz
// pero si son Mult.. de 5 (5,10)
// Entoces decimos buzz
//Si tengo Multi.. 15 (30,45) FIZZ BUZZ

for(let i = 0; i <= 100; i++) {
  if( (i % 15 ) == 0) {
    console.log(`- ${i} FIZZ BUZZ`);
  } else if ( (i % 5) == 0) {
    console.log(`- ${i} BUZZ`);
  } else if ( (i % 3) == 0) {
    console.log(`- ${i} FUZZ`);
  }
}