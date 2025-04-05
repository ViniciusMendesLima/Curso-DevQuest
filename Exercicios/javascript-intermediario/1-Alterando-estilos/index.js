/* function mudardecor(){
    let primeiraCor = document.getElementsByClassName('primeira-cor')

    console.log(primeiraCor)

    primeiraCor[0].style.backgroundColor = 'yellow';
    // mesmo que so tenha uma classe "primeira-cor" foi necessario colocar a chave[0] para fazer a alteração
} */


// outra forma de fazer seria usando o querySelector
function mudardecor() {
    let primeiraCor = document.querySelector('.primeira-cor');
    if (primeiraCor) {
        primeiraCor.style.backgroundColor = 'yellow';
    }
}