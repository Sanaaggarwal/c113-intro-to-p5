function preload(){
}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(100,200);
    video=createCapture(VIDEO);
    video.hide();
    filtercolor="";
}
function draw(){
    image(video,0,0,640,480);
    tint(filtercolor);
}
function applyfilter(){
filtercolor=document.getElementById("colorname").value;
}
function takesnapshot(){
    save("mypicture.png");
}