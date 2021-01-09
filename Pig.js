class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    //3a. add anynamed variable for visibility property starting with 255.-white
    this.Visiblity = 255;
  }

 display(){
   /*1. 
        super.display()
          console.log(this.body.speed)
*/

   console.log(this.body.speed);
   //2. display if speed <2.5 else World.remove(world,this..body)
   if(this.body.speed < 2.5){
    super.display();
   }
   else{
     World.remove(world, this.body);
    
     /*3b
        push
        reduce visibility by 5
         tint 
         image 
         pop*/

       push();   
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
   
 }



};