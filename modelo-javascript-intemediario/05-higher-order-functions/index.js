// const calcularAnoDeNascimento = function(idade, mesDeNascimento, imprimir){
//     const mesAtual = 2
//     let anoDeNascimento = 2025 - idade
//     if(mesDeNascimento > mesAtual) anoDeNascimento--
//     imprimir(anoDeNascimento)
// }

// let imprimiAnoDeNascimento = anoDeNascimento => {
//     console.log('Seu ano de nascimento é: ' + anoDeNascimento);
    
// }

// calcularAnoDeNascimento(33, 8, imprimiAnoDeNascimento)

function multiplicar(multipicador){
    return function(numero){
        return numero * multipicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)


console.log(dobrar(3))
console.log(triplicar(3))
console.log(quadruplicar(3))

