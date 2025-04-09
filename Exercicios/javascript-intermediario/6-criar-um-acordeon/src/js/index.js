const botoes = document.querySelectorAll('.caixa-texto');

botoes.forEach(botao => {
    botao.addEventListener('click', function (event) {
        const caixaTexto = event.currentTarget.closest('.caixa-texto');
        const paragrafo = caixaTexto.querySelector(".texto")
        const seta = caixaTexto.querySelector(".seta")

        const paragrafoFechado = paragrafo.classList.contains("esconder");
        
        resetarParagrafosESetas();

        if (paragrafoFechado) {           
            paragrafo.classList.replace("esconder", "mostrar");
            seta.classList.replace("seta-sem-cor", "seta-com-cor");
        }
       
    });
});


function resetarParagrafosESetas(){

    document.querySelectorAll('.texto').forEach(paragrafo => {
        paragrafo.classList.replace("mostrar", "esconder");
    });

    document.querySelectorAll('.seta').forEach(seta => {
        seta.classList.replace("seta-com-cor", "seta-sem-cor");
    });
}