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

//Questão 5
let usuario = prompt("Digite o nome de usuário: ")
let senha = prompt("Digite a sua senha: ")

if(usuario == "admin" && senha == "1234"){
    console.log("Login realizado com sucesso.")
} else{
    console.log("Houve falha na autentificação. Tente Novamente.")
}

//Questão 6
let notas = []
let soma = 0

for (let i = 1; i <=7; i++){
    notas.push(parseFloat(prompt("Digite a sua nota: ")))
    soma += notas[i-1];
}

let media = soma/7

if (media >= 6){
    console.log("Você foi aprovado!")
} else{
    console.log("Você foi reprovado!")
}

//Questão 7
document.write("<br></br>")
document.write("Informações: ")
document.write("<br></br>")
let nome = prompt("Digite seu nome: ")
let age = parseInt(prompt("Digite sua idade: "))
let curso = prompt("Digite seu curso: ")
let ano = prompt("Digite o ano: ")

document.write("<br></br>")
document.write("Seu nome: ", nome)
document.write("<br></br>")
document.write("Sua idade: ", age)
document.write("<br></br>")
document.write("Seu curso: ", curso)
document.write("<br></br>")
document.write("O ano: ", ano)
document.write("<br></br>")
