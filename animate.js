// Joyce Wu
// Softdev2 pd07
// K08 -- Animation Nation
// 2018-03-03

var grow = true;

//retrieve elements from html page
var svg = document.getElementById("vimage");
var stop = document.getElementById("stop");
var circle = document.getElementById("circle");
var dvd = document.getElementById("dvd");

var circleFxn = function(){
  var c = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  )
  c.setAttribute("cx", 250);
  c.setAttribute("cy", 250);
  c.setAttribute("fill", "red");
  if(grow){
    c.setAttribute("r", 10);
    c.animate({ transform: 't200,200s2,4'}, 2000)
  }else{
    c.setAttribute("r", 200);
  }

  svg.appendChild(c);
}

//add event listeners
//stop.addEventListener("click", stopFxn);
circle.addEventListener("click", circleFxn);
//dvd.addEventListener("click", dvdFxn);
