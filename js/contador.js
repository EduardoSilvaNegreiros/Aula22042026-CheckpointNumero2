let contador = 0;

const numero = document.getElementById("numero");
const botaoInc = document.getElementById("incrementar");
const botaoDec = document.getElementById("decrementar");
const botaoZerar = document.getElementById("zerar");

function atualizarTela() {
  numero.textContent = contador;

  if (contador > 0) {
    numero.style.color = "green";
  } else if (contador < 0) {
    numero.style.color = "red";
  } else {
    numero.style.color = "black";
  }
}

botaoInc.addEventListener("click", function () {
  contador++;
  atualizarTela();
});

botaoDec.addEventListener("click", function () {
  contador--;
  atualizarTela();
});

botaoZerar.addEventListener("click", function () {
  contador = 0;
  atualizarTela();
});