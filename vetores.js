//Declarando vetores em JS
let vetor1 = [];
let vetor2 = Array();

//Declarando vetores já com valores.
let vetor3 = ['blue', 'red', 'yellow'];
let vetor4 = Array(2, 3, 5, 7);

//Como adicionar valores a um vetor

//Forma 1: push() -> Adiciona valores no final de um vetor
vetor1.push('laranja');
vetor1.push('melancia');
vetor1.push('pera');

//Forma 2: unshift() -> Adiciona valores no começo de um vetor
vetor1.unshift('jabuticaba');
vetor1.unshift('acerola');

//Forma 3: splice()
// 1º parâmetro: posição de inserção
// 2º parâmetros: quantos elementos você quer que apague
vetor1.splice(3, 0, 'abacaxi');
vetor1.splice(2, 0, 'uva');
vetor1.splice(4, 1, 'maca');

//Remoção de itens de um vetor

//Forma 1: pop() - Remove um item do FINAL do vetor.
let removido = vetor1.pop(); 
let removido2 = vetor1.pop();

//Forma 2: shift() - Remove um item do ÍNICIO do vetor.
let removido3 = vetor1.shift();
let removido4 = vetor1.shift();

//Acrescentando mais alguns elementos para exemplificar splice.
vetor1.push('abacate');
vetor1.push('morango');
vetor1.push('jaca');

//Forma 3: splice() -> Retira ou adiciona itens de uma posição específica. 
//1º parâmetro -> posição da remoção/inserção
//2º parâmetro -> quantidade de ítens removidos
//3° parâmetro -> Novos itens a serem adicionados na posição especificada
//Retorna um vetor.
let removido5 = vetor1.splice(3, 1);

console.log(vetor1, removido5);