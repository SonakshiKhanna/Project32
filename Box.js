class Box {
  constructor(x, y, width, height){
    var options = {
      'restitution': 0,
      'friction': 1.0,
      //'density': 1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    World.add(world, this.body);

  }
  display() {
    if(this.body.speed < 3){
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0, this.width, this.height);
      // fill("pink");
      pop();
    }
    else{
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility - 5;
      //tint(255,this.visibility);
      // var pos = this.body.position;
      // rectMode(CENTER);
      // rect(pos.x, pos.y, this.width, this.height);
      // fill("pink");
      pop();
    }
  }
    score() {
      if(this.visibility<0 && this.visibility>-105){
        score++;
      
    }
  }
}
