/*function setup(){
    createCanvas(600,600);
    background("black");
};

ellipse(150,150); */

let x = 300
let y = 100
let size = 10
let xspeed = 7
let yspeed = 5


function setup(){ 

    createCanvas(600,600);
    background("black")
  //  xspeed = random();
    //yspeed = random(5);
}

function draw(){
    // MouseX and MouseY tell you where the mouse is.
    //var d = dist(600, 600, mouseX, mouseY);
    size = 50
    background(0,200,10)
    ellipse(x,y,size, size);
    
// bouncing horizontally
// x = x + xspeed

// bouncing vertically
// y = y + yspeed



x = x + xspeed;
if (x > 500 || x < 100){
    xspeed = -xspeed;
    y += 100;
} 

if ( y >= 460){ 
    y = 40;
}

}


