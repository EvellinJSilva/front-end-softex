document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnContar");
    const resultado = document.getElementById("resultado");

    btn.addEventListener("click", () => {
        let numero = 10;
        let texto = "";

        while (numero >= 1) {
            texto += numero + "\n";
            numero--;
        }

        resultado.textContent = texto;
    });
});