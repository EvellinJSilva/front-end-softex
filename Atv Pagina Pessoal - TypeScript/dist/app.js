"use strict";
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    apresentar() {
        return `Olá, meu nome é ${this.nome}`;
    }
}
const inputNome = document.getElementById("nomeInput");
const btnApresentar = document.getElementById("btnApresentar");
const mensagem = document.getElementById("mensagem");
btnApresentar.addEventListener("click", () => {
    const nomeDigitado = inputNome.value.trim();
    if (nomeDigitado) {
        const pessoa = new Pessoa(nomeDigitado);
        mensagem.textContent = pessoa.apresentar();
    }
    else {
        mensagem.textContent = "Por favor, digite um nome!";
    }
});
