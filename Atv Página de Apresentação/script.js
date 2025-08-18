function apresentar() {
    let nome = "Évellin Janaíse";
    let hobby = "aprender programação";

    const paragrafo = document.getElementById("mensagem");
    paragrafo.textContent = "Olá, eu me chamo " +nome+ ", e gosto muito de " +hobby+ "!"; 
}