import entradaDados from 'readline-sync';

function Fibonacci(numero) {
    let a = 0, b = 1;

    if (numero === a || numero === b) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    }

    let proximo = a + b;
    while (proximo <= numero) {
        if (proximo === numero) {
            return `O número ${numero} pertence à sequência de Fibonacci.`;
        }
        a = b;
        b = proximo;
        proximo = a + b;
    }

    return `O número ${numero} não pertence à sequência de fibonacci.`
}

var numero_escolhido = parseInt(entradaDados.question("Informe um número: "));

console.log(Fibonacci(numero_escolhido));
