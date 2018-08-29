/*メインループの構造が記述されている*/
//--------------------------------------------------------------
let WIDTH = 640;
let HEIGHT = 640;
let frequency = 30;
let time = 0; //読み込みからの時間

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

const main = () => {
  draw();
  update();
  time += 1;
}

const draw = () => {

}
const update = () => {

}
