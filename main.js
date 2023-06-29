canvas=document.getElementById("mycanvas");
ctx=canvas.getcontext("2d");

color="red";
ctx.beginpath();
ctx.strokesstyle=color;
ctx.linewidth=2;
ctx.ARC(200,200,40,0,2*mathpi);
ctx.strokesstyle();

CanvasCaptureMediaStreamTrack.addeventlisteener("mousedown",mymousedown);
function mymousedown(e)
color=documente.getelementbyid("color").value;
console.log(color)
mouseX=e.clientx-canvas.offsetleft;
 
mouseY=e.clienty-canvas.offsettop;

console.log("x="+mouseX+",y="+mouseY+"");
circle(mouseX , mouseY)
 
    ;

function circle(mouseX,mouseY);
color="red";
ctx.beginpath();
ctx.strokesstyle=color;
ctx.linewidth=2;
ctx.ARC(200,200,40,0,2*mathpi);
ctx.strokesstyle();

ctx.beginpath();
ctx.strokesstyle = "red";
ctx.linewidth=1;
ctx.rect(150,143,430,200);
ctx.strokesstyle();




canvas =
document.getelementbyid("myCanvas");
ctx= canvas.getContext("2d");