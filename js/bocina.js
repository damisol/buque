let estadoBocina = "apagado";

let sonidoBarco = document.querySelector("#buque_sonando");
let sonidoBoton = document.querySelector("#buque_click");

let barco = document.querySelector("#barco");
let boton = document.querySelector("#buque_boton");

boton.addEventListener("click", ()=>{
    controlarBuque()
})


function controlarBuque() {
    if (estadoBocina == "apagado") {
        estadoBocina = "encendido";
        sonidoBocina()
        barco.classList.add("barco_activo");
    } else {
        estadoBocina = "apagado";
        sonidoBocina()
        barco.classList.remove("barco_activo");
    }
}

function sonidoBocina() {
    if (sonidoBarco.paused) {
        sonidoBoton.play();
        sonidoBarco.play();
    } else {
        sonidoBoton.play();
        sonidoBarco.pause();
        sonidoBarco.currentTime=0;
    }
    
}