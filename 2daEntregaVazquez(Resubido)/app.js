
/*let bienvenido = "Bienvenido"

let salir = "salir"
let montoActual = 150
const carritoDeCompras = []
let totalAPagar = 0.00

let despedirse = "Gracias por su compra :)"
let nombreP = prompt("Escriba su nombre")
let apellidoP = prompt("Escriba su apellido")


let nombreUsuario = prompt("Ingresa un nombre de usuario")

let contraseñaUsuario = prompt("Ingresa una contraseña")

let ingresoUsuarioCompleto = ("Ingrese su usuario completo")

while()



*/




let montoDisp = 150
let juegosCont = document.createElement("div")
let cont = document.querySelector("h2")
const saludosHTML = document.querySelector("h2").textContent =``
const formulario = document.querySelector("form")
const escribirNombre = document.querySelector("#Nombre")
let graciasPorComprar = document.createElement("h4")
const comprarJuego = document.querySelector("#NombreJuego")
let comprando = document.createElement("h3")


class Juegos
{
     constructor  (nombreJuego, precioJuego)
      {
           this.nombreJuego = nombreJuego
           this.precioJuego = precioJuego
     }
    }


const juegoN1 = new Juegos("Cyberpunk 2077", 24.99)
const juegoN2 = new Juegos("Assasins Creed Valhalla", 29.99)
const juegoN3 = new Juegos("God Of War 4", 9.99)
const juegoN4 = new Juegos("Bloodborne", 9.99)
const juegoN5 = new Juegos("Metro Exodus", 14.99)    

const juegoN6 = new Juegos("Dead By Daylight", 29.99)
const juegoN7 = new Juegos("Left 4 Dead 2", 4.99)
const juegoN8 = new Juegos("Resident Evil 4", 9.99)
const juegoN9 = new Juegos("Amnesia The Dark Descent", 7.99)
const juegoN10 = new Juegos("Silent Hill P.T", 59.99)

const juegosOption= [juegoN1, juegoN2, juegoN3, juegoN4, juegoN5, juegoN6, juegoN7, juegoN8, juegoN9, juegoN10]
formulario.addEventListener("submit", usuarioHTML)

const carritoPusheo = []



function menuDeJuegos(){

  
    let $botonjuegos = document.createElement("button")
    let menuJuegos = document.createElement("select")
    let $terminarCompra = document.createElement("button")
    
    

document.body.appendChild($botonjuegos)
document.body.appendChild(menuJuegos)
document.body.appendChild($terminarCompra)

$terminarCompra.innerHTML= `terminar compra`
$botonjuegos.innerHTML = `aceptar`
menuJuegos.id = "MenuJuegos"
$botonjuegos.id = "BotonJuegos"
$terminarCompra.id = "BotonTerminarCompra"
menuJuegos.innerHTML = `<option>${juegosOption[0].nombreJuego}</option>
<option>${juegosOption[1].nombreJuego}</option>
<option>${juegosOption[2].nombreJuego}</option>
<option>${juegosOption[3].nombreJuego}</option>
<option>${juegosOption[4].nombreJuego}</option>
<option>${juegosOption[5].nombreJuego}</option>
<option>${juegosOption[6].nombreJuego}</option>
<option>${juegosOption[7].nombreJuego}</option>
<option>${juegosOption[8].nombreJuego}</option>
<option>${juegosOption[9].nombreJuego}</option>`


$botonjuegos.addEventListener("click", function(){
carritoPusheo.push(menuJuegos.value)
switch (menuJuegos.value) {
    case "Cyberpunk 2077":
        montoDisp = montoDisp - juegoN1.precioJuego
        break;
        case "Assasins Creed Valhalla":
            montoDisp = montoDisp - juegoN2.precioJuego
            break
        case "God Of War 4":
            montoDisp = montoDisp - juegoN3.precioJuego
            break
        case "Bloodborne":
            montoDisp = montoDisp - juegoN4.precioJuego
            break
        case "Metro Exodus":
            montoDisp = montoDisp - juegoN5.precioJuego
            break
        case "Dead By Daylight":
            montoDisp = montoDisp - juegoN6.precioJuego
            break
        case "Left 4 Dead 2":
            montoDisp = montoDisp - juegoN7.precioJuego
            break
        case "Resident Evil 4":
            montoDisp = montoDisp - juegoN8.precioJuego
            break
        case "Amnesia The Dark Descent":
            montoDisp = montoDisp - juegoN9.precioJuego
            break
        case "Silent Hill P.T":
            montoDisp = montoDisp - juegoN10.precioJuego
            break
    default:
        break;   
}
$terminarCompra.addEventListener("click", function(){

    if(montoDisp > 1){
    graciasPorComprar.innerHTML= `<h2>Gracias por elegirnos ${escribirNombre.value} :)
    tu compra: ${seleccionCarrito}
    Monto actual: ${montoDisp}$</h2>`
    document.body.appendChild(graciasPorComprar)
    console.log(`${carritoPusheo} ${montoDisp}`)
    }
    else{
        let sinPlata = document.createElement("div")
        sinPlata.innerHTML = "<h3>Error, no queda mas dinero en tu tarjeta</h3>"
        document.body.appendChild(sinPlata)
    }
})

comprarJueguitos()



console.log(carritoPusheo)
localStorage.setItem("juegos", carritoPusheo)
const seleccionCarrito = localStorage.getItem("juegos")
console.log(seleccionCarrito)



},)

}



function usuarioHTML(usser){


usser.preventDefault()
cont.innerHTML=`<h2>Bienvenido ${escribirNombre.value}</h2>`
document.body.appendChild(cont)
menuDeJuegos()

    juegosCont.innerHTML= `<h2>Selecciona el juego que desea</h2>
<p>juego 1: ${juegosOption[0].nombreJuego} precio: ${juegosOption[0].precioJuego} USD$</p>
juego 2: ${juegosOption[1].nombreJuego} precio: ${juegosOption[1].precioJuego} USD$</p>
juego 3: ${juegosOption[2].nombreJuego} precio: ${juegosOption[2].precioJuego} USD$</p>
juego 4: ${juegosOption[3].nombreJuego} precio: ${juegosOption[3].precioJuego} USD$</p>
juego 5: ${juegosOption[4].nombreJuego} precio: ${juegosOption[4].precioJuego} USD$</p>
juego 6: ${juegosOption[5].nombreJuego} precio: ${juegosOption[5].precioJuego} USD$</p>
juego 7: ${juegosOption[6].nombreJuego} precio: ${juegosOption[6].precioJuego} USD$</p>
juego 8: ${juegosOption[7].nombreJuego} precio: ${juegosOption[7].precioJuego} USD$</p>
juego 9: ${juegosOption[8].nombreJuego} precio: ${juegosOption[8].precioJuego} USD$</p>
juego 10: ${juegosOption[9].nombreJuego} precio: ${juegosOption[9].precioJuego} USD$</p>
<h2>Monto actual: ${montoDisp} USD$</h2>
`
document.body.appendChild(juegosCont)


    
}
function comprarJueguitos(){

 
    comprando.innerHTML = `<h3>en carrito: ${carritoPusheo.length}</h3>`
    document.body.appendChild(comprando)

}
    


/*let titulo = document.querySelector("h1")

titulo.innerHTML = "<h1>Coderhouse Games</h1>"
document.body.appendChild(titulo)

const mensajesUser = [despedirse, nombreP, apellidoP]


const saludosHTML = document.querySelector("h2").textContent =``


class Juegos
{
     constructor  (nombreJuego, precioJuego)
      {
           this.nombreJuego = nombreJuego
           this.precioJuego = precioJuego
     }
    }

const juegoN1 = new Juegos("Cyberpunk 2077", 24.99)
const juegoN2 = new Juegos("Assasins Creed Valhala", 29.99)
const juegoN3 = new Juegos("God Of War 4", 9.99)
const juegoN4 = new Juegos("Bloodborne", 9.99)
const juegoN5 = new Juegos("Metro Exodus", 14.99)    

const juegoN6 = new Juegos("Dead By Daylight", 29.99)
const juegoN7 = new Juegos("Left 4 Dead 2", 4.99)
const juegoN8 = new Juegos("Resident Evil 4", 9.99)
const juegoN9 = new Juegos("Amnesia The Dark Descent", 7.99)
const juegoN10 = new Juegos("Silent Hill P.T", 59.99)

const juegosCategoria1 = [juegoN1, juegoN2, juegoN3, juegoN4, juegoN5, juegoN6, juegoN7, juegoN8, juegoN9, juegoN10]

function tomarCompra(){

    carritoDeCompras.forEach((nombres) => {

        alert(`Total: ${totalAPagar} USD$

    Juegos: ${nombres.nombreJuego} 
    
    Precio: ${nombres.precioJuego} USD$`)

   
       })

   
    
}


function seleccionarJuegos(){

    game = prompt(`

    Cant en carrito: ${carritoDeCompras.length}
    Precio de todo: ${totalAPagar} USD
    
    Escriba el nombre del producto que desea:
    Categoria 1(Aventura/Mundo Abierto):
    1.${juegosCategoria1[0].nombreJuego} (${juegosCategoria1[0].precioJuego} USD$)
    2.${juegosCategoria1[1].nombreJuego} (${juegosCategoria1[1].precioJuego} USD$)
    3.${juegosCategoria1[2].nombreJuego} (${juegosCategoria1[2].precioJuego} USD$)
    4.${juegosCategoria1[3].nombreJuego} (${juegosCategoria1[3].precioJuego} USD$)
    5.${juegosCategoria1[4].nombreJuego} (${juegosCategoria1[4].precioJuego} USD$)
    
    Categoria 2(Terror/Supervivencia):
    6.${juegosCategoria1[5].nombreJuego} (${juegosCategoria1[5].precioJuego} USD$)
    7.${juegosCategoria1[6].nombreJuego} (${juegosCategoria1[6].precioJuego} USD$)
    8.${juegosCategoria1[7].nombreJuego} (${juegosCategoria1[7].precioJuego} USD$)
    9.${juegosCategoria1[8].nombreJuego} (${juegosCategoria1[8].precioJuego} USD$)
    10.${juegosCategoria1[9].nombreJuego} (${juegosCategoria1[9].precioJuego} USD$)
    
    MONTO DISPONIBLE ${montoActual} USD$
    Escriba salir si desea terminar su compra`)
    

    switch (game) {
        case "1":
            alert(`eleccion: "${juegosCategoria1[0].nombreJuego}"
             precio :  ${juegosCategoria1[0].precioJuego} USD$`)
            break;
         case"2":
            alert(`eleccion: ${juegosCategoria1[1].nombreJuego}
             precio :  ${juegosCategoria1[1].precioJuego}USD$`)
            break;
         case "3":
            alert(`eleccion: "${juegosCategoria1[2].nombreJuego}"
             precio :  ${juegosCategoria1[2].precioJuego} USD$`)
            break;
         case "4":
            alert(`eleccion: "${juegosCategoria1[3].nombreJuego}"
             precio :  ${juegosCategoria1[3].precioJuego} USD$`)
            break;
         case "5":
            alert(`eleccion: "${juegosCategoria1[4].nombreJuego}"
             precio :  ${juegosCategoria1[4].precioJuego} USD$`)
             break;
         case "6":
             alert(`eleccion: "${juegosCategoria1[5].nombreJuego}"
             precio :  ${juegosCategoria1[5].precioJuego} USD$`)
             break;
         case "7":
            alert(`eleccion: "${juegosCategoria1[6].nombreJuego}"
             precio :  ${juegosCategoria1[6].precioJuego} USD$`)
             break;
          case "8":
            alert(`eleccion: "${juegosCategoria1[7].nombreJuego}"
             precio :  ${juegosCategoria1[7].precioJuego} USD$`)
             break;
          case "9":
            alert(`eleccion: "${juegosCategoria1[8].nombreJuego}"
              precio :  ${juegosCategoria1[8].precioJuego} USD$`)
             break;
            case "10":
            alert(`eleccion: "${juegosCategoria1[9].nombreJuego}"
             precio :  ${juegosCategoria1[9].precioJuego} USD$`)
             break;
            case"salir":
            tomarCompra()
            break
        default:
            alert("No tenemos ese juego actualmente en el catalogo, recargue la pagina e intente nuevanmente")
            break;

    }

}


while(nombreP !== 'salir' || apellidoP !== 'salir'){

    
    let bienvenida = 'bienvenido' + " " + nombreP + " " + apellidoP
    

let tarjeta = prompt("Ingrese una tarjeta de 8 digitos.")

while (tarjeta <= 9999999 || tarjeta >= 99999999) {

    tarjeta = prompt("Por favor, ingrese una tarjeta valida.")

}

alert(`${bienvenida}, su tarjeta fue tomada con exito.`)

tomarCompra()

seleccionarJuegos()


while(game !== salir && game >= 1 && game <= 10){

    if (game >= 1 && game <= 10){
        
    comprarJuegos(game)

    }


seleccionarJuegos()

if(montoActual < 1){

    alert("Usted ha superado el limite de compra con su monton actual, recargue la pagina e intente nuevamente.")
    carritoDeCompras.pop()
    break

    }


}

function comprarJuegos(index){

    index -= 1
    carritoDeCompras.push(juegosCategoria1[index])
    montoActual -= juegosCategoria1[index].precioJuego
    totalAPagar += juegosCategoria1[index].precioJuego

}

let cont = document.createElement("div")
cont.innerHTML=`<h2>${despedirse} ${nombreP} ${apellidoP }</h2>`
document.body.appendChild(cont)

for(juegosS of carritoDeCompras){

    let juegosContenedor = document.createElement("div")
    juegosContenedor.innerHTML=`<p>Juego: ${juegosS.nombreJuego}</p>
    <p>Precio: ${juegosS.precioJuego} USD$</p>`
    document.body.appendChild(juegosContenedor)

}

break
}
if(nombreP === salir || apellidoP === salir){
    
}*/

    








