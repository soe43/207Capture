var board = document.getElementById("board");
var clearButt = document.getElementById("clear");

var ns = "http://www.w3.org/2000/svg";

//Draw Circle
var circle = function(e){
    mouseX = e.offsetX;
    mouseY = e.offsetY;
    var circ = document.createElementNS(ns, "circle");
    circ.setAttribute("cx", mouseX);
    circ.setAttribute("cy", mouseY);
    circ.setAttribute("r", 25);
    circ.setAttribute("fill", "lightsteelblue");
    board.appendChild(circ);
    circ.addEventListener("click", switchColor);
}

var switchColor = function(e){
    if(this.getAttribute("fill") == "lightsteelblue"){
	this.setAttribute("fill", "blue");
	e.stopPropagation();
    }
    else{
	board.removeChild(this);
	e.stopPropagation();
	randomCircle();
    }
}

var randomCircle = function(){
    var circ = document.createElementNS(ns, "circle");
    circ.setAttribute("cx", Math.random() * 500);
    circ.setAttribute("cy", Math.random() * 500);
    circ.setAttribute("r", 25);
    circ.setAttribute("fill", "lightsteelblue");
    board.appendChild(circ);
    circ.addEventListener("click", switchColor);
}


var clear = function(){
    board.innerHTML = '';
}

board.addEventListener("click", circle);
clearButt.addEventListener("click", clear);
