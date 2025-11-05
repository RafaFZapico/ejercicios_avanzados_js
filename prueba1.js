/*const miArray = [
  {
    id: 1,
    datos: {
      informacion: {
        clave: 'valor_deseado'
      }
    }
  }
]
console.log(miArray[0].datos.informacion.clave)
// valor_deseado*/
/*function findArrayIndex(array, text) {
  //Tu codigo
  index = 1
  for (const i of array) {
    //console.log(i)
    if (i === text) {
      return index
    }

    index++
  }
  //console.log('El nuevo listado', array, ' queda así: ', array)
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
findArrayIndex(food, 'pizza')
console.log(index)*/
/*function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}
console.log(getRandomInt(3))
let i = Math.ceil(2.5)
console.log('i vale:', i)*/
let array = []
array[0] = '1'
array[3] = '3'

console.log(array)
//array[1] = '2'
console.log(array)
console.log(typeof array[1])
if (array.includes('null')) {
  console.log('hay espacios vacíos')
}
