"use strict";

const container = document.querySelector("#container")

const sons = {
    "A" : "boom.wav",
    "S" : "clap.wav",
    "D" : "hihat.wav",
    "F" : "kick.wav",
    "G" : "openhat.wav",
    "H" : "ride.wav",
    "J" : "snare.wav",
    "K" : "tink.wav",
    "L" : "tom.wav"
}

const creatDiv = (texto)=> {
    const div = document.createElement("div")
    div.classList.add("key")
    div.innerHTML = texto
    div.id = texto

    container.appendChild(div)
}

const ativarDiv = (evt)=> {
    /*let letras = ""

    if(evt.type == "click") {
        letras = evt.target.id
    } else {
        letras = evt.key.toUpperCase()
    }*/

   const letras = evt.type == "click" ? evt.target.id : evt.key.toUpperCase()

   const letraPermitida = sons.hasOwnProperty(letras)
   if (letraPermitida) {
       adicionarEfeito(letras) 
       tocarSom(letras)  
       removerEfeito(letras)
   } 
}


const exibir = (sons) => {
   const keys = Object.keys(sons)
   keys.forEach(creatDiv)
}

const tocarSom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`)
    audio.play()
}

const adicionarEfeito = (letra)=> {
    document.getElementById(letra).classList.add("active")
}

const removerEfeito = (letra)=> {
   const div = document.getElementById(letra)
   const removeActive = () => div.classList.remove("active")
   div.addEventListener("transitionend",removeActive)
}

container.addEventListener("click", ativarDiv)

window.addEventListener("keydown", ativarDiv)
    
exibir(sons)

