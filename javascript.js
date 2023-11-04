import {crearGrafico} from './grafico.js'
import { imprimirTarjeta } from './tarjeta.js'
// POKEMON
// constante que obtiene valor del input inputDeTexto
const inputDeTexto = document.getElementById('inputDeTexto')
// constante que obtiene el valor de boton botonSolicitar
const botonSolicitar = document.getElementById('botonSolicitar')
// constante que contiene la URL de la API
const urlAPI = 'https://pokeapi.co/api/v2/pokemon/'


// se declara la funcion myFunction la cual se llamará como callback (segundo argumento)
// se le da como paramentro el prevent defaul (llamado e)


const myFunction = async (e) => {
    e.preventDefault()
    // dentro de myFunction se crea la constante textoEntrada, que captura el valor que obtuvo la constante input de texto
    const textoEntrada = inputDeTexto.value;  //Capturamos el valor del input de texto
    // se imprime en consola el valor la constante textoEntrada
    console.log(textoEntrada)
    // se crea constante respuesta, que genera un await fetch, para que espere la respuesta de la solicitud a la api
    const respuesta = await fetch (urlAPI + textoEntrada) 
    // se genera constante que hace esperar al codigo a que se de formato json a la respuesta traida por fetch
    const respuestaEnJson = await respuesta.json() /* para dar formato a la respuesta */
    // se imppara corroborime la respuesta rar la correcta conexion
    console.log(respuestaEnJson.stats)
    // se llama la funcion imprimirTarjeta para que muestre los argumentos que se le pasan: respuestaEnJson, que es la respuesta de la solicitud formateada, y textoEntrada, que es el texto escrito en el input
    imprimirTarjeta(respuestaEnJson,textoEntrada)
const values = respuestaEnJson.stats.map( (elemento) =>{return elemento.base_stat})
const names = respuestaEnJson.stats.map( (elemento) => elemento.stat.name)
console.log(values)
console.log(names)
crearGrafico(values,names)
}

// const myFunction = async (e) => {
//     e.preventDefault()
//     fetch(urlAPI + inputDeTexto.value)
//       .then((response) => response.json())
//       .then(info => imprimirTarjeta(info,inputDeTexto.value))
//       .catch((error) => console.log(error))
// }


// se aplica addEventListener a botonSolicitar y se le dan como argumentos el evento click y la funcion myFunction, lo que hace que al hacer click en el botonSolicitar, se ejecute la funcion myFunction
botonSolicitar.addEventListener('click', myFunction)
