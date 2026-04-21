function adicionar(valor) {
  document.getElementById("display").value += valor;
}

function limpar() {
  document.getElementById("display").value = "";
}

function calcular() {
  let resultado = document.getElementById("display").value;
  document.getElementById("display").value = eval(resultado);
}
