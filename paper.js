class paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius-7,options);
        this.radius = radius;
        this.image = loadImage('paper.png');
        //this.image.setScale=0.1;
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        //fill('cyan');
        image(this.image,0,0,70,70);
        pop();
    }
    
}