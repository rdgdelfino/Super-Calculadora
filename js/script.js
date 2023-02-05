function start() {
  var buttonCalcular = document.querySelector("#calcular");
  buttonCalcular.addEventListener("click", handleButtonClick);

  var inputA = document.querySelector("#inputA");
  var inputB = document.querySelector("#inputB");

  inputA.addEventListener("input", handleButtonClick);
  inputB.addEventListener("input", handleButtonClick);

  handleButtonClick();
  console.log("Teste no console do JavaScript!");
}

function handleButtonClick() {
  var inputA = document.querySelector("#inputA");
  var inputB = document.querySelector("#inputB");
  var A = inputA.valueAsNumber;
  var B = inputB.valueAsNumber;

  soma(A, B);
  subtracaoAB(A, B);
  subtracaoBA(A, B);
  multiplicacao(A, B);
  divisaoAB(A, B);
  divisaoBA(A, B);
  potenciaAB(A, B);
  potenciaBA(A, B);
  raizA(A);
  raizB(B);
  fatorialA(A);
  fatorialB(B);
  porcentagemAB(B, A);
  porcentagemBA(B, A);
  media(A, B);
}

function soma(A, B) {
  resSoma = document.querySelector("#soma-resultado");
  resSoma.textContent = A + B;
  return A + B;
}

function subtracaoAB(A, B) {
  resSubAB = document.querySelector("#resSubAB");
  resSubAB.textContent = A - B;
  return A - B;
}

function subtracaoBA(A, B) {
  resSubBA = document.querySelector("#resSubBA");
  resSubBA.textContent = B - A;
  return B - A;
}

function multiplicacao(A, B) {
  resMulti = document.querySelector("#resMulti");
  resMulti.textContent = A * B;
}

function divisaoAB(A, B) {
  resDivAB = document.querySelector("#resDivAB");
  resDivAB.textContent = (A / B).toFixed(2);
  return A / B;
}

function divisaoBA(A, B) {
  resDivAB = document.querySelector("#resDivBA");
  resDivAB.textContent = B / A;
  return B / A;
}
function potenciaAB(A, B) {
  resPotAB = document.querySelector("#resPotAB");
  resPotAB.textContent = A ** B;
}
function potenciaBA(A, B) {
  resPotAB = document.querySelector("#resPotBA");
  resPotAB.textContent = B ** A;
}

function raizA(A) {
  resRaizA = document.querySelector("#resRaizA");
  resRaizA.textContent = Math.sqrt(A).toFixed(2);
}

function raizB(B) {
  resRaizB = document.querySelector("#resRaizB");
  resRaizB.textContent = Math.sqrt(B).toFixed(2);
}

function fatorialA(A) {
  resFatA = document.querySelector("#resFatA");
  resFatA.textContent = calcularFatorial(A);
}

function fatorialB(B) {
  resFatB = document.querySelector("#resFatB");
  resFatB.textContent = calcularFatorial(B);
}

function calcularFatorialRecursivamente(n) {
  if (n === 1) {
    return 1;
  }

  return n * calcularFatorialRecursivamente(n - 1);
}

function calcularFatorial(fatorial) {
  if (isNaN(fatorial)) {
    return "Não existe fatorial de um texto";
  }

  if (!Number.isInteger(fatorial) || fatorial < 0) {
    return "Não existe fatorial de um número não natural";
  }

  if (fatorial === 0 || fatorial === 1) {
    return 1;
  }

  return calcularFatorialRecursivamente(fatorial);
}
// function factorializeB(B) {
//   var result = B;
//   if (B === 0 || B === 1) return 1;
//   while (B > 1) {
//     B--;
//     result *= B;
//   }
//   return result;
// }

function porcentagemAB(A, B) {
  resPercAB = document.querySelector("#resPercAB");
  resPercAB.textContent = divisaoAB(A, B) * 100;
}

function porcentagemBA(A, B) {
  resPercBA = document.querySelector("#resPercBA");
  resPercBA.textContent = divisaoBA(A, B) * 100;
}

function media(A, B) {
  resMedia = document.querySelector("#resMedia");
  resMedia.textContent = soma(A, B) / 2;
}

start();
