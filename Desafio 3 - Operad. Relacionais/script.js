document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnComparar");
    const maiorEl = document.getElementById("maior");
    const menorEl = document.getElementById("menor");
    const igualEl = document.getElementById("igual");

    btn.addEventListener("click", () => {
        let num1 = Number(document.getElementById("num1").value);
        let num2 = Number(document.getElementById("num2").value);
        let num3 = Number(document.getElementById("num3").value);

        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            alert("Por favor, insira três números válidos.");
            return;
        }  

        let maior = Math.max(num1, num2, num3);
        let menor = Math.min(num1, num2, num3);
        
        maiorEl.innerHTML = `Maior número: <span class="negrito">${maior}</span>`;
        menorEl.innerHTML = `Menor número: <span class="negrito">${menor}</span>`;
        
        if (num1 === num2 && num2 === num3) {
            igualEl.innerHTML = "Todos os números são iguais.";
        } else if (num1 === num2 || num2 === num3 || num1 === num3) {
            igualEl.innerHTML = "Existem números iguais.";
        } else {
            igualEl.innerHTML = "Todos os números são diferentes.";
        };
    });
});