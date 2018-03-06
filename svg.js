var board = document.getElementById("board");
var clearButt = document.getElementById("clear");

//Draw Circle
var circle = function(e){
    mouseX = e.offsetX;
    mouseY = e.offsetY;
    previousX = mouseX;
    previousY = mouseY;
    started=true;
    var circ = document.createElementNS(ns, "circle");
    circ.setAttribute("cx", mouseX);
    circ.setAttribute("cy", mouseY);
    circ.setAttribute("r", 25);
    circ.setAttribute("fill", "lightsteelblue");
    board.appendChild(circ);
}
