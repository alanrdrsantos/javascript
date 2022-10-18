/*var idade = window.prompt('Qual sua idade ?')

if (idade === null) {
    console.log("Cancelado");
} else if (Number(idade) >= 18) {
    window.alert('Voce é maior de idade')
} else if (Number(idade)  > 0 ) {   
    window.alert('Voce é menor de idade')
} else {
    window.alert('Digite um número')
} */



 var cor1 =  window.prompt(`Digite sua cor`)

if (cor1) {
    window.alert(`A cor ${cor1} vai aparecer na tela`)
    document.getElementsByTagName('body')[0].style.backgroundColor = cor1
} else
    window.alert('Você não digitou uma cor') 

