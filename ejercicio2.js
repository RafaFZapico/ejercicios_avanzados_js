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
  //m = i.favoritesSounds
  console.log('----------', i.name) // aparececen cada uno de los objetos:{name: 'Alberto',..........} que componen el arrray users.
  for (const k in i.favoritesSounds) {
    console.log(k) // waves, rain, firecamp......
    // Hasta aquí funciona el código.
    // m = k
    // console.log('m vale', m)
    /*for (const l in i.favoritesSounds) {
      // con el for (const l in i.favoritesSounds[k] me muestra las claver:"format" y "volume" de cada objeto de favoriteSounds
      //console.log('la clave es: ', i.favoritesSounds[k]) // me muestra 24 líneas como esta: la clave es:  { format: 'mp3', volume: 50 }
      console.log('la clave es: ', l) // me muestra 24 líneas como estas:la clave es:  format // la clave es:  volume
      // console.log('la clave es: ', i.favoritesSounds[k].volume) // me muestra 24 líneas como esta: la clave es:  50
      position++
    }*/
    //console.log(k.volume)
    // count++
    console.log('la clave es: ', i.favoritesSounds[k].volume)
    volumes[j] = i.favoritesSounds[k].volume
    j++
  }
  console.log(volumes)
}
// con este códigoconsole.log(i.favoritesSounds.k) da undefined
//[i[favoritesSounds]][volume]
//console.log('volumes= ', volumes)
