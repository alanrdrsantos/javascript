const card = document.querySelector(".card")


/*const eventCard = (e)=> {
    e.classList.toggle("card2")
}*/

card.addEventListener("click", (evt)=> {
    const e = evt.target
    e.classList.toggle("card2")
})