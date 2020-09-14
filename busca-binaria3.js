const primos = require('./data/primos');
const listaNomes = require('./data/vetor-nomes');
const pessoas = require('./data/lista-nomes');

function buscaBinaria(data, valorBusca, fnComp, inicio = 0, fim = data.length - 1) {

    if (fim >= inicio) {
        let meio = Math.floor((inicio + fim)/2);
        let result = fnComp(data[meio], valorBusca);

        if (result === 0) {
            console.log('ACHO');
            return meio
        } 
            
        else if (result > 0) {
            return buscaBinaria(data, valorBusca, fnComp, inicio, meio - 1);
        }
        
        else {
            return buscaBinaria(data, valorBusca, fnComp, meio + 1, fim);
        }
    }   

    console.log('Valor não encontrado');
    return -1
}

console.time('181');
console.log(buscaBinaria(primos, 4094, (elemento, busca) => {
    if (elemento === busca) return 0
    else if (elemento > busca) return 1
    else return -1
}));
console.timeEnd('181')

console.log('--------------------------------------');

console.time('181');
console.log(buscaBinaria(primos, 17, (elemento, busca) => {
    if (elemento === busca) return 0
    else if (elemento > busca) return 1
    else return -1
}));
console.timeEnd('181')

console.log('--------------------------------------');

console.time('RAFAEL');
console.log(buscaBinaria(listaNomes, 'RAFAEL', (pessoa, busca) => {
    if (pessoa === busca) return 0
    else if (pessoa > busca) return 1
    else return -1
}));
console.timeEnd('RAFAEL');

console.log('--------------------------------------');

console.time('GUMERCINDO');
console.log(buscaBinaria(pessoas, 'GUMERCINDO', (pessoa, busca) => {
    if (pessoa.first_name === busca) return 0
    else if (pessoa.first_name > busca) return 1
    else return -1
}));
console.timeEnd('GUMERCINDO');