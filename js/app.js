
function ingreso_nuevo_usuario(){
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

        const usuario_ingresado = new Usuario(nombre, apellido, edad, e_mail, pais)
        lista_usuarios.push(usuario_ingresado)
        console.log(lista_usuarios)
    } 
    else{
        alert("De acuerdo, que tenga buen día.")
    }
}

function seguros(){
    let tipo
    do{
        tipo = prompt("¿Qué tipo de seguro está buscando?\n1 - Seguro de Hogar\n2 - Seguro de Vida\n3 - Seguro médico\n4 - Salir")
        tipo = parseInt(tipo)
        switch (tipo){
            case 1:
                let opcion = prompt("En este campo, le haremos preguntas sobre cuanto valor tienen sus pertenencias, si esta inseguro de esto, asesorese en manos de expertos en el tema.\n¿Desea volver? (YES/NO)")
                if(opcion == 'YES' || opcion == 'yes'){
                    seguros()
                }
                else{
                    if(opcion == 'NO' || opcion == 'no'){
                        // Quiero que NOMBR NO EXISTA MAS, ya que escribimos nuestro nombre al inicio del simulador.
                        nombr = prompt("Ingrese su nombre: ")
                        console.log("El nombre de la persona que quiere un seguro de hogar es"+" "+nombr) 
                        alert("Le indicaremos a continuación los pasos a realizar.\n1 - Hacer un inventario de las cosas de la casa. (Mobiliario, electrodomesticos y dispositivos, enseres y artículos decorativos, joyas y objetos de valor).")
                        let valor_pertenencias = prompt("2 - Calcular el valor de todas sus pertenencias ya antes mencionadas en el paso 1. ¿De cuanto estamos hablando? Por favor, ingrese la suma total, sin tener en cuenta las joyas y objetos de valor especial.")
                        valor_pertenencias = parseFloat(valor_pertenencias)
                        console.log("El valor total de sus pertenencias es de"+" "+valor_pertenencias)
                        alert("3 - Valore sus joyas y objetos de valor especial, es recomendable hacer esto ya que varias aseguradoras valoras estos objetos de forma diferente a precios distintos. Todo objeto de valor o joya debe superar los 2000 euros.")
                        // Quiero que CORREO NO EXISTA MAS, ya que escribimos nuestro correo al inicio del simulador.
                        correo = prompt("Ingrese su mail para enviarle los datos y pasos a continuación: ")
                        console.log("Su correo es:"+" "+correo)
                        alert("¡Correo enviado! Gracias por elegirnos.")
                    }
                    else{
                        alert("Opción invalida. Por favor, reintente el simulador.")
                    }
                }
                break
            case 2:
                let capital = prompt("1 - Ingrese la capital a recibir: ")
                capital = parseFloat(capital)
                console.log("La capital a recibir es de"+" "+capital)
                //Quiero que "nombre" tampoco exista aca, ya que escribimos el nombre al inicio del simulador.
                nombre = prompt("3 - Ingrese su nombre completo, por favor: ")
                console.log("La persona que quiere adquirir el seguro de vida se llama"+" "+nombre)
                // Lo mismo acá con mail.
                mail = prompt("4 - Ya calculamos su seguro de vida, por favor ingrese su mail a continuación para enviarle los calculos ya realizados: ")
                console.log("Su mail es:"+" "+mail)
                alert("¡Gracias!\nQue tenga buen día, adios.")
                break
            case 3:
                let poliza = prompt("¿Ya tiene una poliza de salud? (SI/NO): ")
                if(poliza == 'SI' || poliza == 'si' || poliza == 'NO' || poliza == 'no'){
                    console.log("Esta persona"+" "+poliza+" "+"tiene una poliza de salud.")
                    // Aqui no es necesario.
                    let primer_nombre_asegurado = prompt("Ingrese su nombre: ")
                    console.log("El nombre del primer asegurado es"+" "+primer_nombre_asegurado)
                    let primer_asegurado = prompt("Por favor, ingrese su fecha de nacimiento sin espaciados ni guiones (DD/MM/AA): ")
                    primer_asegurado = parseInt(primer_asegurado)
                    console.log("La fecha de nacimiento de"+" "+primer_nombre_asegurado+" "+"es"+" "+primer_asegurado)
                    sexo = prompt("Sexo femenino o másculino (F/M): ")
                    if (sexo == 'F' || sexo == 'M'){
                        console.log("El género de esta persona es"+" "+sexo)
                        let varios_asegurados = prompt("¿Desea agregar a alguien más? (SI/NO)")
                        if (varios_asegurados == 'NO'){
                            email = prompt("Ingrese su mail a continuación para enviarle los datos: ")
                            console.log("El mail a enviar todos los datos es:"+" "+email)
                            alert("Le enviamos un mail con los siguientes pasos a realizar, verifique si lo ha recibido y notifiquenos. ¡Que tenga buen día!")
                        }
                        else{
                            if(varios_asegurados == 'SI' || varios_asegurados == 'si'){
                                while(varios_asegurados != 'NO'){
                                    console.log(primer_nombre_asegurado+" "+"decidió agregar a alguien más.")
                                    let nombre_asegurado = prompt("Ingrese el nombre del asegurado: ")
                                    console.log("El nombre del siguiente asegurado es"+" "+nombre_asegurado)
                                    let segundo_asegurado = prompt("Por favor, ingrese la fecha de nacimiento del asegurado (DD/MM/AA): ")
                                    segundo_asegurado = parseInt(segundo_asegurado)
                                    console.log("Su fecha de nacimiento es"+" "+segundo_asegurado)
                                    sexo = prompt("Sexo femenino o másculino (F/M): ")
                                    console.log("Y su género es"+" "+sexo)
                                    varios_asegurados = prompt("¿Desea agregar a alguien más? (SI/NO)")
                                }
                                email = prompt("Ingrese su mail a continuación para enviarle los datos: ")
                                console.log("El email a enviar todos los datos es:"+" "+email)
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

ingreso_nuevo_usuario();
seguros();





