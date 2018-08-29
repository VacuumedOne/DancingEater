/*メインループの構造が記述されている*/
//--------------------------------------------------------------
let WIDTH = 640;
let HEIGHT = 640;
let frequency = 30;
let time = 0; //読み込みからの時間
let run = true;

let keys = new Key();

let bg;
let player;
let fish;

//--------------------------------------------------------------
window.onload = () => {

  //スクリーンの初期化
  screenCanvas = document.getElementById("screen");
  screenCanvas.width=WIDTH;
  screenCanvas.height=HEIGHT;

  //canvas2d
  ctx = screenCanvas.getContext("2d");
  //startDisplay()
  initial()
  if(run){
      setInterval(main,frequency);
  }
}

const initial = () => {
  bg = new BackGround();
  player = new Player({x:320,y:320});
  fish = new EatableFish5({x:200,y:200})
}

const main = () => {
  draw();
  update();
  time += 1;
}

const draw = () => {
  bg.draw();
  player.draw();
  fish.draw();
}
const update = () => {
  player.update();
  console.log(collision(player,fish))
}
