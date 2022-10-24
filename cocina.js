status="";

function preload()
{
    img=loadImage("cocina.jpg");
}
function setup()
{
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="estatus: detectando objetos";
}
function modelLoaded()
{
    console.log("¡modelo cargado!");
    status=true;
    objectDetector.detect(video, gotResult);
}