function gerarMatriz() {
  let matriz = [];
  for (let i = 0; i < 4; i++) {
    matriz[i] = [];
    for (let j = 0; j < 4; j++) {
      matriz[i][j] = Math.floor(Math.random() * 100) + 1;
    }
  }
  return matriz;
}

function mostrarResultado() {
  let matriz = gerarMatriz();
  let diagonal = [];

  for (let i = 0; i < 4; i++) {
    diagonal.push(matriz[i][i]);
  }

  let textoMatriz = "Matriz 4x4:<br>";
  for (let i = 0; i < 4; i++) {
    textoMatriz += matriz[i].join(" | ") + "<br>";
  }

  document.getElementById("matriz").innerHTML = textoMatriz;
  document.getElementById("diagonal").textContent =
    "Diagonal principal: " + diagonal.join(", ");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", mostrarResultado);
  mostrarResultado();
});
