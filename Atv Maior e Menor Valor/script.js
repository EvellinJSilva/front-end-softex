document.addEventListener("DOMContentLoaded", () => {
  const btnComparar = document.getElementById("btnComparar");
  const maiorEl = document.getElementById("maior");
  const menorEl = document.getElementById("menor");

  btnComparar.addEventListener("click", () => {
    //let num1 = Number(document.getElementById("num1").value);
    //let num2 = Number(document.getElementById("num2").value);
    //let num3 = Number(document.getElementById("num3").value);
    //let num4 = Number(document.getElementById("num4").value);
    //let num5 = Number(document.getElementById("num5").value);

    //if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
      //alert("Por favor, insira números válidos!");
      //return;
    //}

    //let maior = Math.max(num1, num2, num3, num4, num5);
    //let menor = Math.min(num1, num2, num3, num4, num5);

    let maior = 0;
    let menor = 0;
    let elementos = [];

    for (let i = 0; i < 5; i++) {
       elementos[i] = Number(document.getElementById(`num${i + 1}`).value);
    }

    for (let i = 0; i < elementos.length; i++) {
      if (isNaN(elementos[i])) {
        alert("Por favor, insira números válidos!");
        return;
      }
      //if (i == 0) {
       // maior = elementos[i];
        //menor = elementos[i];
      //} else {
       // maior = Math.max(maior, elementos[i]);
       // menor = Math.min(menor, elementos[i]);
      //}
    }

    maior = Math.max(...elementos);
    menor = Math.min(...elementos);

    maiorEl.innerHTML = `Maior número: <span class="negrito">${maior}</span>`;
    menorEl.innerHTML = `Menor número: <span class="negrito">${menor}</span>`;
  });
});
