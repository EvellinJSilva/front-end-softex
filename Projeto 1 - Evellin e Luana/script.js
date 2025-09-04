const form = document.getElementById("formAluno");
const tabela = document.getElementById("tabelaAlunos");
const tabelaContainer = document.getElementById("tabelaContainer");

function calcularMedia(n1, n2, n3) {
  return ((n1 + n2 + n3) / 3).toFixed(2);
}

function determinarSituacao(media) {
  if (media >= 7) return "Aprovado";
  else if (media >= 5) return "Recuperação";
  else return "Reprovado";
}

function obterClasseSituacao(situacao) {
  if (situacao === "Aprovado") return "aprovado";
  if (situacao === "Recuperação") return "recuperacao";
  return "reprovado";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);

  if ([nota1, nota2, nota3].some((n) => isNaN(n) || n < 0 || n > 10)) {
    alert("Por favor, insira notas válidas entre 0 e 10.");
    return;
  }

  const media = parseFloat(calcularMedia(nota1, nota2, nota3));
  const situacao = determinarSituacao(media);
  const classeSituacao = obterClasseSituacao(situacao);

  // Mostrar a tabela se ainda estiver oculta
  tabelaContainer.style.display = "block";

  const novaLinha = document.createElement("tr");
  novaLinha.classList.add(classeSituacao);
  novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${nota1.toFixed(1)}, ${nota2.toFixed(1)}, ${nota3.toFixed(1)}</td>
        <td>${media}</td>
        <td>${situacao}</td>
      `;

  tabela.appendChild(novaLinha);
  form.reset();
});
