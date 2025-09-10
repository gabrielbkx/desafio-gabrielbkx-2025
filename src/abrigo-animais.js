class AbrigoAnimais {
    animais = [
        {
            nome: 'Rex',
            especie: 'cão',
            brinquedos: ['RATO', 'BOLA'],
        },
        {
            nome: 'Mimi',
            especie: 'gato',
            brinquedos: ['BOLA', 'LASER'],
        },
        {
            nome: 'Fofo',
            especie: 'gato',
            brinquedos: ['BOLA', 'RATO', 'LASER'],
        },
        {
            nome: 'Zero',
            especie: 'gato',
            brinquedos: ['RATO', 'BOLA'],
        },
        {
            nome: 'Bola',
            especie: 'cão',
            brinquedos: ['CAIXA', 'NOVELO'],
        },
        {
            nome: 'Bebe',
            especie: 'cão',
            brinquedos: ['LASER', 'RATO', 'BOLA'],
        },
        {
            nome: 'Loco',
            especie: 'jabuti',
            brinquedos: ['SKATE', 'RATO'],
        },
    ]

    encontrarBrinquedo(animal, brinquedosPessoa) {
        let apto = false

        animal.brinquedos.forEach((brinquedo, index) => {
            const brinquedoPessoa = brinquedosPessoa.split(',')[index]
            if (brinquedo === brinquedoPessoa) apto = true
        })

        return apto
    }

    animalDivido(pessoa1, pessoa2) {
        return pessoa1.reduce((dividido, animal) => {
            return dividido || pessoa2.includes(animal)
        }, false)
    }

    encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
        const animais = ordemAnimais.split(',')
        const casa = {
            pessoa1: [],
            pessoa2: [],
        }

        animais.forEach(nome => {
            let animalEncontrado = undefined

            const animal = this.animais.find(a => a.nome === nome)

            if (animal !== undefined) animalEncontrado = animal

            if (animalEncontrado === undefined) {
                return {
                    erro: 'Animal inválido',
                }
            }

            if (this.encontrarBrinquedo(animalEncontrado, brinquedosPessoa1)) {
                casa.pessoa1.push(animalEncontrado.nome)
            }

            if (this.encontrarBrinquedo(animalEncontrado, brinquedosPessoa2)) {
                casa.pessoa2.push(animalEncontrado.nome)
            }

            if (casa.pessoa1.join(',') === animalPessoa2.join(',')) {
                casa.pessoa1 = []
                casa.pessoa2 = []
            }
        })
    }
}

console.log(new AbrigoAnimais().encontraPessoas('BOLA, LASER', 'RATO,NOVELO', 'Fofo, Mimi'))

export { AbrigoAnimais as AbrigoAnimais }
