

// setTimeout(function () {
//   alert("testando o alert a 2 segundos");
// }, 2000);


// setInterval(() => {
//   alert("testando o alert a cada 3 segundos");
// }, 3000);

/* >>> Para parar a execução do setInterval ou setTimeout utilizamos a função clearInterval ou clearTimeout. Para isso é necessário que a função setInterval ou setTimeout esteja armazenada em uma variável:

*/
const idDoIntervalo = setInterval(() => {
  alert("testando o alert a cada 3 segundos");
}, 3000);

console.log(idDoIntervalo) // Output: 1
clearInterval(idDoIntervalo)

