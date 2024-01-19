const timer = document.querySelector("#timer")
const btn_iniciar = document.querySelector("#btn_iniciar")
const btn_parcial = document.querySelector("#btn_parcial")
const btn_parar = document.querySelector("#btn_parar")
const btn_zerar = document.querySelector("#btn_zerar")
const parciaisregistradas = document.querySelector("#parciaisregistradas")


let intervalo = null;
let tmpIni = null;

const contador = ()=> {
    const tmpAtual = Date.now()
    let cont = tmpAtual - tmpIni
    let seg =(tmpAtual - tmpIni) / 1000
    timer.innerHTML = converter(seg)
    
}

const converter = (seg)=> {
    const hora = Math.floor(seg/3600)
    const resto = seg%3600
    const minuto = Math.floor(resto/60)
    const segundo = Math.floor(resto%60)
    const tempoFormatado = (hora<10 ? "0" + hora: hora) + ":" +(minuto<10 ? "0" + minuto: minuto) + ":" +(segundo<10 ? "0" + segundo: segundo) 

    return tempoFormatado
}



btn_iniciar.addEventListener("click", ()=> {
    tmpIni = Date.now()
    intervalo = setInterval(contador,1000)
    
})

btn_parcial.addEventListener("click", ()=> {
    const divParcias = document.createElement("div")
    parciaisregistradas.appendChild(divParcias)
    divParcias.innerHTML = timer.innerHTML   
})

btn_parar.addEventListener("click", ()=> {
    clearInterval(intervalo)
   
})

btn_zerar.addEventListener("click", ()=> {
    timer.innerHTML = "00:00:00"
    parciaisregistradas.innerHTML = ""
    clearInterval(intervalo)    
})