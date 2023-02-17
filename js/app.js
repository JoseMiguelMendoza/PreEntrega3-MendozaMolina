fetch("./js/seguros.json")
.then((response) => response.json())
.then((data) => {
    localStorage.setItem("data",JSON.stringify(data))
})

let json = JSON.parse(localStorage.getItem("data"))

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
let selectTiposDeSeguros = document.querySelector('#floatingSelect')
let inputs = document.querySelectorAll('.inputs')

// DOM - SEGURO DE VIDA
let segurosVida = document.querySelector('#segurosVida')
let btnContinueVida = document.querySelector('#btnContinueVida')
let inputCapital = document.querySelector('#inputCapital')
let inputAnio = document.querySelector('#inputAnio')
let textSeguroVida = document.querySelector('#textSeguroVida')
let btnSaveChangesVida = document.querySelector('#btnSaveChangesVida')
// AGREGAdos
let casos = document.querySelector('#casos')
let contenedorCasosSeleccionados = document.querySelector('#contenedorCasosSeleccionados')


// DOM - SEGURO DE HOGAR
let segurosHogar = document.querySelector('#segurosHogar')
let btnContinueHogar = document.querySelector('#btnContinueHogar')
let inputPertenencias = document.querySelector('#inputPertenencias')
let inputJoyas = document.querySelector('#inputJoyas')
let textSeguroHogar = document.querySelector('#textSeguroHogar')
let btnSaveChangesHogar = document.querySelector('#btnSaveChangesHogar')
let opcionesHogar = document.querySelector('#opcionesHogar')

// DOM - SEGURO MÉDICO
let segurosMedicos = document.querySelector('#segurosMedicos')
let btnContinueMedico = document.querySelector('#btnContinueMedico')
let inputAnioNacimiento = document.querySelector('#inputAnioNacimiento')
let inputObraSocial = document.querySelector('#inputObraSocial')
let inputDireccion = document.querySelector('#inputDireccion')
let inputDni = document.querySelector('#inputDni')
let textSeguroMedico = document.querySelector('#textSeguroMedico')
let btnSaveChangesMedicos = document.querySelector('#btnSaveChangesMedicos')
let opcionesMedico = document.querySelector('#opcionesMedico')

// EVENTS

selectTiposDeSeguros.addEventListener("click", SERVICIOS.forEach((servicio) => {
    selectTiposDeSeguros.innerHTML += `<option value="${servicio}">${servicio}</option>`
}))

opcionesHogar.addEventListener("click", json[1].clasificaciones.forEach((metodo) => {
    opcionesHogar.innerHTML += `<option value="${metodo.tipo}">${metodo.tipo} - ${metodo.precio}</option>`
}))

opcionesMedico.addEventListener("click", json[0].clasificaciones.forEach((eleccion) => {
    opcionesMedico.innerHTML += `<option value="${eleccion.tipo}">${eleccion.tipo} - ${eleccion.precio}</option>`
}))

casos.addEventListener("click", json[2].situaciones.forEach((caso) => {
    casos.innerHTML += `<option value="${caso.situacion}">${caso.situacion}</option>`
}))


btnAvanzar.addEventListener("click", infoCompletada)

casos.addEventListener("click", selectorCasosVida)
btnContinueVida.addEventListener("click", vidaModal)
btnSaveChangesVida.addEventListener("click", guardarCambiosVida)

btnContinueHogar.addEventListener("click",hogarModal)
btnSaveChangesHogar.addEventListener("click",guardarCambiosHogar)

btnContinueMedico.addEventListener("click",medicoModal)
btnSaveChangesMedicos.addEventListener("click", guardarCambiosMedicos)


// FUNCTIONS

function selectorCasosVida(){
        let json = JSON.parse(localStorage.getItem("data"))
        contenedorCasosSeleccionados.innerHTML = ''
        switch(casos.value){
            case json[2].situaciones[0].situacion: 
                contenedorCasosSeleccionados.innerHTML += `
                    <div class="card mb-3" style="max-width: 100%;">
                        <div class="row g-0">
                            <div class="col-md-2">
                            <img src="${json[2].situaciones[0].imagenCaso}" class="ms-1 iconCasosVida img-fluid rounded-start" alt="Imagen de accidente automovilistico.">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <p class="card-text">${json[2].situaciones[0].situacion}</p>
                                </div>
                            </div>
                            <div class="col-md-2 text-center">
                                <button type="button" id="erase" class="mt-2 btn btn-primary btn-danger">Deshacer</button>
                            </div>
                        </div>
                    </div>
                `
                casos.setAttribute("aria-label","Disabled")
                casos.setAttribute("disabled",null)
                break
            case json[2].situaciones[1].situacion: 
                contenedorCasosSeleccionados.innerHTML += `
                    <div class="card mb-3" style="max-width: 100%;">
                        <div class="row g-0">
                            <div class="col-md-2">
                            <img src="${json[2].situaciones[1].imagenCaso}" class="ms-1 p-2 iconCasosVida img-fluid rounded-start" alt="Imagen de enfermedad.">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <p class="card-text">${json[2].situaciones[1].situacion}</p>
                                </div>
                            </div>
                            <div class="col-md-2 text-center">
                                <button type="button" id="erase" class="mt-2 btn btn-primary btn-danger">Deshacer</button>
                            </div>
                        </div>
                    </div>
                `
                casos.setAttribute("aria-label","Disabled")
                casos.setAttribute("disabled",null)
                break
            case json[2].situaciones[2].situacion: 
                contenedorCasosSeleccionados.innerHTML += `
                    <div class="card mb-3" style="max-width: 100%;">
                        <div class="row g-0">
                            <div class="col-md-2">
                            <img src="${json[2].situaciones[2].imagenCaso}" class="ms-1 p-2 iconCasosVida img-fluid rounded-start" alt="Imagen de contacto con sustancias toxicas.">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <p class="card-text">${json[2].situaciones[2].situacion}</p>
                                </div>
                            </div>
                            <div class="col-md-2 text-center">
                                <button type="button" id="erase" class="mt-2 btn btn-primary btn-danger">Deshacer</button>
                            </div>
                        </div>
                    </div>
                `
                casos.setAttribute("aria-label","Disabled")
                casos.setAttribute("disabled",null)
                break
            case json[2].situaciones[3].situacion: 
                contenedorCasosSeleccionados.innerHTML += `
                    <div class="card mb-3" style="max-width: 100%;">
                        <div class="row g-0">
                            <div class="col-md-2">
                            <img src="${json[2].situaciones[3].imagenCaso}" class="ms-2 p-1 iconCasosVida img-fluid rounded-start" alt="Imagen de robo a mano armada.">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <p class="card-text">${json[2].situaciones[3].situacion}</p>
                                </div>
                            </div>
                            <div class="col-md-2 text-center">
                                <button type="button" id="erase" class="mt-2 btn btn-primary btn-danger">Deshacer</button>
                            </div>
                        </div>
                    </div>
                `
                casos.setAttribute("aria-label","Disabled")
                casos.setAttribute("disabled",null)
                break
            case json[2].situaciones[4].situacion: 
                contenedorCasosSeleccionados.innerHTML += `
                    <div class="card mb-3" style="max-width: 100%;">
                        <div class="row g-0">
                            <div class="col-md-2">
                            <img src="${json[2].situaciones[4].imagenCaso}" class="p-2 iconCasosVida img-fluid rounded-start" alt="Imagen de tumba.">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <p class="card-text">${json[2].situaciones[4].situacion}</p>
                                </div>
                            </div>
                            <div class="col-md-2 text-center">
                                <button type="button" id="erase" class="mt-2 btn btn-primary btn-danger">Deshacer</button>
                            </div>
                        </div>
                    </div>
                `
                casos.setAttribute("aria-label","Disabled")
                casos.setAttribute("disabled",null)
                break
        }
        let erase = document.querySelector("#erase")
        erase.addEventListener("click", () => {
            casos.value = 'Elegir el caso correspondiente'
            casos.removeAttribute("disabled")
            contenedorCasosSeleccionados.innerHTML = ''
        })
    }


function guardarCambiosHogar(){
    let json = JSON.parse(localStorage.getItem("data"))
    const IVA = 1.21
    let pertenencias = parseInt(inputPertenencias.value)
    let joyas = parseInt(inputJoyas.value)
    if (opcionesHogar.value == "Basico"){
        valorTarifa = json[1].clasificaciones[0].precio
    }
    else{
        if(opcionesHogar.value == "Avanzado"){
            console.log()
            valorTarifa = json[1].clasificaciones[1].precio
        }
        else{
            if(opcionesHogar.value == "Premium"){
                valorTarifa = json[1].clasificaciones[2].precio
            }
        }
    }
    let totalSeguroHogar = parseInt((((pertenencias + joyas) * IVA) / 0.9) + valorTarifa)
    let servicioElegido = "Seguro de Hogar"
    let tarifaElegida = opcionesHogar.value 
    let servicio = {servicio: servicioElegido, tarifa: tarifaElegida, cantidad_joyas: joyas, cantidad_pertenencias: pertenencias, total: totalSeguroHogar}
    USUARIOS.push(servicio)
    console.log(USUARIOS)
    const usuarioAGuardar = JSON.stringify(USUARIOS)
    localStorage.setItem("usuario/servicio",usuarioAGuardar)
    opcionesHogar.value = '---------------------'
    inputs.forEach((input) => input.value = '')
    selectTiposDeSeguros.value = 'Elegir el tipo de seguro'
    contenedorCasosSeleccionados.innerHTML = ''
    casos.value = 'Elegir el caso correspondiente'
    segurosHogar.classList.add("visually-hidden")
    Toastify({
        text: "Datos enviados satisfactoriamente.",       
        duration: 3000,
        }).showToast(); 
}

function guardarCambiosVida(){
    let cantidadCapital = inputCapital.value
    let datoAnio = inputAnio.value
    let servicioElegido = "SEGURO DE VIDA"
    let capital = parseInt(inputCapital.value)
    let edad = parseInt(inputEdad.value)
    let anio = parseInt(inputAnio.value)
    let totalSeguroVida = parseInt(((capital * edad) + anio) / 17) 
    let servicio = {servicio: servicioElegido, capital: cantidadCapital, año: datoAnio, total: totalSeguroVida}
    USUARIOS.push(servicio)
    console.log(USUARIOS)
    const usuarioAGuardar = JSON.stringify(USUARIOS)
    localStorage.setItem("usuario/servicio",usuarioAGuardar)
    inputs.forEach((input) => input.value = '')
    segurosVida.classList.add("visually-hidden")
    selectTiposDeSeguros.value = 'Elegir el tipo de seguro'
    contenedorCasosSeleccionados.innerHTML = ''
    casos.value = 'Elegir el caso correspondiente'
    Toastify({
        text: "Datos enviados satisfactoriamente.",       
        duration: 3000,
        }).showToast();
}

function guardarCambiosMedicos(){
    let json = JSON.parse(localStorage.getItem("data"))
    let obraSocial = inputObraSocial.value
    let dni = inputDni.value
    let direccion = inputDireccion.value
    let tarifaElegida = opcionesMedico.value
    let servicioElegido = "Seguro Médico"
    let valorTarifa
    if (opcionesMedico.value == "Basico"){
        valorTarifa = json[0].clasificaciones[0].precio
    }
    else{
        if(opcionesMedico.value == "Avanzado"){
            console.log()
            valorTarifa = json[0].clasificaciones[1].precio
        }
        else{
            if(opcionesMedico.value == "Premium"){
                valorTarifa = json[0].clasificaciones[2].precio
            }
        }
    }
    let servicio = {servicio: servicioElegido, tarifa: tarifaElegida, precioTarifa: valorTarifa, obraSocial: obraSocial, DNI: dni, Direccion: direccion}
    USUARIOS.push(servicio)
    console.log(USUARIOS)
    const usuarioAGuardar = JSON.stringify(USUARIOS)
    localStorage.setItem("usuario/servicio",usuarioAGuardar)
    inputs.forEach((input) => input.value = '')
    opcionesMedico.value = '---------------------'
    segurosMedicos.classList.add("visually-hidden")
    selectTiposDeSeguros.value = 'Elegir el tipo de seguro'
    contenedorCasosSeleccionados.innerHTML = ''
    casos.value = 'Elegir el caso correspondiente'
    Toastify({
        text: "Datos enviados satisfactoriamente.",       
        duration: 3000,
        }).showToast();
}

function medicoModal(){
    let json = JSON.parse(localStorage.getItem("data"))
    btnContinueMedico.innerText = "¿Seguro?"
    let valorTarifa
    if(inputAnioNacimiento.value != '' && inputDni.value != '' && inputDireccion.value != ''){
        if (inputObraSocial.value == ''){
            inputObraSocial.value == "No dispone"
        }

        if (opcionesMedico.value == "Basico"){
            valorTarifa = json[0].clasificaciones[0].precio
        }
        else{
            if(opcionesMedico.value == "Avanzado"){
                console.log()
                valorTarifa = json[0].clasificaciones[1].precio
            }
            else{
                if(opcionesMedico.value == "Premium"){
                    valorTarifa = json[0].clasificaciones[2].precio
                }
            }
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
        <p> La tarifa elegida fue ${opcionesMedico.value} con un precio de $${valorTarifa}</p>
        `        
        textSeguroMedico.innerHTML += '<p>¿Todos los datos son correctos?</p>' 

        btnContinueMedico.setAttribute("data-bs-toggle","modal")
        btnContinueMedico.setAttribute("data-bs-target","#exampleModalMedico")


    }
    else{
        Swal.fire({
            title: 'Datos incompletos',
            text: "Complete todos los datos, por favor.",
            icon: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'De acuerdo'
        })
    }
}


function hogarModal(){
    let json = JSON.parse(localStorage.getItem("data"))
    btnContinueHogar.innerText = "¿Seguro?"
    if(inputPertenencias.value != '' && inputJoyas.value != ''){
        const IVA = 1.21
        let valorTarifa
        let pertenencias = parseInt(inputPertenencias.value)
        let joyas = parseInt(inputJoyas.value)
        if (opcionesHogar.value == "Basico"){
            valorTarifa = json[1].clasificaciones[0].precio
        }
        else{
            if(opcionesHogar.value == "Avanzado"){
                console.log()
                valorTarifa = json[1].clasificaciones[1].precio
            }
            else{
                if(opcionesHogar.value == "Premium"){
                    valorTarifa = json[1].clasificaciones[2].precio
                }
            }
        }
        let totalSeguroHogar = parseInt((((pertenencias + joyas) * IVA) / 0.9) + valorTarifa)

        btnContinueHogar.setAttribute("data-bs-toggle","modal")
        btnContinueHogar.setAttribute("data-bs-target","#exampleModalHogar")

        textSeguroHogar.innerHTML = 
        `<p>Los datos a confirmar son los siguientes: </p>
        <ul>
            <li class="listStyle">Nombre: ${inputNombre.value}</li>
            <li class="listStyle">Apellido: ${inputApellido.value}</li>
            <li class="listStyle">Edad: ${inputEdad.value}</li>
            <li class="listStyle">Correo eléctronico: ${inputCorreo.value}</li>
            <li class="listStyle">Pais: ${inputPais.value}</li>
        </ul>
        <p> La tarifa elegida fue: ${opcionesHogar.value}</p>
        <p> El total sobre su seguro de hogar sería de $${totalSeguroHogar}</p>
        `        
        textSeguroHogar.innerHTML += '<p>¿Todos los datos son correctos?</p>'        
        return totalSeguroHogar
    }
    else{
        Swal.fire({
            title: 'Datos incompletos',
            text: "Complete todos los datos, por favor.",
            icon: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'De acuerdo'
        })
    }
}



function vidaModal(){
    btnContinueVida.innerText = "¿Seguro?"
    if(inputCapital.value != '' && inputAnio.value != ''){
            let capital = parseInt(inputCapital.value)
            let edad = parseInt(inputEdad.value)
            let anio = parseInt(inputAnio.value)
            let totalSeguroVida = parseInt(((capital * edad) + anio) / 17)
            
            btnContinueVida.setAttribute("data-bs-toggle","modal")
            btnContinueVida.setAttribute("data-bs-target","#exampleModalVida")

            textSeguroVida.innerHTML = 
            `<p>Los datos a confirmar son los siguientes: </p>
            <ul>
                <li class="listStyle">Nombre: ${inputNombre.value}</li>
                <li class="listStyle">Apellido: ${inputApellido.value}</li>
                <li class="listStyle">Edad: ${inputEdad.value}</li>
                <li class="listStyle">Correo eléctronico: ${inputCorreo.value}</li>
                <li class="listStyle">Pais: ${inputPais.value}</li>
            </ul>
            <p> El caso a asesorar es: ${casos.value}</p>
            <p> El total sobre su seguro de vida sería de $${totalSeguroVida}</p>
            `        
            textSeguroVida.innerHTML += '<p>¿Todos los datos son correctos?</p>'
            return totalSeguroVida
    }
    else{
        Swal.fire({
            title: 'Datos incompletos',
            text: "Rellene todos los campos, por favor.",
            icon: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'De acuerdo'
        })
    }
}

function infoCompletada(){
    let json = JSON.parse(localStorage.getItem("data"))
    if(inputNombre.value != ''  && inputApellido.value != '' && inputEdad.value != '' && inputCorreo.value != '' && inputPais.value != '' && selectTiposDeSeguros.value != null){
        let usuarioIngresado = new Usuario(inputNombre.value, inputApellido.value, inputEdad.value, inputCorreo.value, inputPais.value)
        USUARIOS.push(usuarioIngresado)
        switch(selectTiposDeSeguros.value){
            case `${json[2].seguro}`:
                segurosVida.classList.remove("visually-hidden")
                if (segurosMedicos.classList.contains("visually-hidden") == false){
                    segurosMedicos.classList.add("visually-hidden")
                }else{
                    if(segurosHogar.classList.contains("visually-hidden") == false){
                        segurosHogar.classList.add("visually-hidden")
                    }
                }
                break
            case `${json[0].seguro}`:
                segurosMedicos.classList.remove("visually-hidden")
                if (segurosVida.classList.contains("visually-hidden") == false){
                    segurosVida.classList.add("visually-hidden")
                }else{
                    if(segurosHogar.classList.contains("visually-hidden") == false){
                        segurosHogar.classList.add("visually-hidden")
                    }
                }
                break
            case `${json[1].seguro}`:
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
                Swal.fire({
                    title: 'Seguro no especificado',
                    text: "Debe elegir un tipo de seguro",
                    icon: 'warning',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'De acuerdo'
                })
        }

    }
    else{
        Swal.fire({
            title: 'Datos incompletos',
            text: "Rellene todos los campos, por favor.",
            icon: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'De acuerdo'
        })
    }
}






