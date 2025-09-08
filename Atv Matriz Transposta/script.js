document.addEventListener("DOMContentLoaded", () => {
  // Matriz 2x3
  let matriz = [
    [1, 2, 3],
    [4, 5, 6]
  ];

  // Calcular transposta (3x2)
  let transposta = [];
  for (let i = 0; i < matriz[0].length; i++) {
    transposta[i] = [];
    for (let j = 0; j < matriz.length; j++) {
      transposta[i][j] = matriz[j][i];
    }
  }

  // Função para gerar tabela HTML
  function renderTabela(m) {
    let html = "<table>";
    for (let i = 0; i < m.length; i++) {
      html += "<tr>";
      for (let j = 0; j < m[i].length; j++) {
        html += `<td>${m[i][j]}</td>`;
      }
      html += "</tr>";
    }
    html += "</table>";
    return html;
  }

  // Mostrar na tela
  document.getElementById("original").innerHTML = renderTabela(matriz);
  document.getElementById("transposta").innerHTML = renderTabela(transposta);
});