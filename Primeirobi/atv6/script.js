// script.js - Cálculo de Gorjeta com Funções

// 1. Valores iniciais
const valorConta = 100;        // valor da conta em reais
const percentualGorjeta = 15;  // percentual da gorjeta

// 2. Função para calcular gorjeta
function calcularGorjeta(conta, percentual) {
  return conta * (percentual / 100);
}

// 3. Função para calcular total
function calcularTotal(conta, gorjeta) {
  return conta + gorjeta;
}

// 4. Função para exibir resultado
function exibirResumo(conta, percentual) {
  const gorjeta = calcularGorjeta(conta, percentual);
  const total = calcularTotal(conta, gorjeta);

  console.log(
    `Valor da Conta: R$${conta.toFixed(2)}, ` +
    `Gorjeta (${percentual}%): R$${gorjeta.toFixed(2)}, ` +
    `Total a pagar: R$${total.toFixed(2)}`
  );
}

// Executa a função
exibirResumo(valorConta, percentualGorjeta);
