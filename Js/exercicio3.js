1- Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

for(tentativas = 0; tentativas < 3; tentativas++){
  var nota = parseFloat(prompt("Digite uma nota de 0 a 10"))

  if(nota >= 0 && nota <=10){
     document.write("Nota válida " + nota)
     break
}else{
  alert("Nota inválida! Digite uma nota entre 0 e 10.")
}
 }
if (nota < 0 || nota > 10 || isNaN(nota)) {
    alert("Você excedeu o número de tentativas.");
}



2- Crie um loop que imprima todos os números de 1 a 100.

for(i=0; i < 101; i++){
  document.write(i + "<br>")
}



3- Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

for(i=0; i < 5; i++){
  var nome = String(prompt("Olá, qual o seu nome?"))
  var senha = parseInt(prompt("Seja bem-vindo(a) " + nome + ", agora digite a sua senha de três números."))
  if(senha === 123){
   alert("Senha correta. Acesso Permitido!")
    break
  }else{
    alert("Senha incorreta. tente outra vez!")
  }
}
 if (i === 5) {
  alert("Excedeu o limite de tentativas.");
}



4- Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Sexo: 'f' ou 'm';
Estado Civil: 's', 'c', 'v', 'd'.
Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length

var nome = String(prompt("Olá, qual o seu nome?"))
var idade = parseInt(prompt("Digite a sua idade."))
var salario = parseFloat(prompt("Digite o valor do seu salário."))
var sexo = String(prompt("Qual o seu sexo? digite 'M' para masculino ou 'F' para feminino."))
var estadoCivil = String(prompt("Qual o seu estado civil? digite 'S' para solteiro(a), 'C' para casado(a), 'V' para viúvo(a) ou 'D' para divorciado."))
document.write(`Nome: ${nome} <br>`)
document.write(`Idade: ${idade} <br>`)
document.write(`Salário: ${salario} <br>`)
document.write(`Sexo: ${sexo} <br>`)
document.write(`Estado Civil: ${estadoCivil} <br>`)


5- 

