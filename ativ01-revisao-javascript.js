/*

   DADOS PARA O EXERCÍCIO

   nome;sigla;area;populacao
   Sergipe;SE;21915.08;2278308
   Alagoas;AL;27848.14;3322820
   Rio Grande do Norte;RN;52811.05;3479010
   Paraíba;PB;56469.78;3996496
   Pernambuco;PE;98148.32;9496294
   Ceará;CE;148920.47;9075649
   Piauí;PI;251577.74;3264531
   Maranhão;MA;331937.45;7035055
   Bahia;BA;564733.18;14812617
  ALAGOAS, CEARA, PARAIBA, PERNAMBUCO, PIAUI, RIO GRANDE DO NORTE, SERGIPE
*/
let estadosNe = []

let estado1 = {
   nome: 'Sergipe',
   sigla: 'SE',
   area: 21915.08,
   populacao: 2278308
}

estadosNe.push(estado1)

/*
   1) Crie objetos para os demais Estados, segundo o modelo acima, e acrescente-os
      ao vetor estadosNe usando push().
*/
class Estado {
   constructor(nome, sigla, area, populacao) {
      this.nome = nome,
      this.sigla = sigla,
      this.area = area,
      this.populacao = populacao
   }
}

let estado2 = new Estado("Alagoas", "AL", 27848.14, 3322820);
let estado3 = new Estado("Rio Grande do Norte", "RN", 52811.05, 3479010);
let estado4 = new Estado("Paraíba", "PB", 56469.78, 3996496);
let estado5 = new Estado("Pernambuco", "PE", 98148.32, 9496294);
let estado6 = new Estado("Ceará", "CE", 148920.47, 9075649);
let estado7 = new Estado("Piauí", "PI", 251577.74, 3264531);
let estado8 = new Estado("Maranhão", "MA", 331937.45, 7035055);
let estado9 = new Estado("Bahia", "BA", 564733.18, 14812617);

estadosNe.push(estado2);
estadosNe.push(estado3);
estadosNe.push(estado4);
estadosNe.push(estado5);
estadosNe.push(estado6);
estadosNe.push(estado7);
estadosNe.push(estado8);
estadosNe.push(estado9);

/*
   2) Escreva uma arrow function que receba dois parâmetros, área e população, e
      calcule a densidade demográfica retornando o resultado da divisão da
      segunda pela primeira. 
*/
let densidadeDemografica = (area, populacao) => populacao/area

/*
   3) Percorra o vetor estadosNe usando um for tradicional. Para cada estado,
      chame a arrow function criada em 2) e efetue o cálculo correspondente.
      Com o resultado do cálculo, crie uma propriedade chamada 'densidade
      demográfica' para cada objeto representando um Estado.

      Durante este mesmo loop, elimine a propriedade 'sigla' dos objetos.

*/
for (i = 0; i < estadosNe.length; i++) {
   estadosNe[i]['densidade demográfica'] = densidadeDemografica(estadosNe[i].area, estadosNe[i].populacao);
   delete estadosNe[i].sigla;
}

/* 4) Escreva uma arrow function que receba um objeto. Na função, use for..in
      para extrair as propriedades e seus valores e exibi-los com console.log().

*/
let imprimirObjeto = (objeto) => {
   for (chave in objeto) {
      console.log(`${chave} : ${objeto[chave]}`);
   }
   console.log("\n");
}

/* 5) Percorra o vetor estadosNe usando for..of. Para cada objeto no vetor,
      invoque a função escrita em 4) para exibi-lo.
*/
for (estado of estadosNe) {
   imprimirObjeto(estado);
}
/*
   6)
      a) Declare um vetor vazio.
      b) Insira no vetor criado no item a) apenas o nome de cada Estado, conforme
         os dados no topo deste arquivo, um de cada vez. Faça as inserções de 
         modo que o vetor final esteja em ordem alfabética. No caso, o primeiro 
         Estado (Sergipe), pode ser inserido com push(), mas o segundo (Alagoas)
         deve ser inserido com unshift(), para manter a ordem alfabética. 
         O terceiro Estado (Rio Grande do Norte) deve ser inserido entre os dois 
         já existentes, e assim por diante.

*/
let vetor = [];
vetor.push(estado1.nome);
vetor.unshift(estado2.nome);
vetor.splice(1, 0, estado3.nome);
vetor.splice(1, 0, estado4.nome);
vetor.splice(2, 0, estado5.nome);
vetor.splice(1, 0, estado6.nome);
vetor.splice(4, 0, estado7.nome);
vetor.splice(2, 0, estado8.nome);
vetor.splice(1, 0, estado9.nome);