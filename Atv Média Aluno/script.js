function mediaAluno(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

document.addEventListener("DOMContentLoaded", () => {
    let aluno1 = [9, 6, 7];
    let aluno2 = [6, 8, 4];
    let aluno3 = [10, 9, 9];

    let m1 = mediaAluno(aluno1);
    let m2 = mediaAluno(aluno2);
    let m3 = mediaAluno(aluno3);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
    Aluno 1: Notas ${aluno1.join(", ")} e Média = ${m1.toFixed(2)}<br>
    Aluno 2: Notas ${aluno2.join(", ")} e Média = ${m2.toFixed(2)}<br>
    Aluno 3: Notas ${aluno3.join(", ")} e Média = ${m3.toFixed(2)}<br>
    `;
});