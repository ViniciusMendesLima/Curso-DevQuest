let usuario = {
    nome: 'Vinícius',
    excluir:function(){
        console.log('o usuário, '+ this.nome + ' foi excluido!')
    }
}

usuario.excluir()