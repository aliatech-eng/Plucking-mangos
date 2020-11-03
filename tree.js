class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
        }
        this.body=Bodies.rectangle(this.width,this.height,options)
this.width=width;
this.height=height
World .add(world,this.body);
    }
}