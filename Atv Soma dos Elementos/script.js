document.addEventListener('DOMContentLoaded', () => {
    const vetor = [5, 10, 7, 6, 14];
    let soma = 0;

    for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i];
    }

    const elementResultado = document.getElementById("resultado");
    elementResultado.textContent = soma;

});
