const tours = [
    {
        id: 01,
        nombre: "Casco histórico",
        dia: "martes",
        precio: 150,
        detalle: "en este paseo conocerás por la parte antigua de la ciudad y te asombrará"
    },
    {
        id: 02,
        nombre: "Casco histórico",
        dia: "viernes",
        precio: 150,
        detalle: "en este paseo conocerás por la parte antigua de la ciudad y te asombrará"
    },
    {
        id: 03,
        nombre: "Plazas",
        dia: "miércoles",
        precio: 100,
        detalle: "Conocerás la historia y la naturaleza de las plazas de la ciudad"
    },
    {
        id: 04,
        nombre: "Cementerio",
        dia: "domingos",
        precio: 100,
        detalle: "hay un mundo de misterio y simbolismo que espera a ser descubierto"
    }

]
let miTour =  ""
let details = ""
let total = 0
let ticket = 0
let opciones = ""

function buscarTour(nameTour){
    let tour = tours.filter(item=>{
        return item.nombre == nameTour
    })
    let dias =[]
    for (const days of tour) {
        dias.push(days.dia)
    }
    return dias
}

function buscarDetalle(nombre){
    let salida = tours.find(item=>item.nombre ===nombre)
    return salida
}

do {
   opciones = prompt("Tenemos 3 salidas para vos: Cementerio, Casco histórico y Plazas. Indicá el número de opción deseada")
   
   switch (opciones) {
    
    case "Cementerio":
       seleccion(details)
        break;
    case "Casco histórico" :
        seleccion(details)
        break;    
    case "Plazas":
        seleccion(details)
        break;
   
    default:
        alert ("la opción seleccionada no es correcta")
        condition = true
        break;
   } 
   

} while (condition);

if (total > 0) {
    alert ("Gracias por su compra el total de su compra es" + total)
    
}else{
    alert ("Gracias por visitarnos")
}

function sumarTotal(precio){
   ticket = ticket + precio
    return ticket
    
}


function confirmarCompra(compra) {

    if (compra == false){
        total = sumarTotal(details.precio)
        alert ("Su reserva fué hecha por un total de" + total)
    }
    
}

function seleccion(details){
    miTour = buscarTour(opciones)
        details = buscarDetalle(opciones)
        alert ("El tour se realiza los días"+ " " + miTour.join("y ") + " y te contamos que" + " " + details.detalle)
        condition = confirm('Querés volver al menú de salidas? O querés reservar esta?')
        confirmarCompra(condition)
        condition = confirm ("Desea volver al menú o desea finalizar compra?")

}

/*
 
}*/

//let pedirId = parseInt(prompt("ingrese id"))
//let details = buscarDetalle(pedirId)


//let cosa = buscarTour(nombreTour)
//alert ("El tour se realiza los días"+ " " + cosa.join(", "))