/*Ejercicio 5
Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.
Que la función use el parametro para simular una tirada de dado y retornar el resultado.
Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random()
*/
// SOLUCION
function rollDice(faces) {
  let i
  let j = 0
  while (j < 1 || j > faces) {
    i = Math.random()
    //console.log('i vale:', i)
    istring = i.toString()
    // console.log('istring vale', istring)
    j = istring[2]
  }
  console.log('El número que sale del dado de', faces, 'caras, es:', j)
}
rollDice(8)
// Nos da un número comprendidio entre 1 y 8 ambos incluidos.
