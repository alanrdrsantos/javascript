// 1 - promise
// promise based => then e catch's

/*function loadSomeData(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const data = {id: 123, name: "Algum dado"}

            resolve(data)
        },1000)
    })
}

loadSomeData()
.then(function(data){
    console.log(`Dados carregados com sucesso:`, data)
})
.then(function(data) {
    console.log(`O nome é: ${data.name}`)
})
.catch(function(error){
    console.log(`Erro ao carregar dados`, error)
})
*/


// 2 - arrow function

function soma(a, b) {
    return a+b
}

console.log(soma(30,3))

// arrow function equivalente

const somaf = (a,b)=> a+b

console.log(somaf(3,3))

const numeros = [1,2,3,4,5,6]

const numerosPares = numeros.filter((numero)=> numero % 2 === 0)

console.log(numerosPares)

// 3 - Destructuring

const usuario = {
    nome: "João",
    idade: 30,
    email: "joao@exemplo.com"
}

// extrair nome e email de objeto
const {nome, idade,email} = usuario

console.log(nome)
console.log(idade)
console.log(email)

// extrair itens de array
const numbers = [1,2,3,4,5,6]

const[a,b,c,d,e,f] = numbers

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)

function exibeDadosUsuario({nome,email}) {
  console.log(`Nome: ${nome}`)
  console.log(`Email: ${email}`)
}

exibeDadosUsuario(usuario)

// 4 - template literals

const saldo = 10

const msg = `O seu saldo atual é ${saldo >= 1000 ? `R$${saldo}`: "negativo"}`

console.log(msg)

//5 - rest e spread
// rest

function somaC(...numeros){
    return numeros.reduce((total, numero)=> total + numero)   
}

console.log(somaC(3,3,3,3,3,3))

// spread
 const numeros1 = [1, 2, 3]
 const numeros2 = [3, 4, 5]

 const numeros3 = [...numeros1,...numeros2]

 console.log(numeros3)

 const usuarioC = {
    nome:"Maria",
    idade: 23
 }

 const usuarioComEndereco = {...usuarioC, endereco: "Rua Valins, numero 1789"}

 console.log(usuarioComEndereco)

 //6 - Classes

 class Pessoa {
    constructor(nome,idade) {
        this.nome = nome
        this.idade = idade
    }
    apresenta(){
        console.log(`Meu nome é ${this.nome}`)
        console.log(`Minha idade é ${this.idade} anos`)
    }
 }

 const pessoa1 = new Pessoa("Alan", 30)
 const pessoa2 = new Pessoa("Patricia", 28)

 pessoa1.apresenta()
 pessoa2.apresenta()

 class Funcionario extends Pessoa {
    constructor(nome,idade,salario) {
        super(nome,idade)
        this.salario = salario
    }
    apresentaFuncionario(){
        console.log(`Meu nome é ${this.nome}, eu tenho ${this.idade} anos e meu salário é de R$${this.salario}`)
    }
 }

 const fucionario1 = new Funcionario("Flavio", 30,1000)


 fucionario1.apresenta()
 fucionario1.apresentaFuncionario()


// 7 - Métodos de array
// map = lê um array e modificar seus valores

const numerosC = [1,2,3]

const numerosDobrados = numerosC.map((numero)=> numero*2)

console.log(numerosDobrados)

//filter = filtra resultados especificos

const numerosD = [1,2,3,4,5,6,7,8]

const numerosImpares = numerosD.filter((numero)=> numero%2 == 1)

console.log(numerosImpares)

//reduce = reduz os elementos a um só

const numerosE = [1,2,3,4,5]

const somaNumeros = numerosE.reduce((total,numero)=> total+numero,0)

console.log(somaNumeros)

//find = encontra algum elemento

const numerosF =  [1,2,3,4,5,6,7,8]

const numeroTree = numerosF.find((numero)=> numero === 3)

console.log(numeroTree)

//forEach = percorre cada um dos itens do array

const nomes = ["Pedro", "Paulo", "Jeferson"]

nomes.forEach((nome)=> console.log(nome))



const products = {
    caneta: 20,
    apagador: 30,
    lapis: 5
}

function getProductPrice (product){
    return products[product]
}

console.log(getProductPrice("caneta"))

// Remover caracteres especiais

function removerCaracteresEspeciais(string) {
    return string.replace(/[^a-zA-Z0-9]/g, "")
}

console.log(removerCaracteresEspeciais("Olá, Mundo!"))

console.log(removerCaracteresEspeciais("A@@@@@@@@B%%%%%%%%C&&&&&&&&D?????"))

function removerCaracteresEspeciaisEspecificos(string){
    return string.replace(/[,!@]/g, "")

}

console.log(removerCaracteresEspeciaisEspecificos("Olá, Mundo!!!!"))

// Como mudar de cor um elemento criado no JavaScript

const title1 = document.querySelector("#title")

const number = Math.round(Math.random() * 10)


title1.style.color = "red"

title1.innerHTML = `${title1.innerHTML} `

const numberElement = document.createElement("span");

numberElement.innerHTML = number;
numberElement.style.color = number > 5 ? "green" : "pink";

title1.appendChild(numberElement)

// Como adicionar elementos a um objeto JavaScript

const person = {}

person.name = "alan"
person.age = "31"

console.log(person)

const car = {
    rodas: 4,
    portas: 4
}

car["cor"] = "vermelho"

const nomePropriedade = "rodas"

car[nomePropriedade] = 5

console.log(car)

console.log(car[nomePropriedade])

Object.defineProperty(car, "motor", {
    value: 2.0,
    writable: true,
})

/*Object.defineProperties(car, {
    motor: {
        value: 2.0,
        writable: true,
    },
    tunning: {
        value: 1000,
        writable: false
    }

}) */

console.log(car)

car.motor = 6
console.log(car)

// varias funções onclick

const btn = document.querySelector("#btn")
const btn2 = document.querySelector("#btn-2")

function sayHello() {
    console.log("Hello,")
}

function sayWorld(){
    console.log("World!")
}

btn.addEventListener("click", sayHello)
btn.addEventListener("click", sayWorld)

btn2.addEventListener("click",()=> {
    sayHello()
    sayWorld()
})

//Gerar PDF apartir do HTML

const btnGenerate = document.querySelector("#generate-pdf")

btnGenerate.addEventListener("click", ()=> {
    
    // Conteúdo do PDF
    const content = document.querySelector("#content")

    // Configuração do arquivo final e PDF
    const options = {
        margin: [10, 10, 10, 10],
        filename: "arquivo.pdf",
        html2canvas: {scale: 2},
        jsPDF: {unit: "mm", format: "a4", orientation: "portrait"}
    }

    // Gerar e baixar o PDF
    html2pdf().set(options).from(content).save()   
})

// Verificando se String é uma data

   // 1 - com funções nativas do JS: para validar datas que estejam no padrão da linguagem
    function isValidDate(dateString) {
        const date = new Date(dateString)

        return !isNaN(date.getTime())
    }

    console.log(isValidDate("2023-07-20"))

    console.log(isValidDate("29839292992794"))

   // 2 - regex: validar datas com o padrão 29/06/2023
    function isValidDateRegex(dateString) {
        const pattern = /^\d{2}\/\d{2}\/\d{4}$/

        return pattern.test(dateString)
    }

    console.log(isValidDateRegex("2023-07-20"))

    console.log(isValidDateRegex("29839292992794"))

    console.log(isValidDateRegex("29/06/2023"))


    
    // Somando numeros array, sem usar o Reduce

    const numbers1 = [2,4,7,9,23,67,39,29,321]

    let somaNum = 0

    for(i=0; i < numbers1.length; i++){
        somaNum+= numbers1[i]

    }

    console.log(somaNum)

    //Async e Await
    
    //sintaxe
    function primeiraFuncao(){
        return new Promise((resolve)=> {
            
            setTimeout(()=> {
                console.log("Esperou isso aqui")
            resolve()    
            },1000)
        })
    }

    async function segundaFuncao(){
        console.log("Iniciou")

        await primeiraFuncao()

        console.log("Terminou")
    }

    segundaFuncao() 

    //prático
    function getUser(id){
        return fetch(`https://reqres.in/api/users?id=${id}`)
        .then(data => data.json())
        .catch(err => console.log(err))

    }

    async function showUserName(id){
        
        try {
            const user = await getUser(id)
            console.log(`O nome do usuário é: ${user.data.first_name}`)
        }
        catch(err) {
            console.log(`Erro: ${err}`)
        }
    }

    showUserName(4)


   // https://www.youtube.com/watch?v=HysoKKnfBbg

    const getUserInfo = async (id) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const data = await response.json()
            return data
        }catch(err) {
            console.log(err)
        }
    }

    //getUserInfo(2)

   
    (async ()=> {
        const usersData = await Promise.all([
            await getUserInfo(1),
            await getUserInfo(2),
            await getUserInfo(3)
        ])

        console.log(usersData)
    })()