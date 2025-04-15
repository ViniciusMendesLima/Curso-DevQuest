// const pessoas = ["Roberto", "Ricardo", "Raphael"];

// console.log(
//   ...pessoas
// ); 

// let grupo1 = ["Roberto", "Ricardo", "Raphael"];
// let grupo2 = ["Pablo", "Lizzy", "Jazmin", "Ruby"];

// grupo1 = [...grupo1, ...grupo2];

// console.log(grupo1);



let personagem = {
  nome: "Valquiria",
  idade: 756,
  altura: 1.56,
  arma: "Adaga",
};

let cloneDoPersonagem = { ...personagem };

console.log(personagem);
console.log(cloneDoPersonagem);
