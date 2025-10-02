class Paciente {
  constructor(public descricao: string) {}
}

class ListaDeTarefas {
  private listaPendentes: HTMLUListElement;
  private listaConcluidas: HTMLUListElement;
  private inputText: HTMLInputElement;
  private inputNumber: HTMLInputElement;
  private select: HTMLSelectElement;
  private botaoCadastrar: HTMLButtonElement;

  constructor() {
    this.listaPendentes = document.getElementById("tabelaPacientes") as HTMLUListElement;
    this.listaConcluidas = document.getElementById("listaConcluidas") as HTMLUListElement;
    this.inputText = document.getElementById("nomeInput emailInput") as HTMLInputElement;
    this.inputNumber = document.getElementById("telefoneInput") as HTMLInputElement;
    this.select = document.getElementById("especialidade") as HTMLSelectElement;
    this.botaoCadastrar = document.getElementById("btnCadastrar") as HTMLButtonElement;

    this.botaoCadastrar.addEventListener("click", () => this.adicionarTarefa());
  }

  private criarElementoTarefa(tarefa: Paciente): HTMLLIElement {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = tarefa.descricao;

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        this.moverParaConcluidas(li, span.textContent || "");
      }
    });

    li.appendChild(checkbox);
    li.appendChild(span);

    return li;
  }

  private moverParaConcluidas(li: HTMLLIElement, descricao: string): void {
    // Remove da lista de pendentes
    if (this.listaPendentes.contains(li)) {
      this.listaPendentes.removeChild(li);
    }

    const liConcluida = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = descricao;

    // Botão para excluir permanentemente
    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.classList.add("excluir");
    btnExcluir.addEventListener("click", () => {
      this.listaConcluidas.removeChild(liConcluida);
    });

    liConcluida.appendChild(span);
    liConcluida.appendChild(btnExcluir);

    this.listaConcluidas.appendChild(liConcluida);
  }

  private adicionarTarefa(): void {
    const texto = this.inputText.value.trim();
    if (texto === "") {
      alert("Digite uma tarefa antes de adicionar!");
      return;
    }

    const novaTarefa = new Paciente(texto);
    const li = this.criarElementoTarefa(novaTarefa);
    this.listaPendentes.appendChild(li);

    this.inputText.value = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ListaDeTarefas();
});