let x = 300
let y = 150
let size = 10
let xspeed = 3
let yspeed = 3


function setup(){
    createCanvas(600,600);
    xspeed = random(3);
    yspeed = random(3);
}

function draw(){
    // MouseX and MouseY tell you where the mouse is.
    //var d = dist(600, 600, mouseX, mouseY);
    size = random(100)
    background(0,200,10)
    ellipse(x,y,size, size);
    
// bouncing horizontally
// x = x + xspeed

// bouncing vertically
// y = y + yspeed



x = x + xspeed;
if (x > 500 || x < 100){
    xspeed = -xspeed 
}



}
/*
function draw(){
    
    background("black");
    fill("Blue");
    ellipse(x,y,150);
    
     
    for (x < 450 ){
        x += 10;
    }
    else if (x > 50 );
         x -= 10
    
    

}
*/