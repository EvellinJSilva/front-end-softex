document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnCalcular");
  const input = document.getElementById("numero");
  const resultado = document.getElementById("resultado");

  btn.addEventListener("click", () => {
    const valor = Number(input.value);
    if (isNaN(valor)) {
      resultado.textContent = "Digite um número válido!";
      return;
    }

    let tabuada = `Tabuada do ${valor}:\n`;
    // \n significa uma quebra de linha.
    for (let i = 1; i <= 10; i++) {
      tabuada += `${valor} x ${i} = ${valor * i}\n`;
    }

    resultado.textContent = tabuada;
  });
});