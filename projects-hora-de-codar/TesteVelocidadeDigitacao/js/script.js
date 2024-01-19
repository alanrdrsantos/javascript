const texto = document.querySelector("#texto")
const entrada = document.querySelector("#entrada")
const reiniciarBtn = document.querySelector("#reiniciar")
const resultado = document.querySelector("#resultado")
const historico = document.querySelector("#historico")
const alternarTemaBtn = document.querySelector("#alternarTema")

const textos = [
    "Exemplo de texto para digitar.",
    "Outro exemplo de texto para digitar.",
    "Mais um exemplo de texto para digitar.",
    "Digite isso.",
    "Você pode digitar isso aqui.",
]

function novoTexto(){
    const index = Math.floor(Math.random() * textos.length)
    texto.textContent = textos[index]
}

function atualizarTeste(){
    iniciar()

    if(entrada.value === texto.textContent) {
       verificar()
    }
}

function iniciar(){
    const statusDoTeste = JSON.parse(localStorage.getItem("testeEmAndamento"))

    if(!statusDoTeste) {
        localStorage.setItem("tempoInicial", new Date().getTime())
        localStorage.setItem("testeEmAndamento", true)
    }
}

function verificar(){
    const tempoFinal = new Date().getTime()
    const tempoInicial = parseInt(localStorage.getItem("tempoInicial"))
    const tempoGasto = (tempoFinal - tempoInicial) / 1000

    resultado.textContent = `Parabéns você levou ${tempoGasto.toFixed(2)} segundos!`

    adicionarAoHistorico(texto.textContent, tempoGasto)

    localStorage.setItem("testeEmAndamento", false)
    entrada.value = ""
    novoTexto()
}

function adicionarAoHistorico(textoDigitado, tempoGasto){

   const itemHistorico = document.createElement("p")

   itemHistorico.textContent = `Texto: ${textoDigitado} - Tempo: ${tempoGasto.toFixed(2)}`

   itemHistorico.style.color = "#f00"

   historico.appendChild(itemHistorico)

}

reiniciarBtn.addEventListener("click", ()=> {
    
    entrada.value = ""
    resultado.innerHTML = ""
    novoTexto()
    localStorage.setItem("testeEmAndamento", false)
    historico.innerHTML = ""
})

alternarTemaBtn.addEventListener("click", ()=> {
    
    const claro = document.querySelector(".claro")
   
    claro.classList.toggle("escuro")
})


entrada.addEventListener("keyup", atualizarTeste)

novoTexto()



