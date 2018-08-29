class GameObject {
  constructor(pos, path){
    this.pos = pos;
    this.image = new Image();
    this.image.path = path;
  }
}

class Player extends GameObject {
  constructor(pos,path){
    super(pos,path);
  }

}

class Fish extends GameObject {
  constructor(pos,path){
    super(pos,path);
  }
}
class EatableFish1 extends Fish {
  constructor(pos){
    super(pos,"asset/fish1");
  }
}
class EatableFish2 extends Fish {
  constructor(pos){
    super(pos,"asset/fish2");
  }
}
class EatableFish3 extends Fish {
  constructor(pos){
    super(pos,"asset/fish4");
  }
}
class EatableFish4 extends Fish {
  constructor(pos){
    super(pos,"asset/fish5");
  }
}
class EatableFish5 extends Fish {
  constructor(pos){
    super(pos,"asset/fish6");
  }
}
class EnemyFish extends Fish {
  constructor(pos){
    super(pos,"asset/enemy1");
  }
}

class BackGround extends GameObject{

}
class Window extends GameObject{

}
class ScoreWindow extends Window{

}
class TimeWindow extends Window{

}
class RankWindow extends Window{

}
