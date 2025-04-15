let ordens = [
  {
    cliente: "Roberto",
    tipo: "compra",
    quantidade: 56,
    ativo: "NFLX34",
  },
  {
    cliente: "Ricardo",
    tipo: "compra",
    quantidade: 76,
    ativo: "AAPL34",
  },
  {
    cliente: "Raphael",
    tipo: "venda",
    quantidade: 21,
    ativo: "GOGL34",
  },
];

let totalDeOrdens = ordens.reduce((ordemAnterior, ordemAtual) => ordemAnterior + ordemAtual.quantidade, 0);

console.log(totalDeOrdens);
