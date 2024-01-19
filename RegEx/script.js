let nome = new String("AlanNn Rodrigues dos Santos 1991")
let email = "alan@hotmail.com"
let numeros = "1, 10, 100, 1000"
console.log(nome)

console.log(nome.split(/a/i))

console.log(nome.search(/santos/i)) // expressão regular RegEx i que tira o case sentive(difere maiuscula de minuscula)

console.log(nome.match(/o/g)) // expressão regular RegEx g que significa global, assim pegando todos os "o"

console.log(nome.replace(/o/ig, "u")) // Subistituindo todas as letras "o" com a expressão regular ig pela letra "u"

console.log(nome.match(/[ao]/ig)) // Pesquisando todos os "a" e "o" usando o [] entre elas

console.log(nome.match(/[a-n/|0-9]/ig)) // Pesquisando os caracteres de a até n usando o limitador - dentro do [], de acordo com o alfabeto e usando o | pesquisa também os numeros de 0 até 9


//Metacaracteres
console.log(nome.match(/\d/g)) // Espressão que pesquisa todos os digitos numericos usando o meta caractere \d

console.log(nome.match(/\s/g)) // Espressão que pesquisa todos os espaços usando o meta caractere \s

console.log(nome.match(/\bA/ig)) // Espressão que pesquisa um caractere usando o meta caractere \b, passando o caractere que quer procurar no caso A


//Quantificadores 
console.log(nome.match(/n+/ig)) // Expressão RegEx + que junta os caracteres iguais em uma palavra, assim que uma string tiver mais de um caractere repetido o + vai tranformar em uma palavra e não vai separar caractere por caractere

console.log(nome.match(/ro*/ig)) // Expressão RegEx * que pega tanto o ro no caso e a primeira letra dos caracteres passado

console.log(numeros.match(/10/ig))
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig)) // Expressão RegEx ? que pega tanto o 10  no caso e a primeira letra dos caracteres passado













