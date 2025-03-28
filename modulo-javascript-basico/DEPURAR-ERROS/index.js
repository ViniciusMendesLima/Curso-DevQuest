function calcularFatoria(numero) {
    let resultado = 1

    for (let i = 1; i <= numero; i++){
        resultado *= i;
    }

    return resultado
}

function imprimirFatorial(numero){
    const ehUmNumeroNegativo = numero < 0;
    if (ehUmNumeroNegativo) {
        console.log('Não é possívle calcular o fatorial de um número negativo');
        
    }else{
        const fatorial = calcularFatoria(numero);
        console.log(`O fatorila de ${numero} e ${fatorial}`);
    }
}

const numero = -5
imprimirFatorial(numero)