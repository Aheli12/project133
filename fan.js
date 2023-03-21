Status="";
fan_image="";
function preload(){
    fan_image = loadImage("fan.jpg");
}
function setup(){
    canvas = createCanvas(650, 350);
    canvas.position(315, 200);
    obj_dect = ml5.objectDetector("cocossd", "modelLoaded");
    document.getElementById("status").innerHTML ="Status:Detecting Objects";
}

function modelLoaded(){
    console.log("Model is loaded!");
    Status = true;
    obj_dect.detect(fan_image, gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}
function draw(){
    Image(fan_image, 0, 0, 650, 350);
    if(Status != ""){
        for(i = 0; i< objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Detecting Objects";

            fill("#fc0303");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " +percent + "%",objects[i].x, objects[i].y);
            noFill();
            stroke("#fc0303");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}