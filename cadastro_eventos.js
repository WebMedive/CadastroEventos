var nome = "Anderson"
var idade = 17
var dataEvento = "29/09/2021"
var dataAtual = "21/09/2021"
var qtd = 4
const participantes = ["Juliana", "Paula", "Marcio", "Rodrigo"]

console.log("Cadastro de Eventos");
console.log("");
console.log("Data atual: " + dataAtual);
console.log("");
console.log("A data do evento é: " + dataEvento); 

if(dataEvento == dataAtual) {
    console.log("Não é possível realizar o cadastro")
    console.log("Consulte a data do evento e tente novemente!")
}
else {
    console.log("Cadastro em Andamento!")
}

console.log("Nome do participante: " + nome + ", e sua idade é: " + idade + " anos");

if( idade >= 18){
    console.log("Idade permitida")
    console.log("Cadastro em andamento!")
}else {
    console.log("Menor de 18 anos, cadastro não permitido!")
}
console.log("")
console.log("Lista de participantes")
console.log("" + participantes)
console.log("Quantidade de participantes " + qtd)
console.log("")
if(qtd >100){
    console.log("Cadastro não realizado")
    console.log("Quantidade excedeu o limite de 100 pessoas!")
}
else {
    console.log("Cadastro concluído com sucesso!")
}