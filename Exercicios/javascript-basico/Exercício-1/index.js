
function digitarNome() {
    const nome = prompt()
    if(nome === null || nome === ''){
        alert('Obrigatorio digitar um nome')
    }else{
        mensagem(nome) 
    }
}

function mensagem(nome){
    alert('Seja bem vindo(a) ' + nome)
}

digitarNome()

RESOLUÇÃO

// const nomeDoUsuario = prompt('Digite seu nome: ')

// alert('Seja bem vindo(a) '+ nomeDoUsuario + '!')