// Joyce Wu
// Softdev2 pd07
// K08 -- Animation Nation
// 2018-03-03

var grow = true;
var id, size;
var x, y, logo;

//retrieve elements from html page
var svg = document.getElementById("vimage");
var stop = document.getElementById("stop");
var circle = document.getElementById("circle");
var dvd = document.getElementById("dvd");

//clears canvas
var clear = function(){
  while(svg.lastChild){ //checks to see if there are any drawings remaining
    svg.removeChild(svg.lastChild); //remains last drawing
  }
}

//stops functions
var stopFxn = function(){
  window.cancelAnimationFrame(id); //cancels animation at stop
}

//draws circle
var drawCircle = function(){
  clear();
  var c = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  )
  c.setAttribute("cx", svg.getAttribute("width")/2);
  c.setAttribute("cy", svg.getAttribute("height")/2);
  c.setAttribute("fill", "red");
  c.setAttribute("r", size);
  if(grow){
    size++;
  }else{
    size--;
    if(size < 0){
      stopFxn();
      return;
    }
  }
  svg.appendChild(c);
  id = window.requestAnimationFrame(drawCircle);
}

//enlarges or minimizes circle when button clicked
var circleFxn = function(e){
  if(id){ //stops function if already running
    stopFxn();
  }
  grow = !grow;
  if(grow){
    size = 10;
  }else{
    size = 200;
  }
  id = window.requestAnimationFrame(drawCircle);
}

//moves logo around
var bounce = function(){
  clear();
  var img = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "image"
  );
  img.setAttribute('href' ,'dvd_logo.png');
  img.setAttribute("width", 100);
  img.setAttribute("height", 50);
  img.setAttribute("x", x);
  img.setAttribute("y", y);
  //slope change if circle hits the edge
  //x and y coordinates are of top right corner
  if (x + 100 >= svg.getAttribute("width") || x <= 0){ //hits the right or left edge of canvas
    dx = -dx; //reverses direction
  }if (y + 50 >= svg.getAttribute("height") || y <= 0){ //hits top or bottom
    dy = -dy;
  }
  x += dx; //change position according to slope
  y += dy;
  console.log(x);
  svg.appendChild(img);
  id = window.requestAnimationFrame(bounce)
}

//starts dvd function when button is clicked
var dvdFxn = function(e){
  if(id){
    stopFxn(); //stops previous animation
  }
  x = svg.getAttribute("width")/2;
  y = svg.getAttribute("height")/2; //resets initial logo
  size = 15;
  dx = 1;
  dy = 2; // initially moves up slope of 1/2
  id = window.requestAnimationFrame(bounce);
}

//add event listeners
stop.addEventListener("click", stopFxn);
circle.addEventListener("click", circleFxn);
dvd.addEventListener("click", dvdFxn);
