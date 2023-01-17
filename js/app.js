function ingreso_usuario(){
    const lista_usuarios =[]

    function Usuario(nombre, apellido, edad, email, pais_origen){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.pais_origen = pais_origen;
    }

    let bienvenida = prompt("¡Bienvenido a tu lugar de seguros!\nTe haremos unas preguntas para determinar que tipos de seguros abarcamos y algunos otros datos más. ¿Te interesa? SI/NO")
    if (bienvenida == 'SI' || bienvenida == 'si'){
        let nombre = prompt("Ingrese su nombre: ")
        let apellido = prompt("Ingrese su apellido: ")
        let edad = parseInt(prompt("Ingrese su edad actual: "))
        let e_mail = prompt("Ingrese su dirección de correo electrónico: ")
        let pais = prompt("Ingrese su país de origen: ")

        let usuario_ingresado = new Usuario(nombre, apellido, edad, e_mail, pais)
        lista_usuarios.push(usuario_ingresado)
        console.log(lista_usuarios)
        return lista_usuarios;
    } 
    else{
        if (bienvenida == 'NO' || bienvenida == 'no'){
            alert("Vuelva a intentarlo.")
            ingreso_usuario();
        }
        else{
            alert("Opción no valida.")
            ingreso_usuario();
        }
    }
}

let ingreso = ingreso_usuario()

function chequeoMail(lista_usuario){
    let y
    let indice = 0
    let mail_asegurado = prompt("Ingrese su mail nuevamente: ")
    for(y = 0; y < lista_usuario.length; y++){
        if (lista_usuario[y].email.includes(mail_asegurado) == true ){
            indice = lista_usuario[y].email.indexOf(mail_asegurado)
            return indice
        }
        else{
            alert("Este mail no se encuentra registrado.")
            seguros(lista_usuario)
        }
    }
}

function seguros(lista_usuario){
    const IVA = 1.21
    let tipo
    do{
        tipo = prompt("¿Qué tipo de seguro está buscando?\n1 - Seguro de Hogar\n2 - Seguro de Vida\n3 - Seguro médico\n4 - Salir")
        tipo = parseInt(tipo)
        switch (tipo){
            case 1:
                let indice_user = chequeoMail(lista_usuario)
                let opcion = prompt("En este campo, le haremos preguntas sobre cuanto valor tienen sus pertenencias, si esta inseguro de esto, asesorese en manos de expertos en el tema.\n¿Desea volver? (YES/NO)")
                if(opcion == 'YES' || opcion == 'yes'){
                    seguros(lista_usuario)
                }
                else{
                    if(opcion == 'NO' || opcion == 'no'){
                            console.log("El nombre de la persona que quiere un seguro de hogar es "+ lista_usuario[indice_user].nombre) 
                        alert("Le indicaremos a continuación los pasos a realizar.\n1 - Hacer un inventario de las cosas de la casa. (Mobiliario, electrodomesticos y dispositivos, enseres y artículos decorativos, joyas y objetos de valor).")
                        let valor_pertenencias = prompt("2 - Calcular el valor de todas sus pertenencias ya antes mencionadas en el paso 1. ¿De cuanto estamos hablando? Por favor, ingrese la suma total, sin tener en cuenta las joyas y objetos de valor especial.")
                        valor_pertenencias = parseFloat(valor_pertenencias)
                        console.log("El valor total de sus pertenencias es de"+" "+valor_pertenencias)
                        alert("3 - Valore sus joyas y objetos de valor especial, es recomendable hacer esto ya que varias aseguradoras valoras estos objetos de forma diferente a precios distintos. Todo objeto de valor o joya debe superar los 2000 euros.")
                        let valorJoyas = prompt("4 - Entonces, ¿Cuanto sería el total teniendo en cuenta las joyas, y objetos de valor especial?")
                        console.log("El valor total de su joyería y demás objetos valiosos es de "+valorJoyas)
                        let totalPertenencias = (valor_pertenencias + valorJoyas) * IVA / 10000
                        let acuerdo = prompt("Su total sería de "+ totalPertenencias+". ¿Esta de acuerdo? (YES/NO): ")
                        if (acuerdo == 'YES' || acuerdo == 'yes'){
                            console.log("Su correo es: "+ lista_usuario[indice_user].email)
                            alert("¡Correo enviado!\nRevise su mail para revisar que todo este en orden, y asi luego seguir los pasos a continuación. Gracias por elegirnos, hasta pronto.")
                            console.log("Se le ha enviado un mail a "+ lista_usuario[indice_user].nombre+" habiendo aceptado el acuerdo.")
                        }
                        else{ 
                            if (acuerdo =='NO' || acuerdo == 'no'){
                            alert("De acuerdo. Si le interesa, ¡puede volver a comunicarse con nosotros!")
                            console.log(lista_usuario[indice_user].nombre+" no estuvo de acuerdo con el precio.")
                            }
                            else{
                                alert("Opción no valida, intente de nuevo.")
                            }
                        }
                    }
                    else{
                        alert("Opción invalida. Por favor, reintente el simulador.")
                    }
                }
                break
            case 2:
                let indice_usuario = chequeoMail(lista_usuario);
                let capital = prompt("1 - Ingrese la capital a recibir: ")
                capital = parseFloat(capital)
                console.log("La capital a recibir es de"+" "+capital)
                console.log("La persona que quiere adquirir el seguro de vida se llama "+lista_usuario[indice_usuario].nombre)
                let servicio_vida = capital * lista_usuario[indice_usuario].edad / 30
                let afirmacion = prompt("El valor de su seguro de vida total, contando la antiguedad y la tasa de mortalidad es: "+ servicio_vida+". ¿Está de acuerdo? (YES/NO)")
                if (afirmacion == 'YES' || afirmacion == 'yes'){
                    console.log("Su mail es: "+lista_usuario[indice_usuario].email)
                    alert("¡Gracias!\nLe enviaremos un mail con los datos confirmados. El mail podría llegar entre un periodo de 48hs. Que tenga buen día, adios.")
                }
                else{
                    if (afirmacion == 'no' || afirmacion == 'NO'){
                        console.log(lista_usuario[0].nombre+" ha negado el acuerdo.")
                    }
                }
                break
            case 3:
                let indi_user = chequeoMail(lista_usuario);
                let poliza = prompt("¿Ya tiene una poliza de salud? (SI/NO): ")
                if(poliza == 'SI' || poliza == 'si' || poliza == 'NO' || poliza == 'no'){
                    console.log(lista_usuario[indi_user].nombre+" "+poliza+" "+"tiene una poliza de salud.")
                    let primer_asegurado_fecha = prompt("Por favor, ingrese su fecha de nacimiento sin espaciados ni guiones (DD/MM/AA): ")
                    primer_asegurado = parseInt(primer_asegurado_fecha)
                    console.log("La fecha de nacimiento de"+" "+lista_usuario[indi_user].nombre+" "+"es"+" "+primer_asegurado_fecha)
                    sexo = prompt("Sexo femenino o másculino (F/M): ")
                    if (sexo == 'F' || sexo == 'M'){
                        console.log("El género de "+lista_usuario[indi_user].nombre+" es "+sexo)
                        let varios_asegurados = prompt("¿Desea agregar a alguien más? (SI/NO)")
                        if (varios_asegurados == 'NO' || varios_asegurados == 'no'){
                            console.log("El mail a enviar todos los datos es:"+" "+lista_usuario[indi_user].email)
                            alert("Le enviamos un mail con los siguientes pasos a realizar, verifique si lo ha recibido y notifiquenos. ¡Que tenga buen día!")
                        }
                        else{
                            if(varios_asegurados == 'SI' || varios_asegurados == 'si'){
                                while(varios_asegurados != 'NO'){
                                    console.log(lista_usuario[indi_user].nombre+" "+lista_usuario[indi_user].apellido+" decidió agregar a alguien más.")
                                    let nombre_asegurado = prompt("Ingrese el nombre del asegurado: ")
                                    console.log("El nombre del siguiente asegurado es"+" "+nombre_asegurado)
                                    let segundo_asegurado = prompt("Por favor, ingrese la fecha de nacimiento del asegurado (DD/MM/AA): ")
                                    segundo_asegurado = parseInt(segundo_asegurado)
                                    console.log("Su fecha de nacimiento es"+" "+segundo_asegurado)
                                    sexo = prompt("Sexo femenino o másculino (F/M): ")
                                    console.log("Y su género es"+" "+sexo)
                                    varios_asegurados = prompt("¿Desea agregar a alguien más? (SI/NO)")
                                }
                                console.log("El email a enviar todos los datos es: "+lista_usuario[indi_user].email)
                                alert("Le enviamos un mail con los siguientes pasos a realizar, verifique si lo ha recibido y notifiquenos. ¡Que tenga buen día!")
                            }
                            else{
                                alert("Opción invalida.")
                            }
                        }
                    }
                    else{
                        alert("Opción invalida.")
                    }
                }    
                else{
                    alert("Opción invalida.")
                }
                break
            case 4: 
                alert("¡Hasta la próxima!")
                break
            default:
                alert("Opción no valida.")
        }
    }while (tipo != 4)
}

seguros(ingreso);






