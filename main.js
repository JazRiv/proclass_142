x = 0;
y = 0;
estado = false;

function setup(){
    canvas = createCanvas(600, 440);
    background("blue");
    canvas.parent("game");
    video = createCapture(VIDEO);
    video.hide();
    modelo = ml5.poseNet(video, load);
    modelo.on("pose", gotPos);
}

function draw() {
    if (estado == true){
        image(video, 0, 0, 600, 440);
        if (x > 0.2){
            fill("red");
            circle(x, y, 30);
        }
    }
}

function load(){
    console.log("Modelo listo");
}

function gotPos(results){
    if(results.length > 0){
        console.log(results);
        x = results[0].pose.rightWrist.x;
        y = results[0].pose.rightWrist.y;
    }
}

function play(){
    estado = true;
    document.getElementById("estado").innerHTML = "A jugar";
}