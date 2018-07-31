

function setup(){
    createCanvas(700,700)
}

function setup() {
    createCanvas(1000,1000);
    ellipse(150,150,300,300);
    
    fill('red');
    arc(150, 150, 300, 300, PI , 0);
    fill('black');
    ellipse(150,150,80,80);
    fill('white');
    line(0, 150, 300, 150);
    ellipse(150,150,40,40);
    fill('black')
    ellipse(75,75,30,70)
    
    ellipse(225,75,30,70)
    fill('white')
    ellipse(75,80,19,19)
    ellipse(225,80,19,19)
    fill('brown')
    arc(150, 240,75,75,PI,0)

        // yellow pokie
        fill('white')
        ellipse(500,150,300,300);
        fill('yellow');
        arc(500, 150, 300, 300, PI , 0);
        fill('black');
        ellipse(500,150,80,80);
        fill('white');
        line(250, 150, 300, 150);
        ellipse(500,150,40,40);
        fill('black');
        ellipse(425,75,30,70);
// dots in eyes 
        ellipse(575,75,30,70);
        fill('white');
        ellipse(425,120,19,19);
        ellipse(575,120,19,19);

    //health
    fill('green')
    rect(0,350,300,75)

    //health
    fill('green')        
    rect(350,350,300,75)
    
}

health = 100
health1 = 100
function mousePressed() {
    if (mouseIsPressed = true) {
      health = health - Math.floor(Math.random()*20);
      health1 = health1 - Math.floor(Math.random()*20);
    } else {
      health = health;
      health1 = health1;
    }
    if(health <= 0){
        fill('red')
        rect(0,0,1000,1000)
        var s = 'You fainted and lost the battle. Reload to try again.';
        fill(400);
        textSize(84)
        text(s, 350, 350,700,700); // Text wraps within text box

    if(health1 <= 0){
        fill('blue')
        rect(0,0,1000,1000)
        var s = 'You won! Give us your credit card number so we can send you your prize!';
        fill(400);
        textSize(84)
        text(s, 350, 350,700,700); // Text wraps within text box
        }
    }
}

