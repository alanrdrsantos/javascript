// 23 - Elementos Duplicados

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

console.log(removerDuplicatas(arrayDuplicados).join(", "))

