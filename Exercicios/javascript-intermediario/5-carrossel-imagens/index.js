let sliderIndex = 0

sliderDivs = document.querySelectorAll(".slider")
maxSliderDivs =  sliderDivs.length-1

let prox = document.getElementById("seta-direita")
let voltar = document.getElementById("seta-esquerda")

function checarsetaprox(){
    if (sliderIndex === maxSliderDivs){
        prox.src = "images/seta direita opacidade.png"
        prox.style.pointerEvents = "none"
    }else{
        prox.src = "images/seta direita.png"
        prox.style.pointerEvents = "auto"
    }
}

function checarsetavoltar(){
    if (sliderIndex > 0){
        voltar.src = "images/seta esquerda.png"
        voltar.style.pointerEvents = "auto"
    }else{
        voltar.src = "images/seta esquerda opacidade.png"
        voltar.style.pointerEvents = "none"
    }
}

prox.addEventListener('click', () => {
    if (sliderIndex < maxSliderDivs) {
        sliderDivs[sliderIndex].classList.remove("selecionado")
        sliderIndex++
        sliderDivs[sliderIndex].classList.add("selecionado")
    }
    checarsetaprox();
    checarsetavoltar();
})

voltar.addEventListener('click', () => {
    if (sliderIndex > 0) {
        sliderDivs[sliderIndex].classList.remove("selecionado")
        sliderIndex--
        console.log("maximo "+maxSliderDivs);
        console.log(sliderIndex);
        sliderDivs[sliderIndex].classList.add("selecionado")
    }
    checarsetaprox();
    checarsetavoltar();
})


