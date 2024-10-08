// 30 - Selecionar elemento e alterar contéudo

const titleDom = document.querySelector("#titleDom")

titleDom.innerHTML = "Olá, Mundo!"

// 31 - Selecionar e alterar CSS

const p = document.getElementsByTagName("p")

for ( let i = 0; i < p.length; i++) {
   // p[i].style.color = " blue"
}

// Resolução do professor:

const paragrafos = document.querySelectorAll(".paragrafo")

for(const p of paragrafos) {
    p.style.color = "red"
}

// 32 - Alternar classe de elemento

const div = document.querySelector(".div1")
const activeButton = document.querySelector("#active")

activeButton.addEventListener("click", ()=> {
    div.classList.toggle("ativo")
})

// 33 - Adicionando elemento pelo DOM

const lista = document.querySelector("#list-order")
const buttonAdicionar = document.querySelector("#adicionar")

buttonAdicionar.addEventListener("click", ()=> {
    const li = document.createElement("li")
    li.innerText = "Item"
    lista.appendChild(li)
})