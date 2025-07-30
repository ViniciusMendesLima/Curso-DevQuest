// Declaração de uma tupla
let pessoa: [string, number]; // Tupla com string na posição 0 e number na posição 1

// Inicialização correta
pessoa = ['João Silva', 30]; // ✅

// Inicialização incorreta
pessoa = [30, 'João Silva']; // ❌ Erro: Tipos na ordem errada
pessoa = ['João Silva', 30, true]; // ❌ Erro: Muitos elementos