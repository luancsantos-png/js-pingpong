let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro/2;

let velocidadexBolinha = 10;
let velocidadeyBolinha = 10;

let xRaquete = 5;
let yRaquete = 150;  
let raqueteComprimento = 10; 
let raqueteAltura = 100;    
 
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeOponente;

let meusPontos = 0;
let pontosDoOponente = 0; 

function setup() {

  createCanvas(600, 400);
}

function draw() {
  background(0);
  MostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  verificaColisaoRaquete();
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  verificaColisaoOponente();
  incluirPlacar();
  marcaPontos();
  
  function MostraBolinha(){circle(xBolinha,yBolinha,diametro); }
}
   function movimentaBolinha(){xBolinha +=velocidadexBolinha
                              yBolinha +=velocidadeyBolinha}

  function verificaColisaoBorda(){ 
    if (xBolinha + raio > width || xBolinha - raio < 0){ velocidadexBolinha *= -1;} 
    if (yBolinha + raio > height ||  yBolinha - raio < 0) {velocidadeyBolinha *= -1; }
  }
  function mostraRaquete(x,y){
   rect ( x,y,raqueteComprimento, raqueteAltura) 
  }
  function verificaColisaoRaquete(){
   if ( xBolinha - raio < xRaquete + raqueteComprimento 
      && yBolinha - raio < yRaquete + raqueteAltura
      && yBolinha + raio > yRaquete)
   {velocidadexBolinha *=-1;}
    }
  function movimentaMinhaRaquete(){ 
  if (keyIsDown(UP_ARROW)) {yRaquete -= 10;}
  if (keyIsDown(DOWN_ARROW)) {yRaquete += 10;}
  }
  function movimentaRaqueteOponente(){
  velocidadeOponente = yBolinha -yRaqueteOponente -
  raqueteComprimento /2;
  yRaqueteOponente  += velocidadeOponente;
   }
  function verificaColisaoOponente(){ 
  if (xBolinha > xRaqueteOponente - raqueteComprimento
     && yBolinha - raio < yRaqueteOponente + raqueteAltura
  && yBolinha + raio > yRaqueteOponente) {velocidadexBolinha *= -1;}
 }
  function incluirPlacar(){
  fill (220)
  text ( meusPontos,278,26)
  text (pontosDoOponente,320,26) } 
  function marcaPontos(){
  if (xBolinha > 590 ) {meusPontos += 1;}    
  if (xBolinha < 10 ) {pontosDoOponente += 1;} 
  }