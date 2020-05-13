// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.



//const {Engine} = Matter 
//is the same as c
//onst Engine = Matter.Engine



function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(800,400);
    engine=Engine.create();
    world=engine.world;
     
    ground = new Ground(400,383,800,30);
    rect1 = new Tanker(150,320,100,20);
    rect2 = new Tanker(150,300,100,20);
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(0);
Engine.update(engine);
ground.display();
rect1.display();
rect2.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}