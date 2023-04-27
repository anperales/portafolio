export function valida(input){
    const tipoInput = input.dataset.tipo;
    console.log(input.dataset.tipo)
    if (input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeError(tipoInput, input);
    }
}

const tipoError = [
    "valueMissing",
    "typeMismatch"
]

const mensajesError = {
    nombre:{
        valueMissing: "Por favor escribe tu nombre."
    },
    email:{
        valueMissing: "Por favor escribe una dirección de correo electrónico.",
        typeMismatch: "Coloca una dirección de correo electrónico valida."
    },
    asunto:{
        valueMissing: "Por favor escribe un texto breve sobre tu asunto a tratar."
    }
}

function mostrarMensajeError(tipoInput, input){
    let mensaje ="";
    tipoError.forEach((error) => {
        if(input.validity[error]){
            mensaje = mensajesError[tipoInput][error];
        }
    });
    return mensaje;
}




