class AbrigoAnimais {
    constructor() {
        this.animais = {
            Rex: { especie: 'cão', brinquedos: ['RATO', 'BOLA'] },
            Mimi: { especie: 'gato', brinquedos: ['BOLA', 'LASER'] },
            Fofo: { especie: 'gato', brinquedos: ['BOLA', 'RATO', 'LASER'] },
            Zero: { especie: 'gato', brinquedos: ['RATO', 'BOLA'] },
            Bola: { especie: 'cão', brinquedos: ['CAIXA', 'NOVELO'] },
            Bebe: { especie: 'cão', brinquedos: ['LASER', 'RATO', 'BOLA'] },
            Loco: { especie: 'jabuti', brinquedos: ['SKATE', 'RATO'] }
        };
    }


    brinquedosNaOrdem(animalBrinquedos, listaPessoa) {
        let indice = 0;
        for (let b of listaPessoa) {
            if (b === animalBrinquedos[indice]) indice++;
            if (indice === animalBrinquedos.length) return true;
        }
        return false;
    }


    todosBrinquedosPresentes(animalBrinquedos, listaPessoa) {
        return animalBrinquedos.every(b => listaPessoa.includes(b));
    }

    encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
        const pessoa1 = brinquedosPessoa1.split(',').map(b => b.trim().toUpperCase());
        const pessoa2 = brinquedosPessoa2.split(',').map(b => b.trim().toUpperCase());
        const animaisOrdem = ordemAnimais.split(',').map(a => a.trim());

        // Validar animais
        for (let animal of animaisOrdem) {
            if (!this.animais[animal]) return { erro: 'Animal inválido' };
        }
        if (new Set(animaisOrdem).size !== animaisOrdem.length) return { erro: 'Animal inválido' };

        // Validar duplicatas de brinquedos
        if (new Set(pessoa1).size !== pessoa1.length || new Set(pessoa2).size !== pessoa2.length) {
            return { erro: 'Brinquedo inválido' };
        }

        let contadorPessoa1 = 0;
        let contadorPessoa2 = 0;
        const resultado = [];

        for (let animalNome of animaisOrdem) {
            const animal = this.animais[animalNome];
            let dono = 'abrigo';

            let p1Pode = false;
            let p2Pode = false;

            if (animalNome === 'Loco') {

                p1Pode = contadorPessoa1 < 3;
                p2Pode = contadorPessoa2 < 3;
            } else if (animal.especie === 'gato') {

                p1Pode = this.brinquedosNaOrdem(animal.brinquedos, pessoa1) && contadorPessoa1 < 3;
                p2Pode = this.brinquedosNaOrdem(animal.brinquedos, pessoa2) && contadorPessoa2 < 3;
            } else {
                // Cães: intercalamento, todos os brinquedos presentes
                p1Pode = this.todosBrinquedosPresentes(animal.brinquedos, pessoa1) && contadorPessoa1 < 3;
                p2Pode = this.todosBrinquedosPresentes(animal.brinquedos, pessoa2) && contadorPessoa2 < 3;
            }


            if (p1Pode && p2Pode) {
                dono = 'abrigo';
            } else if (p1Pode) {
                dono = 'pessoa 1';
                contadorPessoa1++;
            } else if (p2Pode) {
                dono = 'pessoa 2';
                contadorPessoa2++;
            }

            resultado.push(`${animalNome} - ${dono}`);
        }


        resultado.sort((a, b) => {
            const nomeA = a.split(' - ')[0];
            const nomeB = b.split(' - ')[0];
            return nomeA.localeCompare(nomeB);
        });

        return { lista: resultado };
    }
}

export { AbrigoAnimais as AbrigoAnimais };
