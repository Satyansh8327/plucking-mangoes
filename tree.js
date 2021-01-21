class Tree extends BaseClass{
    constructor(x,y){
        super(x,y,500,400)
        this.image=loadImage("tree.png")
    }
    display(){
        imageMode(CENTER);
        image(this.image, 950,200, this.width, this.height);
    }
   
}