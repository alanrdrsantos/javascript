
// 15 - Par ou Ímpar

const body = document.body

const parOrImpar = (n)=> {
    if(n % 2 == 0) {
        body.innerHTML += `O número ${n} é Par<br>`
    }else if (n % 2 !== 0) {
        body.innerHTML += `O número ${n} é Ímpar<br>`
    }
}

parOrImpar(1258)

// 16 - Fatorial

const n = 5

const fatorial = (n) => {
    if( n == 0 || n == 1) {
        return 1
    } else {
      return n * fatorial(n - 1)

    }
}

body.innerHTML += `O fatorial de ${n} é ${fatorial(n)}<br>`


// fatorial com loop
let factorial = 1

for(let i = 1; i <= n; i++) {
    factorial *= i

    console.log(factorial)
}

// 17 - Máximo e Mínimo

const maiorNumero = (n1, n2)=> {
    if(n1 > n2) {
        body.innerHTML += `O maior número entre ${n1} e ${n2} é ${n1}<br>`
    } else {
        body.innerHTML += `O maior número entre ${n1} e ${n2} é ${n2}<br>`

    }
}

maiorNumero(787,100)

const menorNumero = (n1, n2)=> {
    if(n1 < n2) {
        body.innerHTML += `O menor número entre ${n1} e ${n2} é ${n1}<br>`
    } else {
        body.innerHTML += `O menor número entre ${n1} e ${n2} é ${n2}<br>`

    }
}

menorNumero(600,40)

// Com operador ternário

const maximo = (a,b)=> {
    return a > b ? a : b
}

const minimo = (a,b)=> {
    return a < b ? a : b
}

const num1 = 15
const num2 = 9

console.log(`O maior número entre ${num1} e ${num2} é ${maximo(num1,num2)}`)

console.log(`O menor número entre ${num1} e ${num2} é ${minimo(num1,num2)}`)


// 18 - Inversão de String

const invertString = (string)=> {
    return string.split("").reverse().join("")
}

const string = "JavaScript"

body.innerHTML += `A string "${string}" invertida é: ${invertString(string)}<br>`  


// 19 - Contagem de Vogais

// Com ReGex
const contVogaisRegex = (str)=> {
    return (str.match(/[aeiou]/g) || []).length
}

const strVogaisRegex = "alan"

console.log(contVogaisRegex(strVogaisRegex))


// Normal
const contVogais = (str)=> {
    const vogais = "aeiouAEIOU"

    let count = 0

    for(let i = 0; i < str.length; i++) {
        if(vogais.includes(str[i])) {
            count++
        }
    }

    return count
}

const textoVogal = "Testando"

body.innerHTML += `Na palavra ${textoVogal} existem ${contVogais(textoVogal)} vogais<br>`


// 20 -  Palindromo : frase ou palavra que se pode ler, indiferentemente da esquerda para direita ou vice-versa: osso, Ana, radar, Renner, Roma é amor

const palindromo = (str)=> {

    if(str.toLowerCase().split("").reverse().join("") === str.toLowerCase()) {
        return true
    } else {
        return false
    }
}

const strPalindromo = "osso"

body.innerHTML += `A palavra ${strPalindromo} é palindromo ? ${palindromo(strPalindromo)}<br>`

// 21 - Array de números aleatórios 

const arrayLength = 10
const valorMax = 50
const valorMin = 0

const gerarArrayNumbersAleatorios = (max, min,size)=> {

    const arrayNumbers = []

   for(let i = 0; i < size; i++ ) {

     const numberAleatorio =  Math.floor(Math.random(min) * (max + 1))

     arrayNumbers.push(numberAleatorio)
   }

   return arrayNumbers
}

body.innerHTML += `O array formado por números aleatórios foi : [${(gerarArrayNumbersAleatorios(valorMax, valorMin, arrayLength).join(", "))}]<br>`


// 22 - Frequência de elementos

const arrayFreq = [20, 39, 29, 29, 78, 9, 29, 23, 39, 72]

const numberMoreFreq = (arr)=> {
    for(i = 0; i <= arr.length; i++) {
        if(arr.indexOf(arr[i]) != i) {
            return arr[i]
        }      
    }
}

body.innerHTML += `O número que mais se repete no array é o : ${(numberMoreFreq(arrayFreq))}<br>`

//Resolução professor
const elementoMaisFrequente = (arr)=> {

    const contador = {}

    let elemento = arr[0]

    let maxContagem = 1

    for(const valor of arr) {

        if(!contador[valor]) {
            contador[valor] = 1
        }else {
            contador[valor]++ 
        }

        if(contador[valor] > maxContagem) {
            maxContagem = contador[valor]
            elemento = valor
        }
    }

    return [elemento, maxContagem]
}

console.log(`O elemento mais frequente no array é ${elementoMaisFrequente(arrayFreq)[0]}, ele apareceu ${elementoMaisFrequente(arrayFreq)[1]} vezes`)













