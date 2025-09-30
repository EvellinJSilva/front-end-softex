"use strict";
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    desconto(porcentagem) {
        let valorDesconto = (this.preco * porcentagem) / 100;
        return this.preco - valorDesconto;
    }
}
let produto1 = new Produto("Tênis", 200);
console.log("Produto:", produto1.nome);
console.log("Preço original: R$ ", produto1.preco);
console.log("Preço com 10% de desconto: R$ ", produto1.desconto(10));
