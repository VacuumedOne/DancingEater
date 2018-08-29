class GameObject {
  constructor(pos, path){
    this.pos = pos;
    this.image = new Image();
    this.image.src = path;
  }
}


let PLAYER_CONTROLLABLE = 0;
let PLAYER_UNCONTROLLABLE = 1;
class Player extends GameObject {
  constructor(pos){
    super(pos,"asset/fish3.png");
    this.state = PLAYER_CONTROLLABLE;
    this.next_key_accept_frame = 0;
    this.vel = {x:0,y:0};
    this.acc = {x:0,y:0};
    this.size = {w:50,h:30};
  }
  draw(){
    if(this.vel.x <= 0){
      ctx.drawImage(this.image,this.pos.x-this.size.w/2 ,
                               this.pos.y-this.size.h/2 ,
                               this.size.w,this.size.h)
    }else{
      ctx.save()
      ctx.scale(-1,1);
      ctx.drawImage(this.image,-this.pos.x-this.size.w/2 ,
                               this.pos.y-this.size.h/2 ,
                               this.size.w,this.size.h)
      ctx.restore();
    }

  }
  update(){
    switch(this.state){
      case PLAYER_CONTROLLABLE:
        this.input();
        break;
      case PLAYER_UNCONTROLLABLE:
        this.next_key_accept_frame -= 1;
        if(this.next_key_accept_frame <= 0){
          this.next_key_accept_frame = 0;
          this.state = PLAYER_CONTROLLABLE;
        }
        break;
    }
    this.move();
  }
  input(){
    if(keys._right){
      this.acc.x += 1;
      this.next_key_accept_frame = 4;
      this.state = PLAYER_UNCONTROLLABLE;
    }
    if(keys._left){
      this.acc.x -= 1;
      this.next_key_accept_frame = 4;
      this.state = PLAYER_UNCONTROLLABLE;
    }
    if(keys._up){
      this.acc.y -= 1;
      this.next_key_accept_frame = 4;
      this.state = PLAYER_UNCONTROLLABLE;
    }
    if(keys._down){
      this.acc.y += 1;
      this.next_key_accept_frame = 4;
      this.state = PLAYER_UNCONTROLLABLE;
    }
  }
  move(){
    this.vel.x += this.acc.x;
    this.vel.y += this.acc.y;
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    this.acc.x = 0;
    this.acc.y = 0;
    //this.acc.x -= this.vel.x/5;
    //this.acc.y -= this.vel.y/5;
    if(this.pos.x-this.size.w/2<0){
      this.pos.x=this.size.w/2;
    }
    if(this.pos.x+this.size.w/2>640){
      this.pos.x=640-this.size.w/2;
    }
    if(this.pos.y-this.size.h/2<160){
      this.pos.y=160+this.size.h/2;
    }
    if(this.pos.y+this.size.h/2>640){
      this.pos.y=640-this.size.h/2;
    }
  }
}

class Fish extends GameObject {
  constructor(pos,path,vel){
    super(pos,path);
    this.vel = vel;
    this.alive = true;
  }
  draw(){
    if(this.vel.x <= 0){
      ctx.drawImage(this.image,this.pos.x-this.size.w/2 ,
                               this.pos.y-this.size.h/2 ,
                               this.size.w,this.size.h)
    }else{
      ctx.save()
      ctx.scale(-1,1);
      ctx.drawImage(this.image,-this.pos.x-this.size.w/2 ,
                               this.pos.y-this.size.h/2 ,
                               this.size.w,this.size.h)
      ctx.restore();
    }
  }
  update(){
    if(this.alive){
      this.move()
      if(this.pos.x-this.size.w/2<-100){
        this.alive = false;
        existFish -= 1;
      }
      if(this.pos.x+this.size.w/2>740){
        this.alive = false;
        existFish -= 1;
      }
    }
  }
  move(){
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }
}
class EatableFish1 extends Fish {
  constructor(pos,vel){
    super(pos,"asset/fish1.png",vel);
    this.size = {w:30,h:20};
  }
}
class EatableFish2 extends Fish {
  constructor(pos,vel){
    super(pos,"asset/fish2.png",vel);
    this.size = {w:67,h:45};
  }
}
class EatableFish3 extends Fish {
  constructor(pos,vel){
    super(pos,"asset/fish4.png",vel);
    this.size = {w:105,h:70};
  }
}
class EatableFish4 extends Fish {
  constructor(pos,vel){
    super(pos,"asset/fish5.png",vel);
    this.size = {w:120,h:100};
  }
}
class EatableFish5 extends Fish {
  constructor(pos,vel){
    super(pos,"asset/fish6.png",vel);
    this.size = {w:195,h:130};
  }
}
class EnemyFish extends Fish {
  constructor(pos,vel){
    super(pos,"asset/enemy1.png",vel);
  }
}

class BackGround extends GameObject{
  constructor(){
    super({x:0,y:0},"asset/bg_ocean.jpg");
  }
  draw(){
    ctx.drawImage(this.image,0,160,640,480);
  }

}
class Window extends GameObject{

}
class ScoreWindow extends Window{

}
class TimeWindow extends Window{

}
class RankWindow extends Window{

}
