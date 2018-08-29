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

let phaze = 0;
let maxFish = 5;
let existFish = 0;

let score = 0;
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
  fish = [];
}

const main = () => {
  draw();
  update();
  time += 1;
}

const draw = () => {
  ctx.clearRect(0,0,WIDTH,HEIGHT)
  bg.draw();
  player.draw();
  for(let f of fish){
    if(f.alive){
      f.draw();
    }
  }
  ctx.fillStyle="rgb(0,0,0)"
  ctx.font="25px 'Arial'"
  ctx.fillText(score,50,140)
}
const update = () => {
  player.update();
  generate()
  for(let f of fish){
    f.update();
    if(f.alive && collision(player,f)){
      f.alive = false;
      existFish -= 1;
      score += 100
    }
  }
}
