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

// DOM - DATOS PRINCIPALES
let inputNombre = document.querySelector('#inputNombre')
let inputApellido = document.querySelector('#inputApellido')
let inputEdad = document.querySelector('#inputEdad')
let inputCorreo = document.querySelector('#inputCorreo')
let inputPais = document.querySelector('#inputPais')
let btnAvanzar = document.querySelector('#btnAvanzar')
let inputSelectorOptions = document.querySelector('#datalistOptions')
let inputTiposDeSeguros = document.querySelector('#exampleDataList')


// DOM - SEGURO DE VIDA
let segurosVida = document.querySelector('#segurosVida')
let btnContinueVida = document.querySelector('#btnContinueVida')
let inputCapital = document.querySelector('#inputCapital')
let inputAnio = document.querySelector('#inputAnio')
let textSeguroVida = document.querySelector('#textSeguroVida')
let btnSaveChangesVida = document.querySelector('#btnSaveChangesVida')

// DOM - SEGURO DE HOGAR
let segurosHogar = document.querySelector('#segurosHogar')
let btnContinueHogar = document.querySelector('#btnContinueHogar')
let inputPertenencias = document.querySelector('#inputPertenencias')
let inputJoyas = document.querySelector('#inputJoyas')
let textSeguroHogar = document.querySelector('#textSeguroHogar')
let btnSaveChangesHogar = document.querySelector('#btnSaveChangesHogar')


// DOM - SEGURO MÉDICO
let segurosMedicos = document.querySelector('#segurosMedicos')
let btnContinueMedico = document.querySelector('#btnContinueMedico')
let inputAnioNacimiento = document.querySelector('#inputAnioNacimiento')
let inputObraSocial = document.querySelector('#inputObraSocial')
let inputDireccion = document.querySelector('#inputDireccion')
let inputDni = document.querySelector('#inputDni')
let textSeguroMedico = document.querySelector('#textSeguroMedico')
let btnSaveChangesMedicos = document.querySelector('#btnSaveChangesMedicos')

// EVENTS
inputTiposDeSeguros.addEventListener("click", SERVICIOS.forEach((servicio) => {
    inputSelectorOptions.innerHTML += `<option value="${servicio}">`
}))

btnAvanzar.addEventListener("click", infoCompletada)

btnContinueVida.addEventListener("click", vidaModal)
btnSaveChangesVida.addEventListener("click", guardarCambiosVida)

btnContinueHogar.addEventListener("click",hogarModal)
btnSaveChangesHogar.addEventListener("click",guardarCambiosHogar)

btnContinueMedico.addEventListener("click",medicoModal)
btnSaveChangesMedicos.addEventListener("click", guardarCambiosMedicos)



// FUNCTIONS
function guardarCambiosHogar(){
    const IVA = 1.21
    let pertenencias = parseInt(inputPertenencias.value)
    let joyas = parseInt(inputJoyas.value)
    let totalSeguroHogar = parseInt(((pertenencias + joyas) * IVA) / 0.9)
    let servicioElegido = "Seguro de Hogar"
    let servicio = {servicio: servicioElegido, cantidad_joyas: joyas, cantidad_pertenencias: pertenencias, total: totalSeguroHogar}
    USUARIOS.push(servicio)
    console.log(USUARIOS)
    const usuarioAGuardar = JSON.stringify(USUARIOS)
    localStorage.setItem("usuario/servicio",usuarioAGuardar)
    alert("Se han guardado y enviado los datos satisfactoriamente.")
}

function guardarCambiosVida(){
    let cantidadCapital = inputCapital.value
    let datoAnio = inputAnio.value
    let servicioElegido = "Seguro de vida"
    let capital = parseInt(inputCapital.value)
    let edad = parseInt(inputEdad.value)
    let anio = parseInt(inputAnio.value)
    let totalSeguroVida = parseInt(((capital * edad) + anio) / 10) 
    let servicio = {servicio: servicioElegido, capital: cantidadCapital, año: datoAnio, total: totalSeguroVida}
    USUARIOS.push(servicio)
    console.log(USUARIOS)
    const usuarioAGuardar = JSON.stringify(USUARIOS)
    localStorage.setItem("usuario/servicio",usuarioAGuardar)

    alert("Se han guardado y enviado los datos satisfactoriamente.")

}

function guardarCambiosMedicos(){
    let obraSocial = inputObraSocial.value
    let dni = inputDni.value
    let direccion = inputDireccion.value
    let servicioElegido = "Seguro Médico"
    let servicio = {servicio: servicioElegido, obraSocial: obraSocial, DNI: dni, Direccion: direccion}
    USUARIOS.push(servicio)
    console.log(USUARIOS)
    const usuarioAGuardar = JSON.stringify(USUARIOS)
    localStorage.setItem("usuario/servicio",usuarioAGuardar)
    alert("Se han guardado y enviado los datos satisfactoriamente.")
}

function medicoModal(){
    if(inputAnioNacimiento.value != '' && inputDni.value != '' && inputDireccion.value != ''){
        if (inputObraSocial.value == ''){
            inputObraSocial.value = "No dispone"
        }
        textSeguroMedico.innerHTML = 
        `<p>Los datos a confirmar son los siguientes: </p>
        <ul>
            <li class="listStyle">Nombre: ${inputNombre.value}</li>
            <li class="listStyle">Apellido: ${inputApellido.value}</li>
            <li class="listStyle">Edad: ${inputEdad.value}</li>
            <li class="listStyle">Correo eléctronico: ${inputCorreo.value}</li>
            <li class="listStyle">Dirección: ${inputDireccion.value}</li>
            <li class="listStyle">Pais: ${inputPais.value}</li>
            <li class="listStyle">DNI: ${inputDni.value}</li>
        </ul>
        <p> Su obra social es de: ${inputObraSocial.value}</p>
        `        
        textSeguroMedico.innerHTML += '<p>¿Todos los datos son correctos?</p>' 
    }
}

function hogarModal(){
    if(inputPertenencias != '' && inputJoyas != ''){
        const IVA = 1.21
        let pertenencias = parseInt(inputPertenencias.value)
        let joyas = parseInt(inputJoyas.value)
        let totalSeguroHogar = parseInt(((pertenencias + joyas) * IVA) / 0.9)
        textSeguroHogar.innerHTML = 
        `<p>Los datos a confirmar son los siguientes: </p>
        <ul>
            <li class="listStyle">Nombre: ${inputNombre.value}</li>
            <li class="listStyle">Apellido: ${inputApellido.value}</li>
            <li class="listStyle">Edad: ${inputEdad.value}</li>
            <li class="listStyle">Correo eléctronico: ${inputCorreo.value}</li>
            <li class="listStyle">Pais: ${inputPais.value}</li>
        </ul>
        <p> El total sobre su seguro de hogar sería de $${totalSeguroHogar}</p>
        `        
        textSeguroHogar.innerHTML += '<p>¿Todos los datos son correctos?</p>'       
    }
    else{
        alert("Complete todos los datos.")
    }
}

function vidaModal(){
    if(inputCapital.value != '' && inputAnio.value != ''){      
        let capital = parseInt(inputCapital.value)
        let edad = parseInt(inputEdad.value)
        let anio = parseInt(inputAnio.value)
        let totalSeguroVida = parseInt(((capital * edad) + anio) / 10) 
        textSeguroVida.innerHTML = 
        `<p>Los datos a confirmar son los siguientes: </p>
        <ul>
            <li class="listStyle">Nombre: ${inputNombre.value}</li>
            <li class="listStyle">Apellido: ${inputApellido.value}</li>
            <li class="listStyle">Edad: ${inputEdad.value}</li>
            <li class="listStyle">Correo eléctronico: ${inputCorreo.value}</li>
            <li class="listStyle">Pais: ${inputPais.value}</li>
        </ul>
        <p> El total sobre su seguro de vida sería de $${totalSeguroVida}</p>
        `        
        textSeguroVida.innerHTML += '<p>¿Todos los datos son correctos?</p>'
        return totalSeguroVida
    }
    else{
        alert("Complete todo los datos.")
    }
}

function infoCompletada(){

    if(inputNombre.value != ''  && inputApellido.value != '' && inputEdad.value != '' && inputCorreo.value != '' && inputPais.value != '' && inputTiposDeSeguros.value != null){
        // La parte de guardado del usuario, quiero que sea una vez seleccionado el servicio y que se hayan "guardado los cambios".
        let usuarioIngresado = new Usuario(inputNombre.value, inputApellido.value, inputEdad.value, inputCorreo.value, inputPais.value)
        USUARIOS.push(usuarioIngresado)
        switch(inputTiposDeSeguros.value){
            case "SEGURO DE VIDA":
                segurosVida.classList.remove("visually-hidden")
                if (segurosMedicos.classList.contains("visually-hidden") == false){
                    segurosMedicos.classList.add("visually-hidden")
                }else{
                    if(segurosHogar.classList.contains("visually-hidden") == false){
                        segurosHogar.classList.add("visually-hidden")
                    }
                }
                break
            case "SEGURO MÉDICO":
                segurosMedicos.classList.remove("visually-hidden")
                if (segurosVida.classList.contains("visually-hidden") == false){
                    segurosVida.classList.add("visually-hidden")
                }else{
                    if(segurosHogar.classList.contains("visually-hidden") == false){
                        segurosHogar.classList.add("visually-hidden")
                    }
                }
                break
            case "SEGURO DE HOGAR":
                segurosHogar.classList.remove("visually-hidden")
                if (segurosMedicos.classList.contains("visually-hidden") == false){
                    segurosMedicos.classList.add("visually-hidden")
                }else{
                    if(segurosVida.classList.contains("visually-hidden") == false){
                        segurosVida.classList.add("visually-hidden")
                    }
                }
                break
            default:
                alert("No ha elegido un tipo de servicio")
        }
    }
    else{
        alert("Por favor, rellene todos los campos")
    }
}







