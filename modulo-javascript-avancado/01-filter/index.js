let pessoas = [
  { nome: "Eu", idade: 33 },
  { nome: "Lizzy", idade: 33 },
  { nome: "Roberto", idade: 27 },
];

// let pessoasComIdadeDe33Anos = []
// for(let i = 0; i < pessoas.length; i++){
//   if(pessoas[i].idade === 33){
//     pessoasComIdadeDe33Anos.push(pessoas[i])
//   }
// }

// console.log(pessoasComIdadeDe33Anos);

let pessoasComIdadeDe33Anos = pessoas.filter((pessoas) =>  pessoas.idade === 33
)

console.log(pessoasComIdadeDe33Anos);