// constante que obtiene al elemento div tarjetaPersonaje
const tarjetaPersonaje = document.getElementById('tarjetaPersonaje')
const imgDefaults = document.getElementById('imgDefaults')
const titulos = document.getElementById('titulos')


// se crea la funcion ImprimirTarjeta que recibe recibe como parametros, primero datos, y luego NombrePersonaje. Esta funcion tiene como finalidad crear elementos en el documento html.

export const imprimirTarjeta = (datos, nombrePersonaje) => {
    titulos.innerHTML = `
    <h2>Quien es este Personaje?</h2>
    <h3>El Personaje es ${datos.species.name}</h3>`
    // dentro del div obtenido por TarjetaPersonaje, esta funcion crea el contenido indicado dentro de ``, un h2, un h3 que, mediante interpolacion, imprime el string que haya en nombrePersonaje, y finalmente genera una etiqueta de imagen que debe ubicarse en el directorio de imagen de la API indicado
    tarjetaPersonaje.innerHTML = `
    <img class="imgtarjeta" src=${datos.sprites.other.dream_world.front_default}>
    <img class="imgtarjeta" src=${datos.sprites.other["official-artwork"].front_default}>
    `
    imgDefaults.innerHTML = `
    <img class="imgmini" src=${datos.sprites.front_default}>
    <img class="imgmini" src=${datos.sprites.back_default}>
`
    // se realiza una impresion en consola de los datos presentes en el directorio indicado para corroborar el correcto funcionamiento del codigo
    console.log(datos.sprites.other.dream_world.front_default)
}