class mamifero {
    constructor(species, name) {
        this.species = species
        this.name = name
        this.glanM = true
    }    
}

class animals extends mamifero {
    constructor(species, name, mamifero) {
        super(species, name)
        this.mami = mamifero
    }

}

const zeca = new mamifero('zebra', 'zequinha')
const dog = new mamifero('cachorro', 'Hook')
const cat = new mamifero('gato', 'Garfield')
const lion = new animals('leao', 'Mufasa', 'mamifero')

console.log(`O animal ${zeca.species} e se chama ${zeca.name}`)
console.log (`O animal ${cat.species} e se chama ${dog.name}`)
console.log(`O animal ${lion.species} e se chama ${lion.name}, ele é ${lion.mami}`)