/*Ejercicio 1
Dado el siguiente código usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías.
Ten en cuenta que las categorías no tienen que repetirse.
Es decir, const categorias = ["comedia", "aventura", "acción", "thriller", "animación"]
Para filtrar las categorías puedes ayudarte de la función .includes().
*/
const movies = [
  {
    title: 'Bracula: Condemor II',
    duration: 192,
    categories: ['comedia', 'aventura']
  },
  {
    title: 'Spider-Man: No Way Home',
    duration: 122,
    categories: ['aventura', 'acción']
  },
  {
    title: 'The Voices',
    duration: 223,
    categories: ['comedia', 'thriller']
  },
  {
    title: 'Shrek',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación']
  }
]
//! SOLUCION
let k = 0
let typecategorie = []
for (const i of movies) {
  //console.log(i)
  //console.log(i.categories)
  for (const m of i.categories) {
    //console.log(m)
    typecategorie[k] = m
    k++
  }
}
console.log(typecategorie)

//Hasta aquí el código funciona correctamente.
// Quitar duplicados usando el métdodo .includes()
for (let i = 0; i < typecategorie.length; i++) {
  m = typecategorie[i]
  console.log('m vale: ', m)
  //let j = 1
  for (let j = i + 1; j < typecategorie.length; j++) {
    if (typecategorie[j].includes(m)) {
      typecategorie.splice(j, 1)
      console.log(typecategorie)
    }
  }
}
console.log(typecategorie)
