let newFish;
const generate = () => {
  if(existFish < maxFish){
    let rand1 = Math.random()*420
    let rand2 = Math.random()*2
    if(0<=rand2 && rand2 <=1){
      newFish = new EatableFish1({x:-30,y:rand1+210},{x:3,y:0});
    }else{
      newFish = new EatableFish1({x:670,y:rand1+210},{x:-3,y:0});
    }
    fish.push(newFish);
    existFish++;
  }
  console.log(existFish)
}
