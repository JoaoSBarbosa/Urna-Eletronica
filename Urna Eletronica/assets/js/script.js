// Variaveis - manipular o DOM
let seuVotoPara = document.querySelector(".d-1-card1 span");
let cargo = document.querySelector(".d-1-card2 span");
let descricao = document.querySelector(".d-1-card4");
let avisos = document.querySelector(".d-2");
let lateralCard = document.querySelector(".d-1-right");
let numeros = document.querySelector(".d-1-card3");

// VARIAVEIS DE AMBIENTE - ETAPAS
let etapaAtual = 0;
let numeroDigitado = "";

// Funções
function comecarEtapa() {
  let etapa = etapas[etapaAtual];
  let numeroHtml = "";
  for (let i = 0; i < etapa.numeros; i++) {
    if (i === 0) {
      numeroHtml += '<div class="numero pisca"></div>';
    } else {
      numeroHtml += '<div class="numero"></div>';
    }
  }

  seuVotoPara.style.display = "none";
  cargo.innerHTML = etapa.titulo;
  descricao.innerHTML = "";
  avisos.style.display = "none";
  lateralCard.innerHTML = "";
  numeros.innerHTML = numeroHtml;
}
function atualizaInterface() {
  let etapa = etapas[etapaAtual];

  let candidato = etapa.candidatos.filter((item) => {
    if (item.numero === numeroDigitado) {
      return true;
    } else {
      return false;
    }
  });
  if (candidato.length > 0) {
    candidato = candidato[0];
    seuVotoPara.style.display = "block";
    descricao.innerHTML = `Nome: ${candidato.nome} <br/>Partido: ${candidato.partido}
    `;
    avisos.style.display = "block";

    let fotosHtml = "";
    for (let i in candidato.fotos) {
      fotosHtml += `<div class="d-1-img"><img src="assets/img/${candidato.fotos[i].url}" alt=""/>${candidato.fotos[i].legenda}</div>`;
    }
    lateralCard.innerHTML = fotosHtml;
  } else {
    seuVotoPara.style.display = "block";
    avisos.style.display = "block";
    descricao.innerHTML = '<div class="aviso-grande pisca">VOTO NULO</div>'
  }
}

function clicou(n) {
  let caixaAtual = document.querySelector(".numero.pisca");

  if (caixaAtual !== null) {
    caixaAtual.innerHTML = n;
    numeroDigitado = `${numeroDigitado}${n}`;
    caixaAtual.classList.remove("pisca");
  }
  if (caixaAtual.nextElementSibling !== null) {
    caixaAtual.nextElementSibling.classList.add("pisca");
  } else {
    atualizaInterface();
  }
}

function branco() {
  alert("Clicou em BRANCO");
}
function corrige() {
  alert("Clicou em CORRIGE");
}
function confirma() {
  alert("Clicou em CONFIRMA");
}
comecarEtapa();
