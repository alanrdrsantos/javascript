// 23 - Remover Elementos Duplicados

const body = document.body

const arrayDuplicados = [3, 5, 67, 67, 79, 5, 45, 5, 34, 67, 40, 5]

const removeElemDupArray = (arr)=> {
    const newArray = arr.filter((valor, indice, newarr)=> {
        return newarr.indexOf(valor) === indice
    })

    return newArray

}

body.innerHTML += `O  novo array sem os itens duplicados [${(removeElemDupArray(arrayDuplicados)).join(", ")}]<br>`

//resolução professor
const removerDuplicatas = (arr)=> {
   return Array.from(new Set(arr) )
    
    //const arrayneww = [...new Set(arr)]
    //return arrayneww
}

console.log(`Array original: [${arrayDuplicados}]`)
console.log(`Arrays sem itens duplicados: [${removerDuplicatas(arrayDuplicados).join(", ")}]`)


// 24 - Concatenação de Arrays 

const array1 = [1,4,7,9]
const array2 = ["Alan", "Luiza", "Junior", "Leticia"]

const concatenarArray = (arr1,arr2) => {

    const arrayConcatenado = [...arr1, ...arr2]

    return arrayConcatenado
}

body.innerHTML += `Array concatenado: [${concatenarArray(array1, array2).join(", ")}]<br>`


//Resolução professor 

const concatenarArrays = (arr1, arr2)=> {

    return arr1.concat(arr2)

}

console.log(`Array concatenado: [${concatenarArrays(array1,array2).join(", ")}]`)


//25 - Interseção de Arrays(encontrar elementos iguais)

const arry1 = [1,2,3,4,5,6]
const arry2 = [1,2,3]

const intersecArrays = (arr1,arr2)=> {

const arrayIntersec = arr1.filter((elemento) => arr2.includes(elemento))
// usando !arr2.includes(elemento) ele retorna os elementos !nao iguais ou seja os diferentes (faça o teste)

return arrayIntersec

}

body.innerHTML+= `Os elementos iguais entre os arrays testados foram: [${intersecArrays(arry1, arry2).join(", ")}] <br>`

//26 - Calculando a Média dos elementos de um array

const arrayNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]

const mediaArray = (arr)=> {
    
    const soma = arr.reduce((acc, num)=> acc + num, 0)
       
    return soma / arr.length
}

body.innerHTML += `A média entre os números [${arrayNumbers.join(", ")}] é : ${mediaArray(arrayNumbers)} <br>`

//OBJETOS

//27 - Calcular soma de numeros de um Objeto

const numerosObject = {
    a: 10,
    b: 15,
    c: 20,
    d: "Alan",
    e: 5,  
}


const somaObject = (object)=> {

    let soma = 0

    for (const chave in object) {
        if(object.hasOwnProperty(chave) && typeof object[chave] === "number") {
            soma += object[chave]
        }
    }

    return soma       

}

body.innerHTML += `A soma dos valores do objeto foi: ${somaObject(numerosObject)} <br>`

// 28 - Filtrando propriedades de um objeto

const pessoa = {
    nome: "Alan",
    idade: 32,
    profissao: "Programador",
    hobbies: ["Futebol", "Cinema", "Corrida"],
}

const propPermitidas = ["nome", "profissao"]

const filtrarPropriedades = (obj, propriedadesPermitidas)=> {
    
    const newObject = {}

    for (const prop of propriedadesPermitidas) {
        if(obj.hasOwnProperty(prop)) {
            newObject[prop] = obj[prop]
        }
    }

    return newObject

}

body.innerHTML += `O Objeto pessoa filtrado com as propriedades permitidas: ${filtrarPropriedades(pessoa,propPermitidas)} <br>`

console.log(filtrarPropriedades(pessoa,propPermitidas))


// 29 - Unindo dois Objetos

const objeto1 = {
    a: 2,
    b: 4,
    c: 6,
}

const objeto2 = {
    d: 8,
    e: 10,
    f: 12,
}

const concatenarObjetos = (obj1, obj2)=> {

    const objectConcatenado = {...obj1, ...obj2}

    return objectConcatenado

}

body.innerHTML += `Objeto concatenado: ${concatenarObjetos(objeto1, objeto2)}`

console.log(concatenarObjetos(objeto1, objeto2))

