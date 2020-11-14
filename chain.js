class Chain{
 constructor(bodyA, bodyB){
    var Option = {
        stiffness : 0.1,
        length : 10,
        bodyA : bodyA,
        bodyB : bodyB
        }
            this.chain = Constraint.create(Option)
            World.add(world,this.chain)


 }  
 display(){
    push()
var A = this.chain.bodyA.position
var B = this.chain.bodyB.position
    

    strokeWeight(3);
    line(A.x, A.y, B.x, B.y)
    pop()
     
 }
}
