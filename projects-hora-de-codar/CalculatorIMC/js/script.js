// IMC DATA

// Array de objetos para informar a classificação do IMC de acordo com o peso
const data = [
    {
      min: 0,
      max: 18.4,
      classification: "Menor que 18,5",
      info: "Magreza",
      obesity: "0",
    },
    {
      min: 18.5,
      max: 24.9,
      classification: "Entre 18,5 e 24,9",
      info: "Normal",
      obesity: "0",
    },
    {
      min: 25,
      max: 29.9,
      classification: "Entre 25,0 e 29,9",
      info: "Sobrepeso",
      obesity: "I",
    },
    {
      min: 30,
      max: 39.9,
      classification: "Entre 30,0 e 39,9",
      info: "Obesidade",
      obesity: "II",
    },
    {
      min: 40,
      max: 99,
      classification: "Maior que 40,0",
      info: "Obesidade grave",
      obesity: "III",
    }
]

// Seleção de elementos

const imcTable = document.querySelector("#imc-table")

const heightInput = document.querySelector("#height")
const weightInput = document.querySelector("#weight")
const calcBtn = document.querySelector("#calc-btn")
const clearBtn = document.querySelector("#clear-btn")

const calcContainer = document.querySelector("#calc-container")
const resultContainer = document.querySelector("#result-container")

const imcNumber = document.querySelector("#imc-number span")
const imcInfo = document.querySelector("#imc-info span")

const backBtn = document.querySelector("#back-btn")

// Funções

function createTable(data) { // função para criar a tabela passando como parametro o array data que foi definido la em cima com as classificações do IMC
    data.forEach((item) => { // forEach para percorrer todo os itens de data e executar o que vai ser feito abaixo 

        const div = document.createElement("div") // Criando elemento div 
        div.classList.add("table-data") // Adicionando a classe = "table-data" no elemento criado

        const classification = document.createElement("p") // Criando elemento p
        classification.innerText = item.classification // Usando o innerText para pegar o texto do classification para ser igual o texto da classificação atual no data(item.classification)

        const info = document.createElement("p") 
        info.innerText = item.info

        const obesity = document.createElement("p") 
        obesity.innerText = item.obesity

        div.appendChild(classification) // Adiconando os elementos a div com o appendChild
        div.appendChild(info)
        div.appendChild(obesity)

        imcTable.appendChild(div) // Adicionando o elemento div a tabela(imcTable)

    })
}

function clearInputs() { // função para limpar os inputs da calculadora
    heightInput.value = ""
    weightInput.value = ""
    imcNumber.classList = ""
    imcInfo.classList = ""
}

function validDigits(text) {
    return text.replace(/[^0-9,]/g, "") // validando os digitos de 0 até 9 e a virgula e substituindo tudo que nao for numero e virgula para vazio ""
}

function calcImc(weight,height){ // função para retornar o calculo do imc
    const imc = (weight / (height * height)).toFixed(1) // calculo do imc, usando o tofixed(1) para aparecer apenas 1 casa decimal depois da virgula

    return imc
}

function showOrHideResults() {
    calcContainer.classList.toggle("hide")
    resultContainer.classList.toggle("hide")

}

// Inicialização

createTable(data)

// Eventos

const inputvalid = [heightInput, weightInput].forEach((el)=> { // forEach para percorrer os inputs [heightInput, weightInput]
    el.addEventListener("input", (e)=> {  // Adicinando o evento "input", vai ser ativado quando alguem digitar algo no input

        const updatedValue = validDigits(e.target.value) // Armazenando em updatedValue a função validDigits que ja foi definida acima, (e.target.value) vai ser o valor atual digitado

        e.target.value = updatedValue // Limpando os digitos não permitidos quando o usuario digitar
    })
})

calcBtn.addEventListener("click", (e) => {
    e.preventDefault()

    const weight = +weightInput.value.replace(",", ".") // Transformando toda "," em "." para poder fazer o calculo, atraves do replace que vai substituir "," por "."! Usando o + na frente para comventer em número

    const height = +heightInput.value.replace(",", ".")

    if(!weight || !height) return // Se o usuario não digitar o weight e o height não vai avançar para proxima tela

    const imc = calcImc(weight,height) // Armazenando a função calcImc, passando como parametro o weitgh e height que ja foram definidas aqui

    let info

    data.forEach((item) => { // Percorrendo data com o foEach, que vai executar o que for determinado abaixo para cada item do arrray data
        if(imc >= item.min && imc <= item.max) { // se o calculo do imc(imc) for maior ou igual o minimo e imc for menor ou igual o máximo
            info = item.info // let info recebe a info do array data
        }
    })

    if(!info) return

 
    imcNumber.innerText = imc // Armazenando o valor do calculo do imc em imcNumber
    imcInfo.innerText = info // Armazenando a info em imcInfo

    switch(info) { // Switch case para definir as cores de acordo com o info, usando a classList para obter as classes de cada cor
        case "Magreza":
            imcNumber.classList.add("low")
            imcInfo.classList.add("low") 
            break;
        case "Normal":
            imcNumber.classList.add("good")
            imcInfo.classList.add("good") 
            break;
        case "Sobrepeso":
            imcNumber.classList.add("low")
            imcInfo.classList.add("low") 
            break
        case "Obesidade":
            imcNumber.classList.add("medium")
            imcInfo.classList.add("medium") 
            break 
        case "Obesidade grave":
            imcNumber.classList.add("high")
            imcInfo.classList.add("high") 
            break 
    }
  

    showOrHideResults()
})

backBtn.addEventListener("click", () => {
    clearInputs() // Limpando os inputs
    showOrHideResults() // Chamando a função para voltar a tela inicial
})

clearBtn.addEventListener("click", (e) => { 
    e.preventDefault() // Usando o preventDefaut para não enviar dados ao formulario
    clearInputs()   
})

