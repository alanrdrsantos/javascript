class Jogador{
    constructor(nome){
        this.nome = nome
        this.id = Symbol()
    }

}

let jogadores = [new Jogador("j1"), new Jogador("j2"), new Jogador("j3"), new Jogador("j4"), new Jogador("j1"), new Jogador("j3")]

const s1 = jogadores[1].id

let s = []

let s_jogadores = jogadores.filter((j)=> {
   return j.nome == "j1"
})

s=s_jogadores.map((j)=> {
    return j.id

})

let n_jogadores = jogadores.map((j)=> {
    return j.nome 
})


console.log(s_jogadores)
console.log(s1)
console.log(s)
console.log(n_jogadores)


const nome = Symbol("Alan")
const numero = Symbol("numero")
const corUniforme = Symbol("cor do uniforme")

const jogador = {
    nome: "j1",
}

jogador[numero] = 10
jogador[corUniforme] = "verde"

for(p in jogador) {
    console.log(p)
}

console.log(jogador)

console.log(jogador.nome)

console.log(nome.description)
