//let x = 250.0;
//let y = 280.0;
//let angle = 0.0;
let speed = 0.01;


let inc = 0.0;
let width = 900;
let height = 307;
let size = [];
let cloud1 = [];
let cuantasnuves = 5;
function setup() {
	createCanvas(width, height);
	//randomSeed(121);
	stroke(255, 204);
	rect(0,0, width, height);
	colorMode(HSB, 360, 100, 100, 100);
	// no me sirve asi porque asignaria la misma posicion y a todos y no puedo hacerlo en draw porque lo actualizaria todo el rato
	for( var i = 0; i < 10; i++){
	size[i] = random(5,30);
	}
	//eee pos = random(8, width);
	background(100);
	
	for ( i = 0; i < cuantasnuves; i ++){
	
		cloud[i] = new cloud();
		
	
	}
}

function draw() {
	background(180, 40, 60, 100);
	noFill();
	rect(0,0, width, height);
	
	
	for ( i = 0; i < cuantasnuves; i ++){
		
		cloud[i].update();
		cloud[i].display();
	
	}
	
	
	
	inc += speed;
	let angle = sin(inc)/10 + sin(inc*1.2)/20;
	let pos = 10;

	
	stroke(90, 100, 100, 100);
	tail(18, size[0], angle);
	tail(44*pos, size[1], angle/1.3);
	tail(62*pos,  size[2], angle);
	tail(88*pos, size[3], angle/0.5);
	tail(98*pos, size[4], angle);
	tail(150, size[5], angle);
	tail(400, size[6], angle/1.3);
	tail(650,  size[7], angle);
	tail(width-100, size[8], angle/0.5);
	tail(49*pos, size[9], angle);

		
	
	
}

function tail (x, units, angle){
	push();
	translate(x , height);
	for (let i = units; i > 0; i--){
		let stroke = i;
		strokeWeight(stroke);
		
		line(0,0,0,-8);
		translate(0,-8);
		rotate(angle);
		
	}
	pop();
}	
		
		

class cloud{
		
	constructor(){
		this.pos = createVector(width+(random(100,1000)), random(50,height-20));
		this.vel = createVector(random(-2,-1),0);
		this.acc = createVector(random(-2,-1),0);
		this.maxspeed = 5;
		this.size = [3]
	  for(var i = 0; i < 3; i++){
			this.size[i] = random(50,90);
		}
	}

	update() {
		
			
			this.vel.limit(this.maxspeed);
			//this.pos.x += this.vel.x;
			this.pos.add(this.vel);
			if(this.pos.x <= 0){ 
				this.vel.mult(0);
				this.pos.x = width;
				this.pos.y = random(0,height);
				this.vel.add(this.acc);
			 }
}
	display(){
		fill(200, 10,100,100);
		noStroke();
		ellipse(this.pos.x, this.pos.y, this.size[0]);
		ellipse(this.pos.x-20, this.pos.y, this.size[1]);
		ellipse(this.pos.x-40, this.pos.y, this.size[2]);
		//print("-----------------------------------------------------------------");
		//print("pos " + this.pos.x + " vel " + this.vel.x);
		
	}


}
		
