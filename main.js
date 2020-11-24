function preload(){

}
function setup(){
canvas=createCanvas(650,710);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}
function draw(){
    image(video,80,120,420,410);
    rect(80,80,500,20);
    rect(80,80,20,520);
    circle(90, 80, 50);
    rect(80,600,500,20);
    circle(90, 620, 50);
    rect(560,90,20,520);
    circle(570, 620, 50);
    circle(570, 80, 50);
    
    tint(tint_color);
}
function take_snapshot(){
    save('YourPHOTO.png');

}
function filter_tint(){
    tint_color=document.getElementById("add_filter").value;
}