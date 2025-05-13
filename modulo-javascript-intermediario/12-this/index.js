'use strict'
// console.log(this);
// console.log(window);

// this.name = 'Vinicius'
// function saudar() {
//     console.log('this no contexto da funcao', this)
//     console.log('Olá '+ this.name)
// }

// saudar()

// let usuario = {
//     nome: 'Vinicius',
//     soudar:function () {
//         console.log('this no contexto do metodo', this);

//         console.log('this.name no contexto do metodo', this.nome);
//     }
// }

// usuario.soudar()


let comida = {
    nome: 'Brócolis',
    temperatura: 0,

    cozinhar: function(tempreaturaDeCozimento){
        console.log('this no contxto do objeto comida', this);
        this.temperatura = tempreaturaDeCozimento;
    }
}

console.log(comida)

comida.cozinhar(100)

console.log(comida);


