//Declaração e inicialização de objetos

let pessoa1 = {}; 
let pessoa2 = new Object;

let pessoa3 = {
    nome: "Fulanílson da Silva",
    "data de nascimento": '1998-05-19', //horrível
    sexo: 'M',
    profissao: "marceneiro"
};

//Exibir o valor de um atributo
console.log(pessoa3.nome);
console.log(pessoa3["data de nascimento"]);

//Criando propriedades
pessoa1.nome = "Fulaneiva";
pessoa1.sexo = "F";
pessoa1.profissao = "Programadora";
pessoa1["data de nascimento"] = "2000-10-01";

//Printando atributos
for (atributo in pessoa1) {
    console.log(atributo);
}

//Printando propriedades
for (atributo in pessoa1) {
    console.log(`${atributo} : ${pessoa1[atributo]}`);
}