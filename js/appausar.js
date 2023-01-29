// ARRAYS
const USUARIOS = []
const SERVICIOS = ["SEGURO DE VIDA","SEGURO DE HOGAR","SEGURO MÉDICO"]

// CONSTRUCTOR

    function Usuario(nombre, apellido, edad, email, pais_origen){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.pais_origen = pais_origen;
    }



// DOM

let inputNombre = document.querySelector('#exampleFormControlInput1')
let inputApellido = document.querySelector('#exampleFormControlInput2')
let inputEdad = document.querySelector('#exampleFormControlInput3')
let inputCorreo = document.querySelector('#exampleFormControlInput4')
let inputPais = document.querySelector('#exampleFormControlInput5')



let inputSelectorOptions = document.querySelector('#datalistOptions')
let inputTiposDeSeguros = document.querySelector('#exampleDataList')
let btnContinue = document.querySelector('#btnContinue')

let segurosVida = document.querySelector('#segurosVida')
let segurosHogar = document.querySelector('#segurosHogar')
let segurosMedicos = document.querySelector('#segurosMedicos')


// EVENTS

inputTiposDeSeguros.addEventListener("click", SERVICIOS.forEach((servicio) => {
    inputSelectorOptions.innerHTML += `<option value="${servicio}">`
    return inputSelectorOptions.innerHTML;
}))

// Este event, no funciona. Probar otra cosa.
inputSelectorOptions.addEventListener("Selection",eleccionServicio)

// CONDICIONALS



function eleccionServicio(){
    if (inputTiposDeSeguros != null && inputSelectorOptions == "SEGURO DE VIDA"){
        segurosVida.classList.remove("visually-hidden")
        segurosHogar.remove()
        segurosMedicos.remove()
    }
    else{
        if (inputTiposDeSeguros != null && inputSelectorOptions == "SEGURO MÉDICO"){
            segurosMedicos.classList.remove("visually-hidden")
            segurosHogar.remove()
            segurosVida.remove()
        }
        else{
            if (inputTiposDeSeguros != null && inputSelectorOptions == "SEGURO DE HOGAR"){
                segurosHogar.classList.remove("visually-hidden")
                segurosMedicos.remove()
                segurosVida.remove()
            }
        }
    }
}

inputNombre.addEventListener("change",(e) =>{
    e.preventDefault()
    inputNombre != null ? alert("Hay algo aqui") : alert("No hay nada")
})
// inputNombre != null ? alert("Hay algo aqui") : alert("No hay nada")











/**************************************************/
/**********************ERRORES*********************/
/**************************************************/

// ESTE IF NO FUNCIONA.
// if (inputTiposDeSeguros.inputSelectorOptions == 'SEGURO DE VIDA'){
//     const ingresoUsuario = new Usuario(inputNombre, inputApellido, inputEdad, inputCorreo, inputPais)
//     USUARIOS.push(ingresoUsuario)
//     console.log(USUARIOS)
    /* Aqui probablemente usemos LocalStorage para guardar los usuarios. */
    // Estoy creando todos los INPUTS desde HTML, y desde js los eliminaré, a sus clases y demas.
// }

// functions

// function ModalSeguroVida(/*Aqui va la lista de usuario, para poder usar sus datos en OTRO modal, para confirmación de datos.*/){
//     titleModal.innerText = 'SEGURO DE VIDA - formulario'
//     titleModal.append()
// }

// Mi funcion NO FUNCIONA, EL IF TAMPOCO. Lo demas si. No olvidar que carge elementos del html al DOM que no use todavia.

// Cambio de planes, ahora solo creare inputs, con sus nombres, y una vez llenado toda la información, aparecerá un modal con todos los datos para confirmar, y asi enviar los resultados.
