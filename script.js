//complete this code
class Rectangle{
    constructor(width,height){
        this._width=width;
        this._height=height;
    }
    
    get height(){
        return this._height;
    }
    get width(){
        return this._width;
    }
    getArea(){
        return this._height*this._width;
    }
}
class Square extends Rectangle{
    constructor(width){
        super(width,width)
    }
    getPerimeter(){
        return this._width*4;
    }
}
let s1 = new Square(10);
console.log(s1.getArea())
console.log(s1.height)

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
