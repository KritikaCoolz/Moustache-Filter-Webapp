nose_x = 0;
nose_y = 0;

function preload() {
moustache = loadImage('https://i.postimg.cc/6QJDd9g8/download-removebg-preview.png');
}

function setup() {
   canvas = createCanvas(400,300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(400,300);
   video.hide();

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose',gotPoses);
} 

function modelLoaded() {
console.log("Posenet Is Initialized")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
       nose_x = results[0].pose.nose.x-35;
       nose_y = results[0].pose.nose.y-10;
       console.log("the Nose X is = " + nose_x);
       console.log("the Nose Y is = " + nose_y);
    }
}

function draw() {
   image(video, 0, 0, 400, 300);
   image(moustache, nose_x, nose_y, 70, 50);
}

function take_snapshot() {
    save("Moustache_Filter_Pic");
}
