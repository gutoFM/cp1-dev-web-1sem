// Questão 1
let fiap;
console.log(fiap);

//Questão 2
let num = 12 % 5
console.log(num);

//Questão 3
let peso = parseFloat(prompt("Digite seu peso em KG(EX: 71,5) : "));
let altura = parseFloat(prompt("Digite sua altura em metrose o restante em centimetros(EX: 1.80): "));

let imc = peso/altura**2
if(imc < 18.5){
    texto = "Você está abaixo do peso ideal"
    console.log(texto);
} else if(imc <= 24.9){
    texto2 = "Você está no peso ideal"
    console.log(texto2);
} else{
    texto3 = "Você está acima do peso"
    console.log(texto3)
}

//Questão 4
let idade = parseInt(prompt("Digite sua idade: "))

if(idade <= 12){
    console.log("Você é uma criança.")
} else if(idade <= 18){
    console.log("Você é um adolescente.")
} else if(idade <= 60){
    console.log("Você é um adulto.")
} else{
    console.log("Você é um idoso.")
}
