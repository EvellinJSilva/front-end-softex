const inputTarefa = document.getElementById("inputTarefa") as HTMLInputElement;
const btnAdicionar = document.getElementById("btnAdicionar") as HTMLButtonElement;
const listaTarefas = document.getElementById("tarefas") as HTMLUListElement;

btnAdicionar.addEventListener("click", () => {
  const tarefaTexto = inputTarefa.value.trim();
  if (tarefaTexto === "") {
    alert("Digite uma tarefa antes de adicionar!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = tarefaTexto;

  const btnConcluir = document.createElement("button");
  btnConcluir.textContent = "Concluir";
  btnConcluir.classList.add("concluir");

  btnConcluir.addEventListener("click", () => {
    li.classList.toggle("concluida");
  });

  li.appendChild(btnConcluir);

  listaTarefas.appendChild(li);

  inputTarefa.value = "";
  inputTarefa.focus();
});