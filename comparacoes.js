//Propriedade comutativa

//Valores numéricos
let x = 5;
let y = 11;;

console.log(x > y);
console.log(y > x);

console.log("--------------------------------------");

//Valores string
let a = 'Abel';
let b = 'Bartira';

console.log(a > b);
console.log(b > a);

console.log("--------------------------------------");

//Valores objeto
let p1 = {
    nome: "Abel",
    sexo: "M",
    idade: 38
};

let p2 = {
    nome: "Bartira",
    sexo: "F",
    idade: 29
}

console.log(p1 > p2);
console.log(p2 > p1);

console.log("--------------------------------------");

let i = true;
let j = false;

console.log(i > j);
console.log(j > i);