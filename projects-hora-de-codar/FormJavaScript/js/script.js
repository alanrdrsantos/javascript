const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password") 
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")


form.addEventListener("submit", (evt)=> {
    evt.preventDefault()
    // Verifica se o nome está vazio
    if(nameInput.value === "") {
        modal()
        //alert("Por favor, preencha o seu nome!")
        return
    }
    // Verifica se o e-mail está preenchido e se é valido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu e-mail!")
        return
    }
    // Verifica se a senha está preenchida
    if(!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa de no minimo 8 dígitos")
        return
    }
    //Verificar se a situação doi selecionada
    if(jobSelect.value === ""){
        alert("Por favor, selecione a sua situação!")
        return
    }
    //Verifica se a mensagem está preenchida
    if(messageTextarea.value === ""){
        alert("Por favor, escreva uma mensagem!")
        return
    }

    //Se todos os campos entiverem corretamente preenchidos, envie o form
    form.submit()
})

//Função que valida o e-mail
function isEmailValid(email){
    //cria uma RegEX para o email
    const emailRegEx = new RegExp(
        // usuario12@host.com.br
        /^[a-z|A-Z|0-9|._-]+@[a-z|A-Z|0-9|._-]+\.[a-z|A-Z]{2,}$/
    )
    if(emailRegEx.test(email)) {
        return true
    }
    return false

}

//Função que valida a senha
function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
        //Senha válida
        return true
    }
    //Senha inválida
    return false
}

function modal(){
    const div = document.createElement("div")
    div.setAttribute("class","modal")
    const p = document.createElement("p")
    p.innerHTML = "Por favor, preencha os dados corretamente!"
    div.appendChild(p)
    form.appendChild(div)
}

var salary = 1000 + (1000*36/100)  // porcentagem 36%
console.log(salary)
