/*Ejercicio 2
Dado el siguiente código usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.
Es decir, la media de volumen de todos los volumenes juntos. */
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
let count = 0
let volumes = []
let j = 0
let m
let position = 0
for (const i of users) {
  for (const k in i.favoritesSounds) {
    volumes[j] = i.favoritesSounds[k].volume
    j++
  }
}
console.log('los volumenes recopilados son:', volumes)
// sumamos todos los valores de la clave volumen
let tot = 0
let i = 0
while (i < volumes.length) {
  tot = tot + volumes[i]
  i++
}
console.log('La suma total es:', tot)
// Hallamos el valor promedio.
console.log(
  'La media de volumen de todos los valores es:',
  tot / volumes.length
)
