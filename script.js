/* Escreva uma função que receba um array de números e retorne o terceiro maior e o terceiro menor elemento desse array.
Por exemplo, se o array for [1, 2, 3, 4, 5,6,7], a função deve retornar [3,5]. */


function CompararNumeros() {
    // criação de array onde os números criados pelo usuário serão armazenados
    var listaNumeros = [];

    // variável booleano responsável pelo laço de repetição q será criado
    var receberNumero = true;


    // Laço de repetição para o usuário informar os números 
    while (receberNumero) {

        // duas variáveis estão sendo criadas, uma para guardar o valor do número digitado e outro para definir status do laço while
        var numero = parseInt(prompt("Olá, por favor informe um número:"));
        var opcaoUsuario = parseInt(prompt("Perfeito. Deseja informar mais um número?\n1 - Sim\n2 - Não"));

        // aqui o número está entrando para o array listaNumeros
        listaNumeros.push(numero)

        // lógica para parar o while 
        if (opcaoUsuario == 2) {
            receberNumero = false
        }
    }

    alert("Ok, números armazenados.");

    // Aqui está sendo criado uma variável onde os números estão sendo ordenados de forma crescente, através da função sort
    var listaNumerosOrdenados = listaNumeros.sort((a, b) => a - b);

    // variavéis para armazenar o terceiro maior e menor valor
    var terceiroNumeroMaior = listaNumerosOrdenados[2];
    var terceiroNumeroMenor = listaNumerosOrdenados[listaNumerosOrdenados.length - 3]

    alert(`O terceiro número maior informado é ${terceiroNumeroMaior}. O terceiro número menor é ${terceiroNumeroMenor}`);

    // variável para o usuário definir se quer comparar outros números ou não.
    var escolhaContinuarUsuario = parseInt(prompt("Deseja comparar outros números? Digite 1 para sim."))
    if (escolhaContinuarUsuario == 1) {
        CompararNumeros();
    }
}

CompararNumeros();