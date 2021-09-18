var mouseEvent= "empty";
canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
Color= "red";
Width= "3";
Radius= "10";
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    Color= document.getElementById("Color").value;
    Width= document.getElementById("WIdth").value;
    Radius= document.getElementById("Radius").value;
    mouseEvent= "mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent= "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent= "mouseup";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    mouseEvent= "mouseleave"   
    CurrentPositionOfMouseX= e.clientX - canvas.offsetLeft;
    CurrentPositionOfMouseY= e.clientY - canvas.offsetTop;
    if(mouseEvent == "mousedown"){
        console.log("Current position of mouse = ");
        console.log("Current position of mouse x = "+CurrentPositionOfMouseX);
        console.log("Current position of mouse y = "+CurrentPositionOfMouseY);
        ctx.beginPath();
        ctx.strokeStyle= Color;
        ctx.lineWidth= Width;
        ctx.arc(CurrentPositionOfMouseX, CurrentPositionOfMouseY, Radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}