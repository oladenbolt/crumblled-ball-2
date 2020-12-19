class paper{
    constructor(x,y,width,height){
        var options={
       restitution:0.7,
       friction:1,
       density:1
        }
        this.image=loadImage("paper.png")
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS)
        rotate(angle)
       imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}