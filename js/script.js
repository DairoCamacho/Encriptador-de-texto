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
function encriptar() {
    let texto = document
        .querySelector("#texto-para-procesar")
        .value.toLowerCase();
    let textoProcesado = texto.replace(/a/gim, "ai");
    textoProcesado = textoProcesado.replace(/e/gim, "enter");
    textoProcesado = textoProcesado.replace(/i/gim, "imes");
    textoProcesado = textoProcesado.replace(/o/gim, "ober");
    textoProcesado = textoProcesado.replace(/u/gim, "ufat");

    document.querySelector("#textarea-resultado").removeAttribute("hidden");
    document.querySelector("#btn-copy").removeAttribute("hidden");
    document.querySelector(".contenedor-resultado img").style.display = "none";
    document.querySelector(".contenedor-resultado h2").style.display = "none";
    document.querySelector(".contenedor-resultado p").style.display = "none";
    document.querySelector("#textarea-resultado").innerHTML = textoProcesado;
    console.log("Texto cifrado")
}

function desencriptar() {
    let texto = document
        .querySelector("#texto-para-procesar")
        .value.toLowerCase();
    let textoProcesado = texto.replace(/ufat/gim, "u");
    textoProcesado = textoProcesado.replace(/ober/gim, "o");
    textoProcesado = textoProcesado.replace(/imes/gim, "i");
    textoProcesado = textoProcesado.replace(/enter/gim, "e");
    textoProcesado = textoProcesado.replace(/ai/gim, "a");

    document.querySelector("#textarea-resultado").removeAttribute("hidden");
    document.querySelector("#btn-copy").removeAttribute("hidden");
    document.querySelector(".contenedor-resultado img").style.display = "none";
    document.querySelector(".contenedor-resultado h2").style.display = "none";
    document.querySelector(".contenedor-resultado p").style.display = "none";
    document.querySelector("#textarea-resultado").innerHTML = textoProcesado;
    console.log("Texto descifrado")
}

function copiarAlPortapapeles() {
    let content = document.querySelector("#textarea-resultado").innerHTML;
    navigator.clipboard.writeText(content)
        .then(() => {
            console.log("Text copied to clipboard...")
        })
        .catch(err => {
            console.log('Something went wrong', err);
        })
}
