/*Ejercicio 3
Dado el siguiente código usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.
Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.
Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en JavaScript.  */
const users = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Santiago',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Laura',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]
// SOLUCION
let soundslist = []
let j = 0
for (const i of users) {
  for (const k in i.favoritesSounds) {
    soundslist[j] = k
    j++
  }
}
//console.log(soundslist)
// quitamos los duplicados
for (let i = 0; i < soundslist.length; i++) {
  let j = i + 1
  //bucle while que compara uno a uno y elimina los elementos duplicados.
  while (j <= soundslist.length) {
    if (soundslist[i] === soundslist[j]) {
      soundslist.splice(j, 1)
    } else {
      j++
    }
  }
}
//console.log(soundslist)
// Declaramos las variables que usaremos para contar el número de veces que un sonido es elegido.
let cwaves = 0
let crain = 0
let cfirecamp = 0
let cshower = 0
let ctrain = 0
let cwind = 0
for (const i of users) {
  for (const k in i.favoritesSounds) {
    if (k === 'waves') {
      cwaves++
    } else if (k === 'rain') {
      crain++
    } else if (k === 'firecamp') {
      cfirecamp++
    } else if (k === 'shower') {
      cshower++
    } else if (k === 'train') {
      ctrain++
    } else {
      cwind++
    }
  }
}

// Declaramos el objeto que recogerá la cantidad de veces que un sonido es elegido por los distintos usuarios.
let countfavoritesound = {
  waves: cwaves,
  rain: crain,
  firecamp: cfirecamp,
  shower: cshower,
  train: ctrain,
  window: cwind
}
for (const i in countfavoritesound) {
  console.log(
    'El número de veces que es elegido el sonido ',
    i,
    'es de: ',
    countfavoritesound[i]
  )
}
/*El número de veces que es elegido el sonido  waves es de:  3
El número de veces que es elegido el sonido  rain es de:  1
El número de veces que es elegido el sonido  firecamp es de:  3
El número de veces que es elegido el sonido  shower es de:  2
El número de veces que es elegido el sonido  train es de:  2
El número de veces que es elegido el sonido  window es de:  1
*/
