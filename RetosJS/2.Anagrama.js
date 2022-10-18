/* Reto #1
¿ES UN ANAGRAMA?

Dificultad: MEDIA
  Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
  Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
  NO hace falta comprobar que ambas palabras existan.
  Dos palabras exactamente iguales no son anagrama.
*/

const anagrama = (palabra1, palabra2) => {

  let palabra1Array = palabra1.toLowerCase().split('').sort();
  let palabra2Array = palabra2.toLowerCase().split('').sort();
  
  palabra1Array = palabra1Array.join('');
  palabra2Array = palabra2Array.join('');

  if (palabra1Array === palabra2Array) {
    return true;
  } else {
    return false;
  }
}

console.log(anagrama('Hola', 'Aloh'));
console.log(anagrama('amor', 'roma'));
console.log(anagrama('rata', 'tara'));
console.log(anagrama('casco', 'saco'));

/*Notas : 
  Metodo SPLIT : divide un objeto de tipo String en un array de strings, separando la cadena en subcadenas.
  Ejemplo :
  let cadena = 'Hola Mundo';
  let cadenaArray = cadena.split(' ');
  console.log(cadenaArray);
  // Resultado : ['Hola', 'Mundo']

  Metodo SORT : ordena los elementos de un array y devuelve el array ordenado.
  Ejemplo :
  let cadena = 'Hola Mundo';
  let cadenaArray = cadena.split(' ');
  console.log(cadenaArray);
  // Resultado : ['Hola', 'Mundo']
  cadenaArray = cadenaArray.sort();
  console.log(cadenaArray);
  // Resultado : ['Hola', 'Mundo']

  Metodo JOIN : une todos los elementos de un array (o un array-like object) en una cadena y devuelve esta cadena.
  Ejemplo :
  let cadena = 'Hola Mundo';
  let cadenaArray = cadena.split(' ');
  console.log(cadenaArray);
  // Resultado : ['Hola', 'Mundo']
  cadenaArray = cadenaArray.sort();
  console.log(cadenaArray);
  // Resultado : ['Hola', 'Mundo']
  cadenaArray = cadenaArray.join('');
  console.log(cadenaArray);
  // Resultado : 'HolaMundo'
*/