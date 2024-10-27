function areaOfRectangle(length, width){
    if(length <= 0){
        throw new RangeError("Length must be greater than zero");
    }
    if(width <= 0){  
        throw new RangeError("Width must be greater than zero");
    }
    const area = length * width;
    console.log("The area of rectangle is -> ", area);
}

areaOfRectangle(4, 10);
areaOfRectangle(4, 10.5);
areaOfRectangle(4.5, 10);
// areaOfRectangle(4.5, -10);
// areaOfRectangle(-4.5, -10);