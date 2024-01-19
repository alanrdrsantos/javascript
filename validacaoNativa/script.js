const f_nome = document.querySelector("#f_nome")
const f_nota = document.querySelector("#f_nota")
const f_msg = document.querySelector("#f_msg")
const btn_validar = document.querySelector("#btn_validar")

btn_validar.addEventListener("click", (evt)=> {
    let estadoValidacao = f_nota.validity
   
    if(estadoValidacao.valueMissing){
        f_nota.setCustomValidity("Este campo é obrigatório")
    } else if(estadoValidacao.rangeOverflow){
        f_nota.setCustomValidity("Nossa, que nota alta você digitou")
    } else if(estadoValidacao.rangeUnderflow){
        f_nota.setCustomValidity("Credo, que nota baixa você digitou")
    }
    //f_nota.reportValidity()
    f_msg.innerHTML = f_nota.validationMessage
    evt.preventDefault()
}) 

//Métodos de validação do DOM
//checkValidity()
//setCustomValidity()

//Propriedades de validação do DOM
//validity
//validationMessage

//Propiedades de validação
/*
customError: true, se uma mensagem de validação personalizada for definida.
patternMismatch: true, se o valor de um elemento não corresponder ao seu atributo padrão.
rangeOverflow: true, se o valor de um elemento for maior que o atributo max.
rangeUnderflow: true, se o valor de um elemento for menor que o atributo min.
stepMismatch: true, se o valor de um elemento for inválido por seu atributo step.
tooLong: true, se o valor de um elemento exceder seu atributo maxLength.
typeMismatch: true, se o valor de um elemento for inválido por seu atributo type.
valueMissing: true, se um elemento (com atributo obrigatório) não tiver valor.
valid: true, se o valor de um elemento for válido.
*/