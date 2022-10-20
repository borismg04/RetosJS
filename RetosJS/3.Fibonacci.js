/*
LA SUCESIÓN DE FIBONACCI
  Fecha publicación enunciado: 10/01/22
  Fecha publicación resolución: 17/01/22
    Dificultad: DIFÍCIL

  Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
    La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
    0, 1, 1, 2, 3, 5, 8, 13...
*/

// Solución 1 
// let a = 0; 
// let b = 1;

// for (let i = 0; i <= 10; i++) {
//   let c=a+b;
//   a=b;
//   b=c;
//   console.log('Solicion 1',c);
// }

// Solución 2
// const fibonacci = (n) => {
//   if (n < 2) {
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// for (let i = 0; i < 10; i++) {
//   console.log(fibonacci(i));
// }

// Solución 3
const fibonacciA = (limite) =>{
  const inicial = [0, 1];
  for (let i = 2; i <= limite; i++) {
    inicial.push(inicial[i - 1] + inicial[i - 2])
  }
  return inicial;
}

const resultado = fibonacciA(10)
console.log(resultado);


