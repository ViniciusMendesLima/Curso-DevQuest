
function incentivarQuesters(mensagem, ...nomesQuesters) {
  nomesQuesters.map((nomeQuester) => console.log(`${mensagem} ${nomeQuester}`));
}

incentivarQuesters(
  "Parabéns por ter chegado ao módulo de JavaScript avançado,",
  "Pablo",
  "Lizzy",
  "Ricardo",
  "Roberto"
);
