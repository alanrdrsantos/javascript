var dv1,dv2,dv3,dv4

function inicia() {
    dv1 = document.getElementById("dv1")
    dv2 = document.getElementById("dv2")
    dv3 = document.getElementById("dv3")
    dv4 = document.getElementById("dv4")
    dv1.addEventListener("mouseover", trocaCima) // Adicionando o evento de mouseover na variavel dv1 que foi associado ao elemento, mouseover que acontece quando passamos o mouse encima do elemento associado, quando o evento acontecer ele chama a função trocar
    dv1.addEventListener("mouseout", trocaSai) // Adicionando o evento de mouseout na variavel dv1 que foi associado ao elemento, mouseout que acontece quando tiramos o mouse de cima do encima do elemento associado, quando o evento acontecer ele chama a função trocar

    dv2.addEventListener("mouseover", trocaCima)
    dv2.addEventListener("mouseout", trocaSai) 
    dv3.addEventListener("mouseover", trocaCima)
    dv3.addEventListener("mouseout", trocaSai) 
    dv4.addEventListener("mouseover", trocaCima)
    dv4.addEventListener("mouseout", trocaSai) 
    

}
function trocaCima() {
    var obj = event.target // Usando event.target que é uma referência ao objeto que enviou o evento, ou seja vai me retornar o elemento que eu passo o mouse
    obj.style.backgroundImage = "url(img/car2.png)" // Fazendo a troca da imagem com o style.backgroundImage quando a funçao for chamada  
}

function trocaSai() {
    var obj = event.target // Usando event.target que é uma referência ao objeto que enviou o evento, ou seja vai me retornar o elemento que eu tiro o mouse
    obj.style.backgroundImage = "url(img/car1.png)" // Fazendo a troca da imagem com o style.backgroundImage quando a funçao for chamada  
}

window.addEventListener("load", inicia) // Adicinando o evento load na função inicia para executar os comando quando a pagina for carregada