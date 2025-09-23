class ContaBancaria {
    #saldo = 0;

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`Depósito de R$ ${valor} realizado.`);
        } else {
            console.log("Depósito inválido.");
        }
    }

    sacar(valor) {
        if (valor <= 0) {
            console.log("Saque inválido.");
        } else if (valor > this.#saldo) {
            console.log("Saldo insuficiente");
        } else {
            this.#saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado.`);
        }
    }

    verSaldo() {
        return this.#saldo;
    }
}

const conta = new ContaBancaria();
conta.depositar(100);
conta.sacar(30);
console.log("Saldo atual: R$ " + conta.verSaldo());