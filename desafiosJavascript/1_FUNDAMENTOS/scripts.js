//1 - Conversão de Temperatura

const body = document.body

const temperatureResultF = (celsius)=> {
   const fahrenheit = (celsius * 9 / 5) + 32
   body.innerHTML += `A conversão de Celsius para Fahrenheit é : ${fahrenheit}°F<br>`
   
}

temperatureResultF(30)


const temperatureResultC = (fahrenheit)=> {
    const celsius = (fahrenheit - 32) * 5 / 9
    body.innerHTML += `A conversão de Fahrenheit para Celsius é : ${celsius.toFixed(2)}°C<br>`
}

temperatureResultC(86)

// 2- Cálculo IMC

const peso = document.querySelector("#peso")
const altura = document.querySelector("#altura")
const btnCalcular = document.querySelector("#calcular")

btnCalcular.addEventListener("click", ()=> {
    const imc = peso.value / (altura.value * altura.value)
    body.innerHTML = `O calculo do seu IMC é ${imc.toFixed(2)}<br>`
})

// 3- Concatenação de Strings e Interpolação

const nome = document.querySelector("#nome")
const idade = document.querySelector("#idade")
const cidade = document.querySelector("#cidade")
const btnConcatenar = document.querySelector("#concatenar")

btnConcatenar.addEventListener("click", ()=> {
    body.innerHTML = `Meu nome é ${nome.value}, tenho ${idade.value} anos e moro na cidade de ${cidade.value}`
})

// 4 - Cálculo Área e Perímetro

const comprimento = 10
const largura = 5

const calcArea = (largura, comprimento)=> {
    const area =  comprimento * largura
    body.innerHTML += `A área do retângulo é ${area}<br>`
}

calcArea(largura, comprimento)

const calcPerimetro = (largura, comprimento)=> {
    const perimetro = 2 * (comprimento + largura)
    body.innerHTML += `O perímetro do retângulo é ${perimetro}<br>`
}

calcPerimetro(largura, comprimento)

// 5 - Verificação de Divisibilidade

const number1 = 30
const number2 = 3

const verificaDivisibilidade = (n1, n2)=> {
    if(n1 % n2 == 0) {
        body.innerHTML += `Estes numeros são divisiveis<br>`
    } else {
        body.innerHTML += `Lamento, estes numeros não são divisiveis<br>`
    }
}

verificaDivisibilidade(number1,number2)

// 6 - Classificação de Faixa etária

const age = 32

const classificarFaixaEtaria = (idade)=> {
    if(idade > 0 && idade <= 12) {
        body.innerHTML += `Você tem ${idade} anos, portanto é classificado(a) como criança<br>`
    } else if(idade >= 13 && idade <= 17){
        body.innerHTML += `Você tem ${idade} anos, portanto é classificado(a) como adolescente<br>`
    } else if (idade >= 18 && idade <=59) {
        body.innerHTML += `Você tem ${idade} anos, portanto é classificado(a) como adulto<br>`
    } else if (idade >= 60){
        body.innerHTML += `Você tem ${idade} anos, portanto é classificado(a) como idoso<br>`
    }
}

classificarFaixaEtaria(age)

// 7 - Comparação de números 

const numero1 = 30
const numero2 = 3

const compararNumeros = (n1, n2)=> {
    if(n1 == n2) {
        body.innerHTML += `Os números ${n1} e ${n2} são iguais<br>`
    } else if(n1 > n2) {
        body.innerHTML += `O número ${n1} é maior que ${n2}<br>`
    } else if(n1 < n2) {
        body.innerHTML += `O número ${n1} é menor que ${n2}<br>`        
    }
}

compararNumeros(numero1, numero2)

// 8 - Calculadora com Switch

const operador = "divisão"
const n1 = 30
const n2 = 40

const calculadoraSwitch = (n1,n2)=> {

    switch (operador) {
        case "adição":
            body.innerHTML += `O resultado da adição entre ${n1} e ${n2} é ${n1+n2}<br>`  
            break;
        case "subtração":
            body.innerHTML += `O resultado da subtração entre ${n1} e ${n2} é ${n1-n2}<br>`  
            break; 
        case "multiplicação":
            body.innerHTML += `O resultado da multiplicação entre ${n1} e ${n2} é ${n1 * n2}<br>`  
            break;  
        case "divisão":
            body.innerHTML += `O resultado da divisão entre ${n1} e ${n2} é ${n1 /n2}<br>`  
            break;               
        default:
            body.innerHTML += `Digite um operador válido: adição, subtração, multiplicação ou divisão<br>`  
            break;
    }
}

calculadoraSwitch(n1,n2)

// 9 - Cálculo de Tarifas
 
const tarifa = 2.5
const usuario = "estudante"
const idadeUsuario = 60

const calcTarifas = (tarifa)=> {
    switch (usuario) {
    case "criança":
        if(idadeUsuario <= 6) {
            body.innerHTML += `A tarifa para crianças menores de 6 anos é grátis<br>` 
        }
        break;
    case "estudante": 
        body.innerHTML += `Estudantes tem 50% de desconto na tarifa, seu desconto é de ${(50 * tarifa) / 100}! Portanto sua tarifa final é ${tarifa - (50 * tarifa / 100)}<br>` 
        break;
    case "idoso": 
        if(idadeUsuario >= 60) {
            body.innerHTML += `Idosos tem 30% de desconto na tarifa, seu desconto é de ${(30 * tarifa) / 100}! Portanto sua tarifa final é ${tarifa - (30 * tarifa / 100)}<br>` 
        }
        break;
    case "regular": 
        body.innerHTML += `Você nao obteve desconto, sua tarifa é preço normal<br>`  
        break; 
    default:
        body.innerHTML += `Selecione entre: criança, estudante, idoso e regular para saber se voce tem desconto na sua tarifa<br>`
        break;
    }
}

calcTarifas(tarifa)

// 10 - Somátoio 1 a n

const contador = 3
let soma = 0

    for(let i = 1; i <= contador; i++ ) {
        soma += i
    }
    
    body.innerHTML +=`A soma de 1 até ${contador} é ${soma}<br>`   
    
// 11 - Tabuada

const numTabuada = 5

    for(let i = 1; i <= 10; i++) {
        body.innerHTML += `${numTabuada} x ${i} = ${numTabuada * i}<br>`
    }

// 12 - Número Primo

const contPrimos = 50

const isPrime = (num)=> {

    if(num < 1) {
        return false
    }
    
    for(let i = 2; i * i < num; i++) {
        if(num % i == 0) {
            return false            
        }
    }

    return true
}

for(let i = 2; i <= contPrimos; i++) {
    if(isPrime(i)) {
        body.innerHTML += `${i}<br>`
    }
}

// 13 - Exibiçao de Padrões 

const numberPadrao1 = 10
const numberPadrao2 = 1

for(let i = 1; i <= numberPadrao1; i++) {
    body.innerHTML += `${"*".repeat(i)}<br>`
}

for(let i = 10; i >= numberPadrao2; i--) {
    body.innerHTML += `${"*".repeat(i)}<br>`
}

// 14 - Fibonacci


const fibonacci = (n)=> {
    let a = 0
    let b = 1

    let sequencia = []
    
    while(a <= n ) {
        sequencia.push(a) 
        let f = a 
        a = b
        b = f + a    
    }

    return sequencia
}

body.innerHTML += `${fibonacci(62)}<br>`















 

