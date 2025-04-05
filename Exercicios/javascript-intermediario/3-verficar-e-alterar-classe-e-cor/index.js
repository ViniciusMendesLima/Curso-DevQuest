//verificação se ele possui a classe “azul”
const clickTrocarCor = document.querySelector('main div');

clickTrocarCor.addEventListener("click", trocarCor)


function trocarCor(){
    if(clickTrocarCor.classList.contains("azul")){
        
        clickTrocarCor.classList.remove("azul")
        clickTrocarCor.classList.add("preto")

    }else{
        clickTrocarCor.classList.add("azul")
        clickTrocarCor.classList.remove("preto")
    }
}
