class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade:number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): string {
        return `Olá! Meu nomé é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

const aluno1 = new Pessoa("Ana", 20);
console.log(aluno1.apresentar());