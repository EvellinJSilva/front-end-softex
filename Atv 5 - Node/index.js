class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    descricao() {
        return `Funcionário ${this.nome}, Salário: R$ ${this.salario}.`;
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
        super(nome, salario);
        this.departamento = departamento;
    }

    descricao() {
        return `Gerente ${this.nome}, Salário: R$ ${this.salario}, Departamento: ${this.departamento}.`;
    }
}

const func1 = new Funcionario("Eduardo", 5000);
console.log(func1.descricao());
const ger1 = new Gerente("Luisa", 7000, "Vendas");
console.log(ger1.descricao());