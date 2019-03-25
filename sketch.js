var gravity
var fireworks = []

function setup() {
    createCanvas(400, 300);
    //firework = new Particle(random(0,width),height)
    gravity = new p5.Vector(0, 0.18)
    noStroke()
    background(45)
}

function draw() {
    colorMode(RGB)
    background(0, 50)
    if(random(1) < 0.02) {
        fireworks.push(new Firework())
    }
    for(var i = this.fireworks.length-1; i >= 0; i--) {
        fireworks[i].update()
        fireworks[i].show()
        if(this.fireworks[i].done()) {
            this.fireworks.splice(i, 1)
        }
        //fireworks[i].applyForce(gravity)
    }
}
