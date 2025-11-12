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
  for (const m of i.categories) {
    typecategorie[k] = m
    k++
  }
}
// Quitar duplicados usando el métdodo .includes()
for (let i = 0; i < typecategorie.length; i++) {
  m = typecategorie[i]
  for (let j = i + 1; j < typecategorie.length; j++) {
    if (typecategorie[j].includes(m)) {
      typecategorie.splice(j, 1)
    }
  }
}
console.log('las categorías son: ', typecategorie)
//las categorías son:  [ 'comedia', 'aventura', 'acción', 'thriller', 'animación' ]
