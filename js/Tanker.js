class Tanker {
  constructor(x, y, width, height) {
      var options = {
        isStatic: true
           
     }
     this.body=Bodies.rectangle(x,y,width,height,options);
     this.width=width;
     this.height=height;
 
     World.add(world,this.body);
   }
   
   display(){
     var pos=this.body.position;
     var angle=this.body.angle;
     translate(pos.x,pos.y);
     push();
     rotate(angle);
     rectMode(CENTER);
     rect(0,0,this.width,this.height);
     fill("brown");
     pop();
     
    
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look

    }
}
