let num = 10;
let mx =  [num];
let my = [num];
let width = 900;
let height = 307;
// variables para incrementar la opacidad y el incremetno de las cosas
let angle = 0.0;
let speed = 0.02;
let inc2;


// text things
let tittle = 'INTERACTIVE MEDIA PORTFOLIO';
let letters = [];
let totalOffset = 0;



// variable para controlar el cambio de efectos cuando clikeo con el raton
let value = true;

function setup() {
	noCursor()
  createCanvas(width, height);
	smooth();
	colorMode(HSB, 360, 100, 100, 100);
	
	
	
	//text
	
	//letter = splitTokens(tittle);
	textFont("FantasqueSansMonoRegular");
	textAlign(CENTER);
 	textSize(height/6); 
}

function draw() {
	
  background(3);
 
	let strokeSize =  (sin(angle-HALF_PI)*250);
	
	//funcion para generar un background un poco random
	noFill(0);
	for (let i = width/2; i > 0; i = i -=10/2 ){
	if(value){
		stroke(i-strokeSize);
		rect(0,0, width-i*10, height - i*0.2);
	} else {
		stroke(i-strokeSize);
		ellipse(0,0, width-i*10, height - i*23);
		
	}
	}
	
	strokeWeight(1);
	fill(255, 53);
	noStroke();
		  // Cycle through the array, using a different entry on each frame. 
		  // Using modulo (%) like this is faster than moving all the values over.
		  let which = frameCount % num;
		  mx[which] = mouseX;
		  my[which] = mouseY;
		  noFill();
  for (let i = 0; i < num; i++) {
    // which+1 is the smallest (the oldest in the array)
    let index = (which+1 + i) % num;
    //ellipse(mx[index], my[index], i, i);
		circlePhase(mx[index], my[index], QUARTER_PI, i);
		circlePhase(mx[index], my[index], HALF_PI,i);
		circlePhase(mx[index], my[index], 0.0,i);
		circlePhase(mx[index], my[index], PI,i);
		
		
	}
	angle += speed;
	//if(value){
	fill( 90 , 40 + sin(angle)*30 , 100, 80);
	
	push();
	translate(-4,4);
	noFill();
	textAni();
	pop();
	
	push();
	textAni();
	pop();
	//text(tittle, width/2, height/2);
	//text(tittle.charAt(1), width/2, height/2);
	//}else{
	//text(tittle, mouseX, mouseY);	
//	}

	stroke(255);
	noFill();
	strokeWeight(strokeSize/15);
	rect(0,0, width, height);
	stroke(1);
	
}

function circlePhase(x, y, phase,d){
	
	let angleColor = sin(angle)/10 + sin(angle*1.2)/20;
	//fill(285, 50 +(angleColor*100), 91, 153);
	stroke(285, 50 , 60 +(angleColor*255),50)
	
	let normal = width/8 + d;
	
	let diameter = normal + (sin(angle + phase)*45);
	ellipse(x, y , diameter, diameter);

}

function mouseClicked() {
  if (value === true) {
    value = false;
  } else {
    value = true;
  }
}


	function textAni(){
		
		 
			translate((width - totalOffset) / 2, 0);
			totalOffset = 0;
			
			let firstWidth = (width / tittle.length) ;
			
			translate (firstWidth,0);
				
			for(let i = 0; i < tittle.length; i ++){
			
				let distance = abs(totalOffset - (mouseX-width/3)-170);
				distance = constrain(distance, 24, 50);
				
				textSize(100 - distance);
				text(tittle.charAt(i), 0, (height/2) - 2) ;
				
				if(tittle.charAt(i) == 'I'){
				
				let letterWidth = textWidth(tittle.charAt(i));
					
					if (i != tittle.length-1){

							totalOffset = totalOffset + letterWidth;
							translate(letterWidth,0);

						}
					 
				} else {
				
				
				let letterWidth = textWidth(tittle.charAt(i));
				//println(letters[i]);
					if (i != tittle.length-1){

							totalOffset = totalOffset + letterWidth;
							translate(letterWidth,0);

						}
			}
					
				}		
				
						
		
		
	}