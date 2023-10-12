// Contenedor del main principal
var container = document.querySelector(".container");
// Contenedor del resultado del formulario
var success = document.querySelector(".success");
// Variable que contiene el texto de invalidez de correo
var valido = document.querySelector(".formulario__invalid");
// Entrada de correo por medio del input
var inputCorreo = document.querySelector(".formulario__input");
// Salida que escribirá el correo recibido
var spanMail = document.querySelector(".success__span");
// Botón de confirmación del formulario
var boton = document.querySelector(".formulario__submit");
// Botón para volver al formulario
var botonSuccess = document.querySelector(".success__btn");
// Variable donde guardo lo ingresado en el input
var validacion;

// Evento "click" al presionar el botón de confirmación
boton.addEventListener("click", ()=>
{
    // Leo el valor ingresado en el input
    validacion = inputCorreo.value;
    // Verifico que el correo sea valido (que tenga @ y .com)
    if(validacion.includes("@") && validacion.includes(".com"))
    {
        // Oculto bloque de ingreso de correo
        container.style.display = "none";
        // Muestro bloque de confirmación de correo
        success.style.display = "block";
        // Muestro correo valido ingresado
        spanMail.textContent = inputCorreo.value;
    }
    // Caso contrario informo en pantalla mail invalido
    else
    {
        inputCorreo.style.color = "#ff6257";
        inputCorreo.style.backgroundColor = "#f0dedc";
        inputCorreo.style.borderColor = "#ff6257";
        valido.style.display = "flex"
    }
});

// Evento para restaurar la ventana de ingreso de correo, una vez confirmada, a sus valores originales
botonSuccess.addEventListener("click", ()=>
{
    container.style.display = "grid";
    success.style.display = "none";
    inputCorreo.value = "";
    inputCorreo.style.color = "#9294a0";
    inputCorreo.style.backgroundColor = "#ffffff";
    inputCorreo.style.borderColor = "#9294a0";    
    valido.style.display = "none"
});
