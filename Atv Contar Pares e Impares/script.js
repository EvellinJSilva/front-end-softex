document.addEventListener("DOMContentLoaded", () => {

  function gerarNumeros() {
  //const numeros = Array.from({ lenght: 10 }, () => Math.floor(Math.random() * 100) + 1);

  let numeros = [];

  for (let i = 0; i < 10; i++) {
    numeros[i]  = Math.floor(Math.random() * 100) + 1;
  }

  //const pares = numeros.filter((n) => n % 2 === 0).length;
  let pares = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares = pares + 1;
    }
  }
  const impares = numeros.length - pares;
  const numerosEl = document.getElementById("numerosSorteados");
  const paresEl = document.getElementById("pares");
  const imparesEl = document.getElementById("impares");

  numerosEl.textContent = `Números sorteados: ${numeros.join(", ")}`;
  paresEl.textContent = `Quantidade de pares: ${pares}`;
  imparesEl.textContent = `Quantidade de impares: ${impares}`;
}
  document.getElementById("btn").addEventListener("click", gerarNumeros);
});
