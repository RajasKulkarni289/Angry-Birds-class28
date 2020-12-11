class Slingshot{
constructor(b1,pB){
    var ops={
        bodyA:b1,
        pointB:pB,
        length:10,
        stiffness:0.04
    };
    this.sling=cs.create(ops);
    World.add(world,this.sling);
}
display(){
    if(this.sling.bodyA!==null){
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    }
fly(){
    this.sling.bodyA=null;
}
}