let cliente1, nuevoBoton;

class NuevoCliente {
    constructor(nombre, apellido, usuario, password, telefono, dni){
        this. nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.password = password;
        this.telefono = telefono;
        this.dni = dni;
    }
}

//Función destinada a registrar un nuevo usuario
function registrarse(){
    let registro = document.getElementById("registro");  
    registro.onclick = () =>{

        let formulario = document.createElement("form");
        formulario.innerHTML = `<label for="name">Nombre</label>
                                <input type="text" id="name" name="name" placeholder="Ingrese su nombre"><br>
                                <label for="surname">Apellido</label>
                                <input type="text" id="surname" name="surname" placeholder="Ingrese su Apellido"><br>
                                <label for="user">Usuario</label>
                                <input type="text" id="user" name="user" placeholder="Elija un Usuario"><br>
                                <label for="pass">Contraseña</label>
                                <input type="text" id="pass" name="pass" placeholder="Elija una Contraseña"><br>
                                <label for="telefono">Teléfono</label>
                                <input type="text" id="telefono" name="telefono" placeholder="Ej: 1143230543"><br>
                                <label for="dni">DNI</label>
                                <input type="text" id="dni" name="dni" placeholder="Ej. 38123903"><br>
                                <button>Envíar</button>`;
                                document.body.append(formulario);


/*        cliente1 = new NuevoCliente(prompt("Ingrese su nombre"), prompt("Ingrese su apellido"), prompt("Ingrese un usuario"), prompt("Elija una clave"), prompt("Ingrese su teléfono"), prompt("Ingrese su DNI"));*/
        console.log(cliente1);
/*        let nuevoUsuario = document.createElement("h2");
        nuevoUsuario.innerText = "Usuario creado correctamente";
        document.body.append(nuevoUsuario);*/
    }
}

//Función destinada a validar el inicio de sesión, o bloquear la cuenta en caso que se superen los 3 intentos de inicio

function iniciarSesion(){
    const inicioSesion = [];
    let intentos = 0, validacion = false;

    let iniciarSesion = document.getElementById("inicio-sesion");
    iniciarSesion.onclick = () =>{
        console.log("Sesion iniciada");

        while(intentos < 3){
            inicioSesion.push(prompt("Escriba su usuario"));
            console.log(inicioSesion[0]);
            inicioSesion.push(prompt("Escriba su Contraseña"));
            console.log(inicioSesion[1]);
            if((inicioSesion[0] == cliente1.usuario) && (inicioSesion[1] == cliente1.password)){
                intentos+=3;
                validacion = true;
            }else{
                intentos++;
                alert("Usuario o contraseña incorrectos. Le quedan " + (3 - intentos) + " intentos");
                inicioSesion.pop();
                inicioSesion.shift();
            }
        }
    
        if (validacion == true) {
            alert("Se ha logueado correctamente");
            alert(cliente1.nombre + ", Bienvenido a GM Soluciones Empresariales! Estamos para ayudarte a potenciar tu negocio! Convertimos a emprendedores en empresarios.");

            nuevoBoton = document.createElement("div");
            nuevoBoton.innerHTML = "<button id='cotizar'>Cotizar</button>";
            document.body.append(nuevoBoton);

            // Desde aquí hasta abajo, quiero trabajar en separar todo este proceso para que el inicio de sesión no quede estrictamente relacionado con la cotización

            let nuevaCotizacion = document.getElementById("cotizar");
            nuevaCotizacion.onclick = () =>{
                console.log("Cotizando");
                while(cotizacion != 1 && cotizacion != 2){

                    let nuevaCotizacion = document.getElementById("cotizar");
                    cotizar.onclick = () =>{
                        console.log("Cotizando");
                    }
                    cotizacion = parseInt(prompt(cliente1.nombre + ", vamos a armar tu cotización para comenzar cuanto antes a potenciar tu empresa! \n¿Querés cotizar un servicio en especial, o estás interesado en nuestros combos corporativos?\n Pulsa 1 para cotizar un servicio en particular, o 2 para ver nuestros combos"));
                
                    if(cotizacion == 1){
                
                        cotizacionServicio = prompt("Bien!! Estos son nuestros servicios:\n\n1 - Sitio Web convencional : $59.999,00.\n2 - Comunity Manager : $11.999,99 / mes.\n3 - Mantenimiento mensual Sitio web : $3.999,00.\n4 - Fotografía profesional : $6.999,99 / sesión de fotografía.\n5 - Asesoramiento contable : $3.999,00 / mes.\n\nPor favor, selecciona el servicio deseado.");
                        
                        while(continuar == true){
                
                            servicioParticular();
                            deseaContinuar();
                        }
                
                    } else if (cotizacion == 2){
                        nuevoCombo();
                    } else {
                        alert("Opciòn incorrecta ");
                    }
                } 
        }            
        } else{
            alert("Su usuario ha sido bloqueado");
        }
    }
}


//Función destinada a consultar, cotizar y acumular los servicios que el cliente desea adquirir de forma individual

function servicioParticular(){
    switch(cotizacionServicio){
        case "1":
            alert("Elegiste Sitio Web Convencional");
            carrito = servicios.sitioWeb + acumulador;
            acumulador = carrito;
            break;
     
        case "2":
            alert("Elegiste Comunity Manager");
            carrito = servicios.comunityManager + acumulador;
            acumulador = carrito;
            break;

        case "3":
            alert("Elegiste Mantenimiento sitio web");
            carrito = servicios.mantenimientoSitio + acumulador;
            acumulador = carrito;
            break;
         
        case "4":
            alert("Elegiste Sesiòn de fotografìa");
            carrito = servicios.fotografia + acumulador;
            acumulador = carrito;
            break;

        case "5":
            alert("Elegiste Asesoramiento contable");
            carrito = servicios.asesorContable + acumulador;
            acumulador = carrito;
            break;
         
            default:
                alert("Opciòn incorrecta");
                break;
    }
    
    let tablaCarrito = document.getElementById("tabla-productos");
    tablaCarrito.innerHTML =  `
                            <tr>
                                <th><p>Total Gastado</p></th>
                                <th><p>$${carrito},00</p></th>
                            </tr>`;
}

//Función destinada a cotizar un combo seleccionado por el usuario

function nuevoCombo(){
    
    cotizacionServicio = prompt("Bien!! Estos son nuestros combos corporativos :\n 1 - Creación de Sitio Web + mantenimiento por 6 meses = $66.999,00.\n2 - Creación de Sitio Web + mantenimiento por 6 meses + Comunity manager = $149.999,00.\n3 - Creación de Sitio Web + mantenimiento por 6 meses + Comunity manager + fotografía = $152.999,00\n4 - Creación de Sitio Web + mantenimiento por 6 meses + Comunity manager + fotografía + asesoramiento contable = $172.999,00.\n5 - Creación de Sitio web + mantenimiento por 1 año + Comunity manager + fotografía + asesoramiento contable = $339.999,00.\n\nPor favor, selecciona el servicio deseado.");

    switch(cotizacionServicio){
        case "1":
            alert("Elegiste combo 1");
            carrito = combos.combo1;
            break;
     
        case "2":
            alert("Elegiste combo 2");
            carrito = combos.combo2;
            break;
        case "3":
            alert("Elegiste combo 3");
            carrito = combos.combo3;
            break;
         
        case "4":
            alert("Elegiste combo 4");
            carrito = combos.combo4;
            break;
        case "5":
            alert("Elegiste combo 5");
            carrito = combos.combo5;
            break;
         
            default:
                alert("Opciòn incorrecta");
                break;
    }

    alert("Total gastado: $" + carrito + " pesos.");
}

//Función destinada a consultar al usuario si quiere seguir comprando

function deseaContinuar(){
    continuar = prompt("Desea continuar? Pulse 1 para continuar, 2 para finalizar");
    if(continuar == 1){
        continuar == true;
        cotizacionServicio = prompt("Vuelva a elegir una opciòn\n\n 1 - Sitio Web convencional : $59.999,00.\n2 - Comunity Manager : $11.999,99 / mes.\n3 - Mantenimiento mensual Sitio web : $3.999,00.\n4 - Fotografía profesional : $6.999,99 / sesión de fotografía.\n5 - Asesoramiento contable : $3.999,00 / mes.");
    } else{
        continuar == false;
        let despedida = document.getElementById("despedida");
        despedida.className = "despedida";
        despedida.innerHTML = "<h1>Muchas gracias por tu visita, " + cliente1.nombre + "!!Te esperamos pronto para continuar creciendo juntos :).</h1>";
    }
}
