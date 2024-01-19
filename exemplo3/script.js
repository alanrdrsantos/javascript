const div_data = document.getElementById("div_data")
const div_relogio = document.getElementById("div_relogio")
const btn_ativar = document.getElementById("btn_ativar")
const btn_parar = document.getElementById("btn_parar")
const tmp_alarme = document.getElementById("tmp_alarme")
const hora_alarme = document.getElementById("hora_alarme")
const timer = document.getElementById("timer")

const som_alarme = new Audio("files/alarme2.mp3")
som_alarme.loop=-1

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

btn_ativar.addEventListener("click", (evt)=> {
    ts_atual = Date.now()
    ts_alarme = ts_atual+(tmp_alarme.value*1000)
    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme)
    let horas = dt_alarme.getHours()
    horas = horas<10 ? "0"+horas : horas
    let minutos = dt_alarme.getMinutes()
    minutos = minutos<10 ? "0"+minutos : minutos
    let segundos = dt_alarme.getSeconds()
    segundos = segundos<10 ? "0"+segundos : segundos
    hora_alarme.innerHTML = `Hora do alarme: ${horas}:${minutos}:${segundos}`
    tmp_alarme.value = 0
})

btn_parar.addEventListener("click", (evt)=> {
    alarme_ativado = false
    alarme_tocando = false
    hora_alarme.innerHTML = "Hora do alarme:"
    tmp_alarme.value = 0
    timer.classList.remove("alarme")
    som_alarme.pause()
    som_alarme.currentTime = 0
})

const date = new Date()

let dia = date.getDate()
dia = dia<10 ? "0"+dia : dia
let mes = date.getMonth()
mes = mes<12 ? "0"+(mes + 1) : mes + 1
let ano = date.getFullYear()

div_data.innerHTML = `${dia}/${mes}/${ano}`



const relogio =()=> {
    const data = new Date()
    let hora = data.getHours()
    hora = hora<10 ? "0"+hora : hora
    let minutes = data.getMinutes()
    minutes = minutes<10 ? "0"+minutes : minutes
    let seconds = data.getSeconds()
    seconds = seconds<10 ? "0"+seconds : seconds
    const hora_completa = `${hora}:${minutes}:${seconds}`
    div_relogio.innerHTML = hora_completa
    if(alarme_ativado && !alarme_tocando) {
        if(data.getTime() >= ts_alarme){
            alarme_tocando = true
            som_alarme.play()
            timer.classList.add("alarme")
        }
    }
}

const intervalo = setInterval(relogio,1000)






