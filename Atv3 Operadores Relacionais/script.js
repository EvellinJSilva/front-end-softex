document.addEventListener("DOMContentLoaded", () => {
    const btn=document.getElementById("btnComparar");
    const maiorEl=document.getElementById("maior");
    const menorEl=document.getElementById("menor");
    const igualEl=document.getElementById("igual");

    btn.addEventListener("click", () => {
        let num1=Number(document.getElementById("num1").value);
        let num2=Number(document.getElementById("num2").value);

        if(isNaN(num1) || isNaN(num2)) {
            alert("Por favor, insira dois números válidos.");
            return;
        }
        
        if (num1>num2) {
            maiorEl.innerHTML=`Maior número: <span class="negrito">${num1}</span>`;
            menorEl.innerHTML=`Menor número: ${num2}`;
            igualEl.innerHTML="";
        } else if (num2>num1) {
            maiorEl.innerHTML=`Maior número: <span class="negrito">${num2}</span>`;
            menorEl.innerHTML=`Menor número: ${num1}`;
            igualEl.innerHTML="";
        } else {
            maiorEl.innerHTML="";
            menorEl.innerHTML="";
            igualEl.innerHTML="Os dois números são iguais.";
        }
    });
});