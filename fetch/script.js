const btn_texto = document.querySelector("#btn_texto")
const p_temp = document.querySelector("#p_temp")
const p_nivel = document.querySelector("#p_nivel")
const p_press = document.querySelector("#p_press")

const obterDados = ()=> {
    const endpoint = "https://cfbcursos.alansantos24.repl.co/"
    fetch(endpoint)
    .then(res => res.json())
    .then(dados => {
        console.log(dados)
        p_temp.innerHTML = `Temperatura: ${dados.temperatura}`
        p_nivel.innerHTML = `Nivel: ${dados.nivel}`
        p_press.innerHTML = `Pressão: ${dados.pressao}`
    })
}

//const intervalo = setInterval(obterDados, 3000)

let dados = {
    name: "alan",
    canal: "cfbCursos",
    curso: "JavaScript"
}


const gravarDados = ()=> {
    const endpoint = "https://cfbcursos.alansantos24.repl.co/"
    fetch(endpoint,{
        method: "POST",
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(ret => console.log(ret))
    
}

btn_texto.addEventListener("click", ()=> {
    gravarDados()
})


const point = "texto.txt"

fetch(point)
.then(res => res.text())
.then(res => {
    res = JSON.parse(res)
    console.log(res)
    console.log(res.canal)
    console.log(res.curso)
    p_temp.innerHTML = res.canal
})