const calcularValorPedido = require('./calcular-valor-pedido');

it('não deve cobrar valor de frete quando valor dos produtos for superior a 500', ()=> {
    const meuPedido = {
        // AAA - 3 passos de criação de um teste

        // ARRANG - ARRUMAR
      itens: [
        { nome: 'Arco encantado', valor: 2000 },
        { nome: 'Entrega', valor: 100, entrega: true }
    ]
}   // ACT - AÇÃO - O QUE VAI SER TESTADO
    const resultado =  calcularValorPedido(meuPedido);

    // ASSERT - ASSERÇÃO - QUAL E O RESULTADO ESPERADO
    expect(resultado).toBe(2000)
})

it('deve cobrar valor de frete quando valor dos produtos for menor que 500',() =>{
    // ARRANGE
    const meuPedido = {
        // AAA - 3 passos de criação de um teste

        // ARRANG - ARRUMAR
      itens: [
        { nome: 'sANDUICHE', valor: 50 },
        { nome: 'Entrega', valor: 100, entrega: true }
    ]
};
    // ACT

    const resultado = calcularValorPedido(meuPedido)

    // ASSERT
    expect(resultado).toBe(150);
});

it('deve cobar valor de frete caso valor dos produtos seja EXATAMENTE 500',() => {
    // ARRANGE
        const meuPedido = {
        // AAA - 3 passos de criação de um teste

        // ARRANG - ARRUMAR
      itens: [
        { nome: 'Sanduíche bem caro', valor: 500 },
        { nome: 'Entrega', valor: 100, entrega: true }
    ]
};
    // ACT
    const resultado = calcularValorPedido(meuPedido)

    expect(resultado).toBe(600)
})/

//casos os estados de entrega sejam rs ou sc, deve ser acrescido um valor de 30% na entrega
it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja RS', () =>{
    const pedidoComEstadoRS = {
        estado: 'RS',
      itens: [
        { nome: 'Sanduíche bem caro', valor: 500 },
        { nome: 'Entrega', valor: 100, entrega: true }
    ]
};
    const resultado = calcularValorPedido(pedidoComEstadoRS)

    expect(resultado).toBe(620)
})

it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SC', () =>{
    const pedidoComEstadoRS = {
        estado: 'SC',
      itens: [
        { nome: 'Sanduíche bem caro', valor: 500 },
        { nome: 'Entrega', valor: 100, entrega: true }
    ]
};
    const resultado = calcularValorPedido(pedidoComEstadoRS)

    expect(resultado).toBe(620)
})

it(' na deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SP', () =>{
    const pedidoComEstadoRS = {
        estado: 'SP',
      itens: [
        { nome: 'Sanduíche bem caro', valor: 500 },
        { nome: 'Entrega', valor: 100, entrega: true }
    ]
};
    const resultado = calcularValorPedido(pedidoComEstadoRS)

    expect(resultado).toBe(600)
})