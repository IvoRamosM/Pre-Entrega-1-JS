
let mensajeSector= ""
let continuar = true
const campoVip = 15000
const campoGeneral = 8000
const plateaPreferencial = 10000
const plateaBaja = 9000
const plateaAlta = 5000

const mensajeInicial = "Ingresa el sector que desea comprar \n" +
                       "1) Campo Vip \n" + 
                       "2) Campo General \n" +
                       "3) Platea Preferencial \n" +
                       "4) Platea Baja \n" +
                       "5) Platea Alta"

function iniciarCompra() {
    let eleccion = prompt(mensajeInicial)
    
    if (eleccion !== "1" && eleccion !== "2" && eleccion !== "3" && eleccion !== "4" && eleccion !== "5") {
        console.error("Ingresa un sector válido, por favor.")
        return 
    }

    switch(eleccion) {
        case "1":
            mensajeSector = "Campo Vip vale $" + campoVip
            break
        case "2":
            mensajeSector = "Campo General vale $" + campoGeneral
            break
        case "3":
            mensajeSector = "Platea Preferencial vale $" + plateaPreferencial
            break
        case "4":
            mensajeSector = "Platea Baja vale $" + plateaBaja
            break
        case "5":
            mensajeSector = "Platea Alta vale $" + plateaAlta
            break
        default:
            console.error("Hubo un error no esperado al elegir tu sector.")
            return 
    }
    alert(mensajeSector)
}

function consultarValores() {
    while(continuar) {
        iniciarCompra()
        continuar = confirm("¿Deseas consultar por otra sector?")
    }
}