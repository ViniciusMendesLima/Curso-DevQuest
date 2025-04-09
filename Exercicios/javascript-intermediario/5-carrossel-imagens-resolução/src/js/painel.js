const imagens = document.querySelectorAll(".slide");
const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");

let imagemAtual = 0;

setaAvancar.addEventListener("click", function() {
    
    if (imagemAtual === imagens.length - 1){
        return;
    }
    
    imagemAtual++;
    esconderImagemAberta();
    mostrarImagem();
    mostrarouEsconderSetas()

});

setaVoltar.addEventListener("click", function() {
    
    if (imagemAtual === 0){
        return;
    }

    imagemAtual--;
    esconderImagemAberta();
    mostrarImagem();
    mostrarouEsconderSetas()

});
function mostrarImagem() {
    imagens[imagemAtual].classList.add("mostrar");
}

function esconderImagemAberta(){
    const imagemAberta = document.querySelector(".mostrar");
    imagemAberta.classList.remove("mostrar");
}

function mostrarouEsconderSetas(){
    const nãoEhAPrimeiraImagem = imagemAtual !== 0 ;
    if (nãoEhAPrimeiraImagem) {
        setaVoltar.classList.remove("opacidade");
    } else {
        setaVoltar.classList.add("opacidade")
    }

    const chegouNaUltimaimagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1;
    if (chegouNaUltimaimagem) {
        setaAvancar.classList.add("opacidade");
    } else {
        setaAvancar.classList.remove("opacidade");
    }
}