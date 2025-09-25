class Animal {
    falar() {
        console.log("O animal faz um som.");
    }
}

class Cachorro extends Animal {
    falar() {
        console.log("Au, Au");
    }
}

class Gato extends Animal {
    falar() {
        console.log("Miau, Miau");
    }
}

const animais: Animal[] = [
    new Cachorro(),
    new Gato(),
    new Animal()
];

animais.forEach((animal, i) => {
    console.log(`Animal ${i + 1}:`);
    animal.falar()
})