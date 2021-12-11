canvas = document.getElementById('canvas');
parent_div = document.getElementById('my-modified-misc-container')
canvas.height = parent_div.clientHeight;
canvas.width = parent_div.clientWidth;

var c = canvas.getContext('2d');//context

var mouse = {
	x:undefined,
	y:undefined
};
var maxRadius = 40;
var minRadius = 5;
var closeDist = 75;
var maxVel = 3;

var colorArray = [
	"#bbccbb",
	"#a0a0a0",
	"#334334",
	"#345678",
	"#876543"
]

window.addEventListener('mousemove', function(event){
	mouse.x = event.x;
	mouse.y = event.y;
});

window.addEventListener('resize', function(event){
	canvas.height = parent_div.clientHeight;
	canvas.width = parent_div.clientWidth;
	init();//redo circle creation
});

function Circle(x, y, radius, dx, dy){
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.dx = dx;
	this.dy = dy;
	this.color = colorArray[Math.floor(Math.random()*colorArray.length)];
	this.minRadius = radius;

	this.draw = function(){
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
		c.fillStyle = this.color;
		c.fill();
		// c.strokeStyle = "blue";
		// c.stroke();
	}
	this.update = function(){
		if (this.x<=this.radius || this.x>= canvas.width - this.radius){
			this.dx = -this.dx;
		}
		if (this.y<=this.radius || this.y>= canvas.height - this.radius){
			this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;

		//interactivity
		if(Math.abs(this.x-mouse.x)<closeDist && Math.abs(this.y-mouse.y)<closeDist){
			this.radius = Math.min(this.radius+1, maxRadius);
		}else{
			this.radius = Math.max(this.radius-1, this.minRadius);
		}
	}
}

var circleArray = [];

function init(){
	circleArray = [];//empty existing array
	for (var j=0; j<400; j++){
		radius = (Math.random()*3)+1;
		x = (Math.random()*(canvas.width - 2*radius))+radius;
		y = (Math.random()*(canvas.height - 2*radius))+radius;
		dx = (Math.random()-.5)*maxVel;
		dy = (Math.random()-.5)*maxVel;
		var circle = new Circle(x, y, radius, dx, dy)
		circleArray.push(circle);
	}
}


function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);
	for (var i=0; i<circleArray.length; i++){
		circleArray[i].draw();
		circleArray[i].update();
		c.fill();
	}

}
init();
animate();
