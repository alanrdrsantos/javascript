// Seleção de elementos
const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todolist = document.querySelector("#todo-list")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEditBtn = document.querySelector("#cancel-edit-btn")
let oldInputValue


// Funções
const saveTodo = (text) => { // Arrow function difinida para criar elementos(div,h3) 
    const todo = document.createElement("div") // Criando o elemento div
    todo.classList.add("todo") // Adicionando a classe todo a div criada com o metodo add da classList
    
    const todoTitle = document.createElement("h3") // Criando o elemento h3
    todoTitle.innerText = text // Adicionando um texto no h3 criado (todoTitle) com o innerText, e seu valor vai ser o text que vai ser passado quando chamarmos a function saveTodo(text)
    todo.appendChild(todoTitle) // Adicionando o h3(todoTitle) na div(todo) com o appenChild, lembrando que vai adicionar no final da lista no elemento pai que nesse caso é todo(div)

    const doneBtn = document.createElement("button") // Criando o elemento button
    doneBtn.classList.add("finish-todo") // Adicionando a classe finish-todo ao button criado(doneBtn)
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>' // Adicionando o conteudo do icone '<i...</i>' no button(doneBtn) usando o innerHTML
    todo.appendChild(doneBtn) // Adicionando o button(doneBtn) ao elemento pai que é a div(todo)

    const editBtn = document.createElement("button") 
    editBtn.classList.add("edit-todo") 
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>' 
    todo.appendChild(editBtn) 

    const deleteBtn = document.createElement("button") 
    deleteBtn.classList.add("remove-todo") 
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>' 
    todo.appendChild(deleteBtn)

   todolist.appendChild(todo) // Adicionando (todo) que foi a div criada, ao todolist que foi armazenado todo o conteudo que tem o id #todo-list
}

const toggleForms = () => { // arrow function definida para edição das tarefas
    editForm.classList.toggle("hide") // Selecionando o editForm e definindo com toggle que vai exibir e esconder o hide que é a class definida no parametro
    todoForm.classList.toggle("hide")
    todolist.classList.toggle("hide")
}

const updateTodo = (text) => {
    const todos = document.querySelectorAll(".todo") // Selecionando todos as class = "todo" com o querySelectorAll

    todos.forEach((todo) => { // Usando forEach para executar uma função, nesse caso está fazendo para todos, que armazenou todas as class = "todos" em forma de array
        let todoTitle = todo.querySelector("h3") // Pegando o h3 do (todo) com o quertSelector e amarzenando em todoTitle

        if (todoTitle.innerText === oldInputValue) { // Verificando se o titulo contido no todoTitle.innerText é igual oldInputValue
            todoTitle.innerText = text // Definindo o valor do todoTitle.innerText para o que passarmos no parametro da função depois, que la embaixo foi o editInputValue que pega o valor digitado na edição
        }
    })
}

// Eventos
todoForm.addEventListener("submit",(e)=> {
    e.preventDefault() // preventDefault cancela o evento se for cancelável, sem parar a propagação do mesmo! Dessa maneira não enviando dados ao back end

    const inputValue = todoInput.value // Armazenando o valor do input(todoInput) na const inputValue

    todoInput.value=""
    todoInput.focus()

    if(inputValue) {
        saveTodo(inputValue) // chamando a function saveTodo que é uma arrow function com 1 parametro, passado aqui com (inputValue) que vai pegar o valor do input como foi definido acima 
    } 
})

document.addEventListener("click", (e) => {
    const targetEl = e.target // Pegando o elemento que foi clicado com o target
    const parentEl = targetEl.closest("div") // Usando o closest para retornar o parente mais proximo do targetEl, nesse caso a div mais proxima que foi definida no parametro(div)
    let todoTitle

    if(parentEl && parentEl.querySelector("h3")) { // Verificando se existe um parentEl e um h3 no parentEl
        todoTitle = parentEl.querySelector("h3").innerText // definindo o todoTitle para receber o h3 do parente mais proximo(parentEl), definido acima!

    }

    if(targetEl.classList.contains("finish-todo")) { // Verificando se o elemento clicado contem uma class = "finish-todo", se tiver executa os comando abaixo
        parentEl.classList.toggle("done") // Adicionando a class="done" para os elementos do parentEl, que foi definido acima! Usando o toggle para adicionar e retirar a classe selecionada que é done
    }
    if(targetEl.classList.contains("remove-todo")) {  // Verificando se o elemento clicado contem uma class = "remove-todo", se tiver executa os comando abaixo
        parentEl.remove() // Removendo o parentEl com o remove()
    }

    if(targetEl.classList.contains("edit-todo")) {  // Verificando se o elemento clicado contem uma class = "edit-todo", se tiver executa os comando abaixo
       toggleForms()
       editInput.value = todoTitle // Definindo o valor do editInput para todotitle, ja definido
       oldInputValue = todoTitle // Definindo o valor do oldInputValues para todotitle, ja definido
    }
})

cancelEditBtn.addEventListener("click",(e)=> { 
    e.preventDefault() 
    toggleForms() // chamando a function toogleForms já definida
})

editForm.addEventListener("submit", (e)=> {
    e.preventDefault()
    const editInputValue = editInput.value // Armazenando o valor do editInput na const editInputValue

    if(editInputValue) {
        updateTodo(editInputValue) // chamando a função updateTodo passando por parametro (editInputValue)
    }
    toggleForms() // Chamando a função toggleForms
})


