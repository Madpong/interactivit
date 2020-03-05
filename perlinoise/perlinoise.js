//RANDOM WALKERS
// from top to bottom
var spanws = 100; // numero de spans
let walker = [0]; // array para añadir a los caminantes
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	smooth();
	colorMode(HSB, 360, 100, 100, 100); // modo HSB HUE, SATURATION BRIGHT
	
	for ( let i = 0 ; i < spanws; i ++){ // CREO LOS CAMINANTES
	walker[i] = new Walker(random(0,width), 0);

	}
	}

function draw() {
		
		for ( let i = 0 ; i < spanws; i ++){ //LOS MUESTRO EN PANTALLA

			walker[i].update(); // CALCULO SUS POSICIONES Y COLORES
			walker[i].show(); // LOS MUESTRO EN PANTALLA
			walker[i].edges(); // CORRIJO SU POSICION SI SE SALEN
		}	
	//ellipse(mouseX, mouseY, map(pmouseX, 0, width, 5, 10 ));
}








class Walker {

	constructor(x,y){
		
		 this.size = random(5,20); // tammaño diferente para cada particula
		 this.color = random(360); // color iniciar aleatorio para cada particula basado en HBS 360 GRADOS
		 
		 this.pos = createVector(x, y); // CREO EL VECTOR POSICION X, Y QUE LE PASO AL CONSTRUCTOR
		 this.vel = p5.Vector.random2D(-0.05, 0.05); // GENERO UNA VELOCIDAD ALEATORIA INICIAL
		 this.acc = createVector(0,0); // CREO UN VECTOR ACC PARA AGREGARLE LA VELOCIDAD
		 this.maxspeed = 0.5; // VELOCIDAD MAXIMA PARA QUE NO SE DISLOQUE LA COSA
		 
		 this.randomacc = createVector(0,0); // ACELERACION ALEATORIA BASADA EN PERLIN NOISE
		 this.stepx = random(0,2000); // ASIGNO DIFERENTES INICIOS PARA CADA X
		 this.stepy = random(1000,1500); // Y OTRO PARA Y, SI FUERAN IGUALES LAS PARTICULAS SE MOVERIA EN LA MISMA DIRECCION SIEMPRE
		 
		 
		
	}
	
	update(){
	
		
		this.randomacc.x = map(noise(this.stepx), 0, 1, -10, 10);
		this.randomacc.y = map(noise(this.stepy), 0, 1, -10, 10);
		this.acc.add(this.randomacc);

		this.vel.limit(this.maxspeed);
		this.vel.add(this.acc);
		this.pos.x += this.vel.x;
		this.pos.y += abs(this.vel.y);
		this.acc.mult(0);
		
		this.stepx +=0.01;
		this.stepy +=0.01;
		//this.step +=0.01;
		if (this.color >= 360){
			this.color = 0;
	  }else {
		this.color += 1;
		}
		/*
		this.vel.add(this.acc);
		//this.vel = p5.Vector.random2D(-1,1);
		
		this.pos.add(this.vel);
		*/
	}
	applyForce(force){
		this.acc.add(force);
	}
	
	show(){
		//stroke(this.color+2,50, 50,1);
		//strokeWeight(2);
		noStroke();
		fill(this.color, 60, 60,5);
		ellipse(this.pos.x , this.pos.y, this.size);
		
		
	}
	
	edges (){
		if( this.pos.x > width) this.pos.x = 0;
		if( this.pos.x < 0) this.pos.x = width;
		if( this.pos.y > height) this.pos.y = 0;
		if( this.pos.y < 0) this.pos.y = height;
		
	}
	
}