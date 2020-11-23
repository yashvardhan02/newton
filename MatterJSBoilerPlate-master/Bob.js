class Bob{
 constructor(x,y,radius){
 var options = {
  isStatic:false,
  restitution:0.3,
  friction:0.5,
  density:1.2,
 }
 this.body = Bodies.circle(x,y,10,options)
 World.add(world,this.body)

 }
 display(){
     
 stroke("orange");
 fill("orange");
 push()
 translate(this.body.position.x,this.body.position.y)
  ellipse(0,0,20,20)
 pop()
}



}