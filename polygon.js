class Polygon{
    constructor(x,y){
        var options = {
            restitution: 1,
            friction: 0.04,
            density: 0.04,
            isStatic: false
        }
        this.body = Bodies.circle(x,y,20,options);
        World.add(world, this.body)
        
    }

        
        display(){

            var pos = polygon.body.position
            
            imageMode(CENTER)
            image(polygon_img,pos.x,pos.y,40,40)
        }
}