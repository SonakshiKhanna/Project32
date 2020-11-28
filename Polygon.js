class Polygon{
  constructor(x,y,width,height){
    this.body = Bodies.rectangle(x,y,width,height);
    this.image = loadImage("polygon.png");
    this.width = width;
    this.height = height;
    World.add(world,this.body);
  }

  display() {
    // var angle = this.body.angle;
    // push();
    // translate(this.body.position.x,this.body.position.y);
    // rotate(angle);
    var pos = this.body.position;
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    imageMode(CENTER);
    image(this.image,pos.x, pos.y,this.width,this.height);
    // pop();
  }
}
