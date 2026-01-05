// ==============================
// RESPOSTAS OFICIAIS
// ==============================
const respostas = {
  1: "olhos nunca",
  2: "devem esquecer",
  3: "testes ocorrem dentro",
  4: "organizados silenciosamente",
  5: "aperfeiçoados pela repetição",
  6: "essas normas duras",
  7: "estáveis mantidas",
  8: "absurdas",
  9: "orações bizarras",
  10: "evidenciam desgraça",
  11: "enquanto crianças entendem regras",
  12: "não é um orfanato é um sistema rotinas registros métodos crianças observadas educadas quebradas em silêncio por adultos que sobreviveram e ensinaram a obedecer ele fica afastado antigo isolado registrado fundação onde todos aprendem a obedecer"
};

// ==============================
// CONTROLE DE ENIGMAS
// ==============================
const enigmaAtual = Number(document.body.dataset.enigma);
const proximo = document.body.dataset.proximo;

// inicializa progresso
if (!sessionStorage.getItem("nivel")) {
  sessionStorage.setItem("nivel", 1);
}

// bloqueio de pulo
const nivelAtual = Number(sessionStorage.getItem("nivel"));
if (enigmaAtual !== nivelAtual) {
  window.location.href = enigmaAtual === 1 ? "index.html" : `enigma${nivelAtual}.html`;
}

// ==============================
// ELEMENTOS
// ==============================
const input = document.getElementById("codigo");
const botao = document.getElementById("enviar");
const erro = document.getElementById("erro");

// ==============================
// NORMALIZAÇÃO
// ==============================
const normalizar = (texto) =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");

// ==============================
// VALIDAÇÃO
// ==============================
botao.addEventListener("click", () => {
  const digitado = normalizar(input.value);
  const correto = normalizar(respostas[enigmaAtual]);

  if (digitado === correto) {
    sessionStorage.setItem("nivel", enigmaAtual + 1);
    window.location.href = proximo;
  } else {
    erro.textContent = "Código incorreto.";
    input.value = "";
  }
});

// Enter também envia
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    botao.click();
  }
});
