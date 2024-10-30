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
