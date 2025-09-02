function gerarNumeros() {
  const numeros = Array.from({ lenght: 10 }, () => Math.floor(Math.random() * 100) + 1);
  const pares = numeros.filter((n) => n % 2 === 0).length;
  const impares = numeros.length - pares;
  const numerosEl = document.getElementById("numeros");
  const paresEl = document.getElementById("pares");
  const imparesEl = document.getElementById("impares");

  numerosEl.textContent = `Números sorteados: ${numeros.join(", ")}`;
  paresEl.textContent = `Quantidade de pares: ${pares}`;
  imparesEl.textContent = `Quantidade de impares: ${impares}`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", gerarNumeros);
  gerarNumeros();
});
