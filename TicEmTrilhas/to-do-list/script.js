const list_todolist = document.querySelector("#list-todolist")
const task_name = document.querySelector("#task-name")
const form_todolist = document.querySelector("#form-todolist")
const btn_delete = document.querySelector("#btn-delete")



/*function task_add(event){
    event.preventDefault()

    console.log(event)
    
    const listItem = document.createElement("li")
    const input = document.createElement("input")
    const span = document.createElement("span")
    span.innerText =  task_name.value
    input.setAttribute("type", "checkbox")
    listItem.appendChild(input)
    listItem.appendChild(span)
    console.log(listItem)


    
    list_todolist.appendChild(listItem)
 
   // list_todolist[0].insertAdjacentElement("beforebegin", list)  

   
} */

form_todolist.addEventListener("submit", (event) => {
    event.preventDefault()


    const listItem = document.createElement("li")
    const input = document.createElement("input")
    const span = document.createElement("span")
    span.innerText =  task_name.value
    input.setAttribute("type", "checkbox")
    listItem.appendChild(input)
    listItem.appendChild(span)
    

    list_todolist.appendChild(listItem)

    task_name.value = " "  

})



btn_delete.addEventListener("click", (checkbox)=> {

   
const selecionados = document.querySelectorAll('li [type="checkbox"]:checked')

    for(let i = 0; i < selecionados.length ; i++){

        selecionados[i].parentNode.remove()

    }
   
})





