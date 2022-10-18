const openModalButton = document.querySelector("#open-modal")
const closeModalButton = document.querySelector("#close-modal")
const modal = document.querySelector("#modal")
const fade = document.querySelector("#fade")

const toggleModal = ()=> {
    [modal, fade].forEach((el) => el.classList.toggle("hide"))// toggle adiciona a class se ela não está e se a class estiver ela é removida, assim fazendo a alternância de estados da class
    
}

const modalClick = [openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", ()=> toggleModal())
})
