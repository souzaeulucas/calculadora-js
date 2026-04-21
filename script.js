let display = document.getElementById("display");

function adicionar(valor) {
  display.value += valor;
}

function limpar() {
  display.value = "";
}

function apagar() {
  display.value = display.value.slice(0, -1);
}

function calcular() {
  try {
    display.value = Function("return " + display.value)();
  } catch {
    display.value = "Erro";
  }
}

document.addEventListener("keydown", function(event) {
  if (!isNaN(event.key) || "+-*/.".includes(event.key)) {
    adicionar(event.key);
  } else if (event.key === "Enter") {
    calcular();
  } else if (event.key === "Backspace") {
    apagar();
  } else if (event.key === "Escape") {
    limpar();
  }
});
