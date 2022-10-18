//Seleções de Elementos
const generatePasswordButton = document.querySelector("#generate-password")
const generatedPasswordElement = document.querySelector("#generated-password")


//Funções 
const getLetterLowerCase = () => {// O String.fromCharCode()método converte valores Unicode em caracteres. O String.fromCharCode()é um método estático do objeto String. A sintaxe é sempre String.fromCharCode()
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97) // Usando o math.randon() para sortear um número aleatório multiplicando por 26 assim pegando todas as letras do alfabeto, englobado no math.floor para gerar numeros inteiros! Lembrando que o random retorna numeros menor que 1, ou seja não inteiros, assim dessa forma (Math.floor(Math.random() * 26)+97)) vai interagir no unicode desde o 97 para pegar só as letras minusculas ate 25 letras com o math.randon() * 26
}

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65) // dessa forma (Math.floor(Math.random() * 26)+ 65)) vai interagir no unicode desde o 65 para pegar só as letras maiusculas ate 25 letras com o math.randon() * 26
}

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString() // Usando o math.floor para gerar numeros inteiros sorteados pelo math.random() * 10  de 0 até 9, e transformando em String com o toString()
}

const getSymbol = () => {
    const symbols = "(){}[]=<>/,.!@#$%&*+-^~" // Const de simbolos
    return symbols[Math.floor(Math.random() * symbols.length)] // Retornando symbols que é a const que guarda os simbolos, usando o math.floor no indice para gerar numeros inteiros e math para sortear os numeros multiplicado pelo tamanho de symbols(symbols.length)
}

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
    let password = ""
    const passwordLength = 10 // const para definir o tamanho da senha 
    const generators = [getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol] // Criando um array com as funções ja definidas acima, sendo elas criadas para retornar letras, numeros e simbolos

    for(i=0; i < passwordLength; i = i + generators.length) { // for para criar a senha, sendo i menor que o tamanho da senha(passwordLegnth=10) incrementa o i + o tamanho do generators que é 4
        generators.forEach(() => { // chamando o forEach que executa uma função para cada elemento do array, nessa caso o array generators
            const randomvalue = generators[Math.floor(Math.random()* generators.length)]() // const para armazenar o array generators sorteando seu indice com o math random multiplicando seu seu tamanho englobado no math.floor para gerar numeros inteiros
            password += randomvalue // Incrementando o randomvalue ao password, assim a senha fica em uma linha só
        })
    }
    password = password.slice(0, passwordLength) // Usando o metodo slice para cortar senha(password) e retornar apenas 10 caractareres, começando do 0 ate o tamanho da senha(passwordLegnth) que ja foi definido com 10! Fazemos isso pois o incremento definido no for vai de 4 em 4 (i = i + generators.length), como existem 4 funções no generators a senha gera 12 caracteres
    
    generatedPasswordElement.style.display = "block" // Mudando o display da div generatedPasswordElement para block, assim aparacendo ja que ela foi definida como none no css
    generatedPasswordElement.querySelector("h4").innerHTML = password // Pegando o elemento (h4) da div generatePasswordElement com o querySelector e mostrando no html com o innerHTML o conteudo de password,que ja foi definido como a senha gerada
}


//Eventos
generatePasswordButton.addEventListener("click", ()=> {
    generatePassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol)
})