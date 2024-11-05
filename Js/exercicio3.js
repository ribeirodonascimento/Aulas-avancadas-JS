1- Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

for(i = 0; i < 3; i++){
  var nota = parseFloat(prompt("Digite uma nota de 0 a 10"))

  if(nota >= 0 && nota <=10){
     document.write("Nota válida " + nota)
     break
}else{
  alert("Nota inválida! Digite uma nota entre 0 e 10.")
}
 }
if (i === 3) {
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
for(i = 0; i < 5; i++){
var idade = parseInt(prompt("Digite a sua idade."))
if(idade >= 0 && idade <= 150){
var salario = parseFloat(prompt("Digite o valor do seu salário."))
var sexo = String(prompt("Qual o seu sexo? digite 'M' para masculino ou 'F' para feminino."))
var estadoCivil = String(prompt("Qual o seu estado civil? digite 'S' para solteiro(a), 'C' para casado(a), 'V' para viúvo(a) ou 'D' para divorciado."))
document.write(`Nome: ${nome} <br>`)
document.write(`Idade: ${idade} <br>`)
document.write(`Salário: ${salario} <br>`)
document.write(`Sexo: ${sexo} <br>`)
document.write(`Estado Civil: ${estadoCivil} <br>`)
break
}else{
  alert("Digite uma idade entre 0 e 150.")
}
}
if(i == 5){
  alert("Você atingiu o número máximo de tentativas.")
}


5- Supondo que a população de um país A seja de 80.000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja de 200.000 habitantes com uma taxa de crescimento de 1,5%. 
   faça um programa que calcule o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

var paisA = 80.000
var txCrescA = 0.03
var paisB = 200.000
var txCrescB = 0.015
var anos = 0
while(paisA < paisB) {
  paisA += paisA * txCrescA;
  paisB += paisB * txCrescB;
  anos++;
}
document.write("O número de anos necessários para que a população de A ultrapasse ou iguale a população de B é de:", anos + " anos.");


6- Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.

var paisA = parseFloat(prompt("Informe a quantidade de habitantes do país A."))
var txCrescA = parseFloat(prompt("Informe a taxa de crescimento anual dos habitantes do país A."))
var paisB = parseFloat(prompt("Informe a quantidade de habitantes do país B."))
var txCrescB = parseFloat(prompt("Informe a taxa de crescimento anual dos habitantes do país B."))
var anos = 0
while(paisA < paisB) {
  paisA += paisA * txCrescA;
  paisB += paisB * txCrescB;
  anos++;
}
document.write("O número de anos necessários para que a população de A ultrapasse ou iguale a população de B é de: ", anos + " anos.");


7- Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que ele mostre os números um ao lado do outro.

  for(i = 1; i < 21; i++){
    document.write(i + "<br>")
}
  for(i = 1; i < 21; i++){
    document.write(i + " ")
}


8- Faça um programa que leia 5 números e informe o maior número.

  var numeros = []
    for(i = 1; i < 6; i++){
      var numero = parseInt(prompt("Digite o " + i + "º" + " número"))
      numeros.push(numero)
    }
      var maiorNumero = Math.max(...numeros)
      document.write("Os números digitados foram: " + numeros + "<br>")
      document.write("E o maior número digitado foi o " + maiorNumero + ".")


9- Faça um programa que leia 5 números e informe a soma e a média dos números.

  var numeros = []
  for(i = 1; i < 6; i++){
    var numero = parseInt(prompt("Digite o " + i + "º" + " número"))
    numeros.push(numero)
  }
    var soma = numeros[0] + numeros[1] + numeros[2] + numeros[3] + numeros[4] 
    var media = (numeros[0] + numeros[1] + numeros[2] + numeros[3] + numeros[4]) / numeros.length
    document.write("A soma dos números digitados é " + soma + " e a média é " + media + ".")


10- Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.

for(i= 0; i < 51; i++){
  if(i % 2 == 1){
    document.write(i + "<br>")
  }
}


11- Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.

  var num1 = parseInt(prompt("Digite um número"))
  var num2 = parseInt(prompt("Agora digite outro número"))
    for(i = num1 + 1; i < num2; i++){
      if(i % 1 == 0){
      document.write(i + "<br>")
  }
}


12- Altere o programa anterior para mostrar no final a soma dos números.

  var num1 = parseInt(prompt("Digite um número"))
  var num2 = parseInt(prompt("Agora digite outro número"))
  var soma = num1 + num2
    for(i = num1 + 1; i < num2; i++){
      if(i % 1 == 0){
      document.write(i + "<br>")
  }
}
document.write(`A soma dos dois numeros é : ${soma}`)


13- Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 e 10. O usuário deve informar de qual número ele deseja ver a tabuada.

  var num = parseInt(prompt("Digite o número da tabuada que você quer ver."))
    for(i = 1; i < 11; i++){
    var resultado = num * i
    document.write(num + " x " + i + " = " + resultado + "<br>" )
}

  
14- Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número elevado ao segundo número. Não utilize a função de potência da linguagem.

  var base = parseInt(prompt("Digite o valor da base."))
  var expoente = parseInt(prompt("Digite o valor do expoente."))
  var resultado = Math.pow (base,expoente) 
    document.write(`O número ${base} elevado ao número ${expoente} é igual a ${resultado}.`)


15- 
