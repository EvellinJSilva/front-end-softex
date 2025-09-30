class Pessoa {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    apresentar(): string {
        return `Olá, meu nome é ${this.nome}`;
    }
}

const inputNome = document.getElementById("nomeInput") as HTMLInputElement;
const btnApresentar = document.getElementById("btnApresentar") as HTMLButtonElement;
const mensagem = document.getElementById("mensagem") as HTMLParagraphElement;

btnApresentar.addEventListener("click", () => {
    const nomeDigitado = inputNome.value.trim();

    if (nomeDigitado) {
        const pessoa = new Pessoa(nomeDigitado);
        mensagem.textContent = pessoa.apresentar();
    } else {
        mensagem.textContent = "Por favor, digite um nome!";
    }
});