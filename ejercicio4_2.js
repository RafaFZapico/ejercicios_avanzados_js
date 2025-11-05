/*2. Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.
Finalmente retorna el array.
De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.*/
function findArrayIndex(array, text) {
  //Tu codigo
  index = 0
  for (const i of array) {
    //console.log(i)
    if (i === text) {
      return index
    }

    index++
  }
  // console.log('El nuevo listado', array, ' queda así: ', array)
}
let index
function removeItem(array, text) {
  //let index = 1
  let j = 0
  while (j <= array.length) {
    findArrayIndex(array, text)
    //console.log(index + 'posición')

    array.splice(index, 1)
    j++
  }
  console.log('El listado queda de la siguiente manera: ', array)
}
const food = [
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
//const food = ['ketchup', 'pizza', 'chicken', 'pizza']
removeItem(food, 'beer')
