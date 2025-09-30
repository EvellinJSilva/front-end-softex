class Calculadora {
  somar(a: number, b: number): number {
    return a + b;
  }

  subtrair(a: number, b: number): number {
    return a - b;
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }

  dividir(a: number, b: number): number | string {
    if (b === 0) {
      return "Erro: divisão por zero";
    }
    return a / b;
  }
}

const num1 = document.getElementById("num1") as HTMLInputElement;
const num2 = document.getElementById("num2") as HTMLInputElement;
const resultado = document.getElementById("resultado") as HTMLParagraphElement;

const calc = new Calculadora();

function obterValores(): [number, number] {
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
