const nome = document.querySelector("#nome")
const portas = document.querySelector("#portas")
const blind = document.querySelector("#blindagem")
const municao = document.querySelector("#municao")

const add = document.querySelector("#add")


const car = document.querySelector(".carros")

const militar = document.querySelector("#militar")
const normal = document.querySelector("#normal")

const remove = document.querySelector(".remove")

let carros = []

const removerCarro = (quem)=> {
    carros = carros.filter((el)=> {
        return el.nome != quem
    })

}



militar.addEventListener("click", (evt)=> {
    nome.value = ""
    portas.value = ""
    blind.value = ""
    municao.value = ""
    blind.removeAttribute("disabled")
    municao.removeAttribute("disabled")

})

normal.addEventListener("click", (evt)=> {
    nome.value = ""
    portas.value = ""
    blind.value = ""
    municao.value = ""
    blind.setAttribute("disabled","disabled")
    municao.setAttribute("disabled", "disabled")

})

const gerenciarExibirCarros = ()=> {
    car.innerHTML = ""
    carros.forEach((c)=> {
        const div = document.createElement("div")
        const btn = document.createElement("button")
        btn.innerHTML = "remover"
        btn.setAttribute("class", "remove")
        btn.addEventListener("click", (evt)=> {
            const quemRemover = evt.target.parentNode.dataset.nome
            removerCarro(quemRemover)
            gerenciarExibirCarros() 
            // forma de resolver sem fazer a funcao removerCarro()
            /*const quemRemover = evt.target.parentNode
            quemRemover.remove() */  
        })
        div.setAttribute("class", "carro")
        div.setAttribute("data-nome", c.nome)
        div.innerHTML = `Nome: ${c.nome}<br>Portas: ${c.portas}<br>Blindagem: ${c.blindagem}<br>Munição: ${c.municao}<br>`
        div.innerHTML += `Cor: ${c.cor}`
        div.appendChild(btn)
        car.appendChild(div)
    })
}



add.addEventListener("click", ()=> {
    if(normal.checked) {
        const c = new Carro(nome.value, portas.value)
        carros.push(c)
    } else if(militar.checked){
        const carro = new Militar(nome.value,portas.value,Number(blind.value), Number(municao.value))
        carros.push(carro)
    }
    gerenciarExibirCarros()
})


class Carro {
    constructor(nome,portas) {
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.ligado = false
    }
    setCor = function(cor){
        this.cor = cor
    }
}

class Militar extends Carro {
    constructor(nome, portas, blindagem, municao) {
       super(nome, portas)
       this.blindagem = blindagem
       this.municao = municao
       this.setCor("Verde")
       this.ligar()

    }
    atirar = function() {
        if(this.municao > 0) {
            this.municao --
        }
    }

}

class Ultilitario extends Carro {
    constructor(nome, portas,lugares) {
        super(nome, portas) 
        this.lugares = lugares
        this.setCor("Amarelo")
    }
}

const c1 = new Carro("Normal", 4)
c1.ligar()
c1.setCor("Preto")
c1.vel = 100

const c2 = new Militar("Executor", 6,100,50)

const c3 = new Ultilitario("Passeio", 2, "NovaYork")

c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado ? "Sim":"Não")}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log("-----------------------------------")
console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${(c2.ligado ? "Sim":"Não")}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Cor: ${c2.cor}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)
console.log("-----------------------------------")
console.log(`Nome: ${c3.nome}`)
console.log(`Portas: ${c3.portas}`)
console.log(`Ligado: ${(c3.ligado ? "Sim":"Não")}`)
console.log(`Velocidade: ${c3.vel}`)
console.log(`Cor: ${c3.cor}`)
console.log(`Lugares: ${c3.lugares}`)
console.log("-----------------------------------")

