function somar (a, b) {
    return a + b;
}

function subtrair (a, b) {
    return a - b;
}

function multiplicar (a, b) {
    return a * b;
}

function dividir (a, b) {
    if (b === 0) {
        return ("Erro: divisão por zero!");
    }
    return a / b;
}

function mostrarResultado(operacao) {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    let resultado;

    if (isNaN(n1) || isNaN(n2)) {
        resultado = "Por favor, digite dois números válidos!";
    } else {
        if (operacao === "soma") {
            resultado = somar(n1, n2);
        } else if (operacao === "subtrair") {
            resultado = subtrair(n1, n2);
        } else if (operacao === "multiplicar") {
            resultado = multiplicar(n1, n2);
        } else if (operacao === "dividir") {
            resultado = dividir(n1, n2);
        }
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}