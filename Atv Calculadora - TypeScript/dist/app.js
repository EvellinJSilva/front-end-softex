"use strict";
class Calculadora {
  somar(a, b) {
    return a + b;
  }
  subtrair(a, b) {
    return a - b;
  }
  multiplicar(a, b) {
    return a * b;
  }
  dividir(a, b) {
    if (b === 0) {
      return "Erro: divisão por zero";
    }
    return a / b;
  }
}
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");
const calc = new Calculadora();
function obterValores() {
  return [Number(num1.value), Number(num2.value)];
}
document.getElementById("btnSomar")?.addEventListener("click", () => {
  const [a, b] = obterValores();
  resultado.textContent = `Resultado: ${calc.somar(a, b)}`;
});
document.getElementById("btnSubtrair")?.addEventListener("click", () => {
  const [a, b] = obterValores();
  resultado.textContent = `Resultado: ${calc.subtrair(a, b)}`;
});
document.getElementById("btnMultiplicar")?.addEventListener("click", () => {
  const [a, b] = obterValores();
  resultado.textContent = `Resultado: ${calc.multiplicar(a, b)}`;
});
document.getElementById("btnDividir")?.addEventListener("click", () => {
  const [a, b] = obterValores();
  resultado.textContent = `Resultado: ${calc.dividir(a, b)}`;
});
