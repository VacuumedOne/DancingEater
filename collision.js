const collision = (player,fish) => {
  let px = player.pos.x;
  let py = player.pos.y;
  let pw = player.size.w;
  let ph = player.size.h;
  let p = [{x:px-pw/2,y:py-ph/2},
           {x:px+pw/2,y:py-ph/2},
           {x:px-pw/2,y:py+ph/2},
           {x:px+pw/2,y:py+ph/2}]
  let fx = fish.pos.x;
  let fy = fish.pos.y;
  let fw = fish.size.w;
  let fh = fish.size.h;
  let f = [{x:fx-fw/2,y:fy-fh/2},
           {x:fx+fw/2,y:fy-fh/2},
           {x:fx-fw/2,y:fy+fh/2},
           {x:fx+fw/2,y:fy+fh/2}]
  for (let i=0;i<4;i++){
    if(f[0].x<=p[i].x && p[i].x<=f[1].x
       && f[0].y<=p[i].y && p[i].y<=f[2].y){
      return true;
    }
  }
  return false;
}
