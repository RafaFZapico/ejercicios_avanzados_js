/*Ejercicio 4
1. Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.
Haz varios ejemplos y compruébalos. */
function findArrayIndex(array, text) {
  //Tu codigo
  let index = 1
  for (const i of array) {
    if (i === text) {
      console.log('El texto se encuentra en la ', index + 'ª posición.')
    }
    index++
  }
}

const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]
//findArrayIndex(mainCharacters, 'Leia')
// El texto se encuentra en la  2 º posición
const listado = [
  'ketchup',
  'ketchup',
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda',
  'beer',
  'beer',
  'beer'
]
//findArrayIndex(listado, 'pizza')
/*El texto se encuentra en la  4 º posición
El texto se encuentra en la  9 º posición
*/
//findArrayIndex(listado, 'ketchup')
/*El texto se encuentra en la  1 º posición
El texto se encuentra en la  2 º posición
*/
findArrayIndex(listado, 'beer')
/*El texto se encuentra en la  14 º posición
El texto se encuentra en la  15 º posición
El texto se encuentra en la  16 º posición
*/
