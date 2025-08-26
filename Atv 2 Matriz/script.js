document.addEventListener("DOMContentLoaded", () => {
    let notasAlunos = [
        [7, 8, 6],
        [9, 5, 8],
        [6, 7, 7],
        [10, 6, 8]
    ];

    const tabela = document.querySelector("#tabelaNotas tbody");

    for (let i = 0; i < notasAlunos.length; i++) {
        let linha = document.createElement("tr");

        let celAluno = document.createElement("td");
        celAluno.textContent = `Aluno ${i+1}`;
        linha.appendChild(celAluno);

        let soma = 0;
        for (let j = 0; j < notasAlunos[i].length; j++) {
            let celNota = document.createElement("td");
            celNota.textContent = notasAlunos [i] [j];
            linha.appendChild(celNota);
            soma += notasAlunos [i] [j];
        }

        let media = soma / notasAlunos[i].length;
        let celMedia = document.createElement("td");
        celMedia.textContent = media.toFixed(2);
        linha.appendChild(celMedia);

        let celSituacao = document.createElement("td");
        if (media >= 7) {
            celSituacao.textContent = "Aprovado";
            celSituacao.className = "aprovado";
        } else {
            celSituacao.textContent = "Reprovado";
            celSituacao.className = "reprovado";
        }
        
        linha.appendChild(celSituacao);

        tabela.appendChild(linha);
    }
})