function bubbleSort(lista) {

    let trocas;
    let comparacoes = 0;
    let passadas = 0;
    let totalTrocas = 0;

    while (trocas != 0) {
        trocas = 0;
        passadas++

        for (i = 0; i < lista.length - 1; i++) {
            comparacoes++

            if (lista[i] > lista[i+1]) {
                [lista[i], lista[i+1]] = [lista[i+1], lista[i]];
                trocas++
            }
        }

        totalTrocas += trocas;
    }

    console.log({comparacoes, passadas, totalTrocas})
}

let nums = [58, 16, 33, 82, 4, 47, 25, 71, 96, 60, 41, 89];

console.time('nums')
bubbleSort(nums);
console.timeEnd('nums')

console.log(nums);

const empresas = require('./data/15-mil-empresas');

console.time('empresas');
bubbleSort(empresas);
console.timeEnd('empresas');