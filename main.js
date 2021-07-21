canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d"); 

var carHieght=90;
var carWidth=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

var carX=10;
var carY=10;

function add() {
	bck_img= new Image();
    bck_img.onload= uploadconcrete-road;
    bck_img.src= imgCon;
    
    bck_rover= new Image();
    bck_rover.onload= uploadgreencar;
    bck_rover.src= img_greencar; 
}

function uploadBackground() {
	ctx.drawImage(bck_img,0,0,800,600);

}

function uploadgreencar() {
	ctx.drawImage(bck_car,carX,carY,carWidth,carHieght);	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	keyPressed = e.keyCode;
	if(keyPressed == '38')

	
}

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
