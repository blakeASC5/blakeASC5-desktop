/*Start your p5.js using the setup() function to define your canvas (500x500)
Draw 3 boxes to the canvas and give them 3 different colors (these will serve as “buttons” for color selection).
*/




function setup(){
    fill("Red")
    createCanvas (600, 600);
    background("white");
}

function mouseDragged() {
    ellipse(mouseX, mouseY, random(50), random(50));
    return false;
  } 

function mouseReleased(){
    if(s)

}
  
function draw(){
function boxes(){
     fill("Blue")
    rect( 0,0,150,75);
    
    fill("Red")
    rect( 150,0,150,75);
    
    fill("yellow")
    rect( 300,0,150,75);

    fill('gray')
    rect( 450,0,150,75)
}  
boxes();
}

function random(){
    const decimal =Math.random
    const times225 =decimal *225
    const final = Math.floor(times225)
    console.log(final)


}
   
function mouseClicked() {
    rect(0, 100, 75, 75);
    rgb(fnal,final,final)
    
   
   // prevent default
    return false;
  }
 
  