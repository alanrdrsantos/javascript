const btnTransfer = document.querySelector("#btnTransfer")
const box1 = document.querySelector("#caixa1")
const box2 = document.querySelector("#caixa2")
const cursos = [...document.querySelectorAll(".curso")]

console.log(cursos)

cursos.forEach((e)=> {
 e.addEventListener("click", (evt)=> {
    const curso = evt.target 
    curso.classList.toggle("destaque")
 })
})

btnTransfer.addEventListener("click",()=> {
    const cursosSelect = [...document.querySelectorAll(".destaque")]
    const cursosNotSelect = [...document.querySelectorAll(".curso:not(.destaque)")]

   cursosSelect.forEach((e)=> {
    box2.appendChild(e)
   }) 

   cursosNotSelect.forEach((e)=> {
    box1.appendChild(e)
   })

})



