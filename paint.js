var color = 'black';
var radius = 5;
var isPainting = false;

//--------------------------- select canvas to draw or not ----------------------------------------

function startpaint(){
    isPainting = true;  
}

function endpaint(){
    isPainting = false;   
}

//--------------------------- Width/Height ----------------------------------------

function setWidth () {
    var s = document.getElementById('width');
    var d= document.getElementById('canvas1');
    d.style.width = s.value;
}

function setHeight () {
    var a = document.getElementById('height');
    var b= document.getElementById('canvas1');
    b.style.height = a.value;
}


//-------------------------------- clear -----------------------------------

function clearCanvas () {
    var paintcanvas = document.getElementById("canvas1");
    var context = paintcanvas.getContext("2d");
    context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}


//-------------------------------- drawing -----------------------------------

function paintCircle (x, y) {
    var paintcanvas = document.getElementById("canvas1");
    var context = paintcanvas.getContext("2d");
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}

function dopaint(x,y){
    if(isPainting==true){
        paintCircle(x,y);
    }
}

//--------------------------- change brush color ----------------------------------------

function changeColor(x){
    color=x;
}
//--------------------------- change brush size ----------------------------------------

function resizeBrush(newsize){
    document.getElementById('sizeOutput').value=newsize;
    radius = newsize;

}

