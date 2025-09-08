let numeros = [];

    function adicionarNumero() {
      const input = document.getElementById("numero");
      const valor = parseFloat(input.value);

      if (isNaN(valor)) {
        alert("Digite um número válido!");
        input.value = "";
        input.focus();
        return;
      }

      numeros.push(valor); // adiciona ao array
      input.value = "";
      input.focus();

      // se digitou 0, processa com while
      if (valor === 0) {
        let soma = 0;
        let i = 0;

        while (i < numeros.length - 1) { // -1 para não contar o 0
          soma += numeros[i];
          i++;
        }

        document.getElementById("resultado").innerText = "Somatório final: " + soma;
        input.disabled = true; // bloqueia input
      }
    }