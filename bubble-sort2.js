function bubbleSort(lista, fnComp) {

    let trocas;
    let comparacoes = 0;
    let passadas = 0;
    let totalTrocas = 0;

    while (trocas != 0) {
        trocas = 0;
        passadas++

        for (i = 0; i < lista.length - 1; i++) {
            comparacoes++

            if (fnComp(lista[i], lista[i+1])) {
                [lista[i], lista[i+1]] = [lista[i+1], lista[i]];
                trocas++
            }

        }

        totalTrocas += trocas;
    }

    console.log({comparacoes, passadas, totalTrocas})
}

let candidatos = require('./data/candidatos-2018');

console.time('candidatos');
bubbleSort(candidatos, (obj1, obj2) => obj1.NM_CANDIDATO.localeCompare(obj2.NM_CANDIDATO, 'pt-BR') > 0);
console.timeEnd('candidatos');
console.log(candidatos);