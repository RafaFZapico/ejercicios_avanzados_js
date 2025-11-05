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
  console.log('las posiciones a cambiar son :', index)
  let m = 0
  const changes = []
  // en listsort iremos anotando los cambios
  const listsort = []
  // anotamos en el array changes los dos elementos que se sustituirán
  changes[0] = list[index[0] - 1]
  changes[1] = list[index[1] - 1]
  console.log('los cambios son: ', changes)
  //? Hasta aquí el código funciona correctamente.
  // recorremos list para ir anotando en listsort los elementos
  let vfor = 1
  let listsortaux = listsort
  for (const i of list) {
    if (i === changes[0]) {
      listsort[k] = changes[1]
      console.log('primer cambio', listsort)
      listsort[index[1] - 1] = changes[0]
      console.log('segundo cambio', listsort)
      console.log('El listado listsort es:  ', listsort)
      console.log('longitud del array listsort', listsort.length)
      console.log('aux es:', listsortaux)

      // Hasta aquí hace bien los cambios.
    } else if (
      i !== changes[0] &&
      i !== changes[1]
      //listsort[k] === changes[1]
    ) {
      listsort[k] = i
      console.log('si no hay que cambiar, el listado queda así.', listsort)
    }

    k++
    console.log('La variable k vale:', k)
    console.log('vuelta completa del bucle for que recorre list', vfor)
    console.log('-----------------------------------------------------------')
    vfor++
    /*if (k === list.length) {
      return
    }*/
  }
  /*for (let i = 0; i < listsortaux.length; i++) {
    if (typeof listsortaux[i] === undefined) {
      listsortaux.splice(i, 1)
    }
  }*/
  console.log('longitud del auxiliar:', listsortaux.length)
  console.log('El listado modificado queda así: ', listsort)
} // fin de la función swap
// Llamada a la función swap
swap(fantasticFour, 3, 4)
