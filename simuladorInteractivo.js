const servicios = {
    sitioWeb : 59999,
    comunityManager : 11999,
    mantenimientoSitio : 3999,
    fotografia : 6999,
    asesorContable : 3999,
}

const combos = {
    combo1 : 66999,
    combo2 : 149999,
    combo3 : 152999,
    combo4 : 172999,
    combo5 : 339999,
}

let carrito = 0, acumulador = 0, cotizacion = 0, cotizacionServicio = 0, continuar = true;

iniciarSesion();
registrarse();



let tablaDeCliente = document.getElementById("tabla-clientes");
tablaDeCliente.innerHTML = `
                            <tr>
                                <th><p>Nombre</p></th>
                                <th><p>${cliente1.nombre}</p></th>
                            </tr>
                            <tr>
                                <th><p>Apellido</p></th>
                                <th><p>${cliente1.apellido}</p></th>
                            </tr>
                                <th><p>Teléfono</p></th>
                                <th><p>${cliente1.telefono}</p></th>
                            <tr>
                                <th><p>Documento</p></th>
                                <th><p>${cliente1.dni}</p></th>
                            </tr>`;

tablaDeCliente;