// function colocarAguaPraFerver() {
//   console.log("Colocou a água para ferver");
// }

// function prepararPraPassarCafe() {
//   console.log("Pegou o pó de café");
//   console.log("Pegou o filtro");
//   console.log("Colocou o café no filtro");
//   console.log("Colocou o filtro em cima da xícara");
// }

// function passarCafe() {
//   console.log("Passou o café");
// }

// colocarAguaPraFerver();
// prepararPraPassarCafe();
// passarCafe();


function colocarAguaPraFerver() {
  console.log("Colocou a água para ferver");

  setTimeout(() => { // Essa função será executada após 4000 milisegundos (4 segundos)
    console.log("Água ferveu");
    passarCafe();
  }, 4000);
}

function prepararPraPassarCafe() {
  console.log("Pegou o pó de café");
  console.log("Pegou o filtro");
  console.log("Colocou o café no filtro");
  console.log("Colocou o filtro em cima da xícara");
}

function passarCafe() {
  console.log("Passou o café");
}

colocarAguaPraFerver();
prepararPraPassarCafe();



