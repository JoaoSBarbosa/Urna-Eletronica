// Variaveis - manipular o DOM
let seuVotoPara = document.querySelector('.d-1-card1 span');
let cargo = document.querySelector('.d-1-card2 span');
let descricao = document.querySelector('.d-1-card4');
let avisos = document.querySelector('.d-2');
let lateralCard = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-card3');

// VARIAVEIS DE AMBIENTE - ETAPAS
let etapaAtual = 0;
let numeroDigitado = '';

// Funções
function comecarEtapa(){
   let etapa = etapas[etapaAtual];
   let numeroHtml = '';
   console.log(etapa.numeros)
   for(let i=0; i<etapa.numeros; i++){
      if(i===0){
         numeroHtml += '<div class="numero pisca"></div>';
      }else{
         console.log(i)
         numeroHtml += '<div class="numero"></div>';
      }
   }
   
   
   seuVotoPara.style.display = 'none';
   cargo.innerHTML = etapa.titulo
   descricao.innerHTML ='';
   avisos.style.display = 'none';
   lateralCard.innerHTML = '';
   numeros.innerHTML = numeroHtml;
}
function atualizaInterface(){
   alert('Digitou')
}

function clicou(n){

   let caixaAtual = document.querySelector('.numero.pisca');

   if(caixaAtual !== null){
      caixaAtual.innerHTML = n
      numeroDigitado = `${numeroDigitado}${n}`;
      caixaAtual.classList.remove('pisca');
   }
   if(caixaAtual.nextElementSibling !== null) {
      caixaAtual.nextElementSibling.classList.add('pisca');
  } else {
      atualizaInterface();
  }
}

function branco(){
   alert('Clicou em BRANCO')
}
function corrige(){
   alert('Clicou em CORRIGE')

}
function confirma(){
   alert('Clicou em CONFIRMA')

}
comecarEtapa();