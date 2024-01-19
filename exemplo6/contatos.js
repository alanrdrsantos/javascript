import { contatos } from "./bancoContatos.js";


let contato = {
    getTodosContatos:function() {
        return contatos
    },
    getContato:function(i){
        return contatos[i]

    },
    addContato:function(novoContato, destinoDOM){
        const cont = {
            nome: novoContato.nome,
            telefone: novoContato.telefone,
            email: novoContato.email
        }

        contatos.push(cont)
        
        destinoDOM.innerHTML = ""

        
        contatos.forEach((c)=> {
            const button = document.createElement("button")
            button.setAttribute("class", "remove")
            button.innerHTML = "Remover"
            const div = document.createElement("div")
            div.setAttribute("class", "contato")
            const p_nome = document.createElement("p")
            p_nome.innerHTML =c.nome
            const p_telefone = document.createElement("p")
            p_telefone.innerHTML = c.telefone
            const p_email = document.createElement("p")
            p_email.innerHTML = c.email
            div.appendChild(p_nome)
            div.appendChild(p_telefone)
            div.appendChild(p_email)
            div.appendChild(button)
            destinoDOM.appendChild(div)
            button.addEventListener("click",(evt)=> {
                const quemRemover = evt.target.parentNode
                contatos.filter((el)=> {
                    return el != quemRemover.remove()                     
                })
            })    
        })
    }
}

export default contato

