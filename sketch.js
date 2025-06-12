
let campo = [];
let cols = 5;
let rows = 3;
let tamanho = 80;
let tempocresCimento = 5000;// 5 segundos pra crescer
let produtosColhidos = 0;
function  setup() {
  createCanvas(600,400);
  for(let i = 0; i < cols * rows; i++) {
      campo.push({
        estado: "vazio",// "vazio", "plantado", "regado", "maduro"
      temPlantio: 0 
   });  
  }  
  function colher(){
    console.log("Botão colher foi clicado");
  }
  createButton("colher").position(420, 50).mousePressed(colher);
  function transportar() {
    console.log("Botão transportar foi clicado");
  }
  createButton("transportar").position(420,90).mousePressed(transportar);
}
function draw(){
  background(180,230,180);
  drawCampo();
  mostrarinfos();
  atualizarPlantas();
}
