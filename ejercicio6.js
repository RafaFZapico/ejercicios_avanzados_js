/*Ejercicio 6
Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.
Retorna el array resultante. */
const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]
//! Declaración de la función swap

function swap(list, index1, index2) {
  let k = 0
  let index = []
  index[0] = index1
  index[1] = index2
  index.sort()
  let m = 0
  const changes = []
  // en listsort iremos anotando los cambios
  const listsort = []
  // anotamos en el array changes los dos elementos que se sustituirán
  changes[0] = list[index[0] - 1]
  changes[1] = list[index[1] - 1]
  console.log(
    'Los cambios que se realizarán son:',
    changes[0],
    'en la posición:',
    index[0],
    'y',
    changes[1],
    'en la posición:',
    index[1]
  )
  //? Hasta aquí el código funciona correctamente.
  // recorremos list para ir anotando en listsort los elementos
  let vfor = 1
  for (const i of list) {
    if (i === changes[0]) {
      listsort[k] = changes[1]
      listsort[index[1] - 1] = changes[0]
      // Hasta aquí hace bien los cambios.
    } else if (i !== changes[0] && i !== changes[1]) {
      listsort[k] = i
    }
    k++
  }
  console.log('El listado modificado queda así: ', listsort)
} // fin de la función swap
// Llamada a la función swap
swap(fantasticFour, 3, 2)
/*Los cambios que se realizarán son: Mr. Fantástico en la posición: 2 y La mujer invisible en la posición: 3
El listado modificado queda así:  [
  'La antorcha humana',
  'La mujer invisible',
  'Mr. Fantástico',
  'La cosa'
]
*/
