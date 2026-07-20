alert("Boas vindas ao jogo do número secreto!");//podemos usar " ou ' para criar uma string ( string é uma sequência de caracteres), mas é recomendado usar " para evitar erros de sintaxe.
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random()*numeroMaximo +1);//variável para armazenar o número secreto, o let é usado para criar uma variável que pode ser reatribuída, vai ser um valor guardado no computador.
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//while = enquanto..chute não for igual ao numerosecreto
while(chute != numeroSecreto){ //!= não é igual, ou seja, enquanto chute for diferente do numeroSecreto, o código dentro do while será executado.

    chute = prompt(`Digite um número entre 1 e ${numeroMaximo}`);//prompt é usado para exibir uma caixa de diálogo que solicita ao usuário que insira um valor, o valor inserido pelo usuário é armazenado na variável chute.

    //se chute for igual ao numeroSecreto, exibe a mensagem de parabéns no console do navegador.
    if(numeroSecreto == chute){
        break; //break é usado para sair do loop while quando o chute for igual ao numeroSecreto.
        
    } 
    else {   
        alert("Que pena! Você errou o número secreto.");

        if(numeroSecreto > chute){
            alert(`O número secreto é maior do que ${chute}`);
        } else {
            alert(`O número secreto é menor do que ${chute}`);
        }
    
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"; //operador ternário, se tentativas for maior que 1, palavraTentativa recebe "tentativas", caso contrário, recebe "tentativa".

alert(`Parabéns! Você acertou o número secreto! ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`); //exibe a mensagem de parabéns com o número secreto e o número de tentativas.

