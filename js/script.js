/*
Durante estas cuatro semanas, vamos a trabajar en una aplicación que encripta textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.

Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos para
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
El resultado debe ser mostrado en la pantalla.
Extras:
- Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.

Tenemos un periodo de tiempo de cuatro semanas para desarrollar el proyecto y vamos a trabajar con el sistema ágil de desarrollo, utilizando el Trello de la siguiente forma:

La columna Listos para iniciar presenta las tarjetas con elementos que aun no fueron desarrollados.
En la columna En Desarrollo estarán los elementos que estés desarrollando en el momento. Al iniciar una tarea, podrás mover la tarjeta que contiene dicha tarea para esta columna.
En la columna Pausado estarán los elementos que comenzaste a desarrollar, pero necesitaste parar por algún motivo.
Por fin, en la columna Concluido estarán los elementos ya concluidos.
*/

// elemento donde el usuario ingresa el texto 
let textoParaProcesar = document.getElementById("texto-para-procesar")

// elementos donde se muestra el resultado
let imagenEnResultado = document.querySelector(".contenedor-resultado img")
let tituloEnResultado = document.querySelector(".contenedor-resultado h2")
let parrafoEnResultado = document.querySelector(".contenedor-resultado p")
let textareaResultado = document.getElementById("textarea-resultado")
let botonCopiar = document.getElementById("btn-copy")

let patron = new RegExp(/^[a-z ,.;:'"]+$/);

function validarCaracteres(string) {
    // convertimos en array
    myArray = [...string]

    // verificamos y retornamos si todas las letras cumplen o no con el patron regex
    return myArray.every((letter) => patron.test(letter))
}

function encriptar() {
    // capturamos el texto del usuario a la variable frase para comenzar con el cifrado
    let frase = textoParaProcesar.value;

    // ejecutamos la validación de cada letra
    if (validarCaracteres(frase) == false) {
        alert('Solo letras minúsculas y sin acentos')
        return
    };

    frase = frase.replace(/e/gim, "enter");
    frase = frase.replace(/i/gim, "imes");
    frase = frase.replace(/a/gim, "ai");
    frase = frase.replace(/o/gim, "ober");
    frase = frase.replace(/u/gim, "ufat");

    // ocultamos la imagen, el titulo y párrafo de la sección del resultado
    imagenEnResultado.style.display = "none";
    tituloEnResultado.style.display = "none";
    parrafoEnResultado.style.display = "none";

    //mostramos el botón de copiar y textarea con el resultado 
    textareaResultado.removeAttribute("hidden");
    botonCopiar.removeAttribute("hidden");

    // pasamos el texto ya procesado al elemento textarea
    textareaResultado.innerHTML = frase;
    console.log("Texto cifrado")
}

function desencriptar() {
    // capturamos el texto del usuario a la variable frase para comenzar con el cifrado
    let frase = textoParaProcesar.value;

    // ejecutamos la validación de cada letra
    if (validarCaracteres(frase) == false) {
        alert('Solo letras minúsculas y sin acentos')
        return
    };

    frase = frase.replace(/ufat/gim, "u");
    frase = frase.replace(/ober/gim, "o");
    frase = frase.replace(/ai/gim, "a");
    frase = frase.replace(/imes/gim, "i");
    frase = frase.replace(/enter/gim, "e");

    // ocultamos la imagen, el titulo y párrafo de la sección del resultado
    imagenEnResultado.style.display = "none";
    tituloEnResultado.style.display = "none";
    parrafoEnResultado.style.display = "none";

    //mostramos el botón de copiar y textarea con el resultado 
    textareaResultado.removeAttribute("hidden");
    botonCopiar.removeAttribute("hidden");

    // pasamos el texto ya procesado al elemento textarea
    textareaResultado.innerHTML = frase;
    console.log("Texto descifrado")
}

function copiarAlPortapapeles() {
    // capturamos el contenido del textareaResultado en la variable content
    let content = textareaResultado.innerHTML;
    navigator.clipboard.writeText(content)
        .then(() => {
            console.log("Texto copiado al Portapapeles...")
        })
        .catch(err => {
            console.log('Algo salió mal al copiar', err);
        })
}

function limpiar() {
    textoParaProcesar.value = "";
    console.log("se limpió la casilla");
}

function pegar() {
    navigator.clipboard.readText().
        then(clipText => textoParaProcesar.value = clipText)
        .catch(err => console.log('Algo salió mal al pegar', err));
}