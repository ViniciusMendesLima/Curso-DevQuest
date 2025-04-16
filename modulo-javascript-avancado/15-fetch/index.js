document.getElementById('shuffle-btn').addEventListener('click', ()=>{
  tirarUmaCartaDoBaralho();
})

async function criaBaralhoEmbaralhado(){
  const url = `https://www.deckofcardsapi.com/api/deck/new/shuffle/?draw/?count=1`;
  const resposta = await fetch(url)
  return await resposta.json();
}

async function tirarUmaCarta(deck_id) {
  const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
  const resposta = await fetch(url);
  return await resposta.json();
}

async function tirarUmaCartaDoBaralho(){
  const baralho = await criaBaralhoEmbaralhado();
  const carta = await tirarUmaCarta(baralho.deck_id);
  const imageCarta = carta.cards[0].image;
  document.getElementById('carta').src = imageCarta;
}

tirarUmaCartaDoBaralho();


// document.getElementById('shuffle-btn').addEventListener('click',async ()=>{
//   await tirarUmaCartaDoBaralho(baralho);
//  })
 
//  async function criaBaralhoEmbaralhado(){
//    const url = `https://www.deckofcardsapi.com/api/deck/new/shuffle/?draw/?count=1`;
//    const resposta = await fetch(url)
//    return await resposta.json();
//  }
 
//  async function tirarUmaCarta(deck_id) {
//    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
//    const resposta = await fetch(url);
//    return await resposta.json();
//  }
 
//  async function tirarUmaCartaDoBaralho(baralho){
//    const carta = await tirarUmaCarta(baralho.deck_id);
//    const imageCarta = carta.cards[0].image;
//    document.getElementById('carta').src = imageCarta;
//  }
 
//  let baralho = null;
 
//  window.addEventListener('DOMContentLoaded', async () => {
//    baralho = await criaBaralhoEmbaralhado();
 
//    await tirarUmaCartaDoBaralho(baralho)
//  })
 
//  tirarUmaCartaDoBaralho();

