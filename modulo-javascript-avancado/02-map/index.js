let pessoas = [
  { nome: "Eu", idade: 33 },
  { nome: "Lizzy", idade: 33 },
  { nome: "Roberto", idade: 27 },
];

let nomeDasPessoas = pessoas.map(pessoa => pessoa.nome + " têm " +pessoa.idade + " anos de idade"
);

console.log(nomeDasPessoas);


