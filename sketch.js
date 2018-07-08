var gravity
var fireworks = []

function setup() {
    createCanvas(400, 300);
    //firework = new Particle(random(0,width),height)
    gravity = new p5.Vector(0, 0.18)
    noStroke()
}

function draw() {
    background(51)
    if(random(1) < 0.05) {
        fireworks.push(new Particle(random(width), height))
    }
    for(var i = 0; i < fireworks.length; i++) {
        fireworks[i].update()
        fireworks[i].show()
        fireworks[i].applyForce(gravity)
    }
}

function Particle(x, y) {
    this.pos = new p5.Vector(x,y)
    this.vel = new p5.Vector(0,-10)
    this.acc = new p5.Vector(0,0)

    this.applyForce = function(force) {
        this.acc.add(force)

    }

    this.update = function() {
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc.mult(0)
    }

    this.show = function() {
        fill('white')
        ellipse(this.pos.x,this.pos.y,2,2)
    }
}
function Firework() {
    this.firework = new Particle(random(width), height)

    this.update = function() {
        this.firework = applyForce(gravity)
        this.firework = update()
    }

    this.show = function() {
        this.firework.show()
    }
}
