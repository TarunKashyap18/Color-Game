var numofsquares = 6;
var colors = getRandomColors(numofsquares);
var squares = document.querySelectorAll(".square");
var h1= document.querySelector("h1");
var b = document.getElementById("reset");
var easybtn = document.getElementById("b1");
var hardbtn = document.getElementById("b2");
var pickedColor = colors[pickcolor()]; 

var msg = document.getElementById("msg");
var colordisplay =document.getElementById("colordisplay");
colordisplay.textContent = pickedColor;
easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numofsquares=3;
	colors = getRandomColors(numofsquares)
	pickedColor =colors[pickcolor()];
	colordisplay.textContent= pickedColor;
	for(var i=0;i < squares.length ; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
		else
			squares[i].style.display = "none";
		
	}

});
hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numofsquares=6;
	colors = getRandomColors(numofsquares)
	//pick new color form array
	pickedColor =colors[pickcolor()];
	//change colorDisplay to match picked color
	colordisplay.textContent= pickedColor;
	//change colors of squares
	for(var i=0;i < squares.length ; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});
reset.addEventListener("click",function(){
	//generate all new colors
	colors = getRandomColors(numofsquares)
	//pick new color form array
	pickedColor =colors[pickcolor()];
	//change colorDisplay to match picked color
	colordisplay.textContent= pickedColor;
	//change colors of squares
	for(var i=0;i < squares.length ; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background= "steelblue";
	b.textContent="New Game";
	msg.textContent ="";
});

for(var i=0;i < squares.length ; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];
	//add click listener to squares
	squares[i].addEventListener("click", function(){
		//grab coclor of clicked square
		var clickedColor = this.style.background ;
		//compare color to pickedcolor
		if(clickedColor == pickedColor){
			 changecolor(clickedColor);
			msg.textContent ="Correct";
			h1.style.background =clickedColor;
			b.textContent="Play Again?";
		}
		else{
			this.style.background = "#232323";
			msg.textContent ="Try Again";
		}
	});
}
function changecolor(color){
	for(var i=0;i < squares.length ; i++){
		squares[i].style.background = color;
	}
}
function pickcolor() {
	return Math.floor(Math.random() * colors.length) ;
}
function getRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i=0 ; i<num ; i++){
		//get random color & push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}
function randomColor(){
	//pick a red from 0 to 255
	var r= Math.floor(Math.random()*256)
	//pick a green from 0 to 255
	var g= Math.floor(Math.random()*256)
	//pick a blue from 0 to 255
	var b= Math.floor(Math.random()*256)
	return"rgb(" +r +", " +g +", " +b +")";
}
