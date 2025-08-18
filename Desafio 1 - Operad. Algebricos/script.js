document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnCalcular");
    const resultado = document.getElementById("resultado");
    const mediaFinal = document.getElementById("mediaFinal");

    btn.addEventListener("click", () =>{
        let nota1 = Number(document.getElementById("nota1").value);
        let nota2 = Number(document.getElementById("nota2").value);
        let nota3 = Number(document.getElementById("nota3").value);

        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
            alert("Insira três números válidos!");
            return;
        }

        let media = (nota1 + nota2 + nota3)/3;

        mediaFinal.textContent = "Média das notas: "+media.toFixed(2);

        if (media < 5) {
            resultado.textContent = "Situação: Reprovado";
            resultado.className = "vermelho";
        } else if (media < 7) {
            resultado.textContent = "Situação: Recuperação";
            resultado.className = "amarelo";
        } else {
            resultado.textContent = "Situação: Aprovado";
            resultado.className = "verde"
        }
    });
});