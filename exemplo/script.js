const Pessoa = {
    nome: "",
    idade: "",
    getNome: function(){
        return this.nome
    },
    getIdade: function(){
        return this.idade
    },
    setNome: function(nome){
       this.nome = nome
    },
    setIdade: function(idade){
        this.idade = idade
    }

}

const nome = document.querySelector("#nome")
const idade = document.querySelector("#idade")

const add = document.querySelector("#res")

const res = document.querySelector(".res")

const objRes = ()=> {
    let div = document.createElement("div")
    div.setAttribute("class", "pessoa")
    div.innerHTML = `Nome: ${Pessoa.getNome()}<br> Idade: ${Pessoa.getIdade()}`

    res.appendChild(div)

    
}



add.addEventListener("click",()=>{
    let n = Pessoa.setNome(nome.value)
    let i = Pessoa.setIdade(idade.value)

    nome.value = ""
    idade.value = ""
    nome.focus()
    
    console.log(Pessoa.getNome(n))
    console.log(Pessoa.getIdade(i))

    objRes()

})