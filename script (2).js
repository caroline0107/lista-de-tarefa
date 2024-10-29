

const novaTarefa = document.querySelector("#input_id");
const botaoAdd  = document.getElementById("botao_add_od");
const  formulario =document.getElementById9("form_id");
const listaDeTarefas = document.getElementById("lista_id");
const  botaoMarca = document.getElementById("botao_Marca_id");
const botaoLimpa = document.getElementById("botao_limpa-id");




botaoAdd.addEventListener ("click", (event) => {
  event.preventDefault();

const elementolista = documento.createElement("Li");
const  textoTarefa =  document.createElement ("p");
const iconeDelete = document.createElement ("span");

textoTarefa.innerText = novaTarefa.vacue;
iconeDelete.innerText = ""

if  (textoTarefa.innerText.trim() ===  "") {
 alert("Voce precisa digitar alguma coisa !");

} else {
listaDeTarefas.appendChild(elementolista);
elementolista.appendChild(textoTarefa);
elementoLista.appendChild(iconeDelete)
formulario.reset();
}
novaTarefa.focus();


textoTarefa.addEventListener("click", () =>{

textoTarefa.classList.toggle("checked");
verificarMarcados();
});


iconeDeleta.addEventListener("click" , () => {

elementolista.remove();
});
verificarMarcados();
});



botaoMarca.addEventListener("click" ,() => {
let todasAsTarefas = document.querySelectorAll("p");

if (botaoMarca.innerText === "Marcar todos") {
 todasAsTarefas.forEach((tarefa) => {
tarefa.classList.add("checked");
 });
botaoMarca.innerText = "Desmarcar todos";
} else {
    todasAsTarefas.forEach((Tarefas) => {
  tarefas.classList.remove("checked");
    });
    botaoMarca.innerText = "Marcar todos";
}
});



botaoLimpa.addEventListener("click", () => {
    listaDeTarefas.innerHTML = "";
});




function verificarMarcados() {
    let todasAsTarefas = DOCUMENT.querySelectorAll("p");
    let verificacao = []; 

todasAsTarefas.forEach((tarefa) => {

if (tarefa.classList.contains("checked")) {

verificacao.push(tarefa);
}
});


if ( verificacao.length === 0 && todasAsTarefas) {

botaoMarca.innerText= "Desmarcar todos";
} else {

botaoMarca.innerText ="Marcar todos "
}
}



