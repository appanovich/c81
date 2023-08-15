canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="yellow";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,20,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    size=document.getElementById("size").value;
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,size,0,2*Math.PI);
    ctx.stroke();
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}