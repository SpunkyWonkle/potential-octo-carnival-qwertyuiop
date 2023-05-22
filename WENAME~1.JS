rightEyeX=0;
leftEyeY=0;
rightEyeY=0;
leftEyeX=0;
rightEarX=0;
leftEarY=0;
rightEarY=0;
leftEarX=0;

function preload() {
    eye_right = loadImage('https://i.postimg.cc/3wJvTz8T/smokin-hot.jpg')
    eye_left = loadImage('https://i.postimg.cc/VLC5PmXM/AYO.jpg')
    ear_left = loadImage('https://i.postimg.cc/vmrb0mF8/pokem-anos.jpg')
    ear_right = loadImage('https://i.postimg.cc/KjH21kLf/LEAVE-EM-ALONE.jpg')
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        rightEyeX = results[0].pose.rightEye.x;
        leftEyeY = results[0].pose.leftEye.y;
        console.log("rightEye x = " + rightEyeX);
        console.log("leftEye y = " + leftEyeY);

        rightEyeY = results[0].pose.rightEye.y;
        leftEyeX = results[0].pose.leftEye.x;
        console.log("rightEye y = " + rightEyeX);
        console.log("leftEye x = " + leftEyeY);

        console.log(results);
        rightEarX = results[0].pose.rightEar.x;
        leftEarY = results[0].pose.leftEar.y;
        console.log("rightEar x = " + rightEarX);
        console.log("leftEar y = " + leftEarY);

        rightEarY = results[0].pose.rightEar.y;
        leftEarX = results[0].pose.leftEar.x;
        console.log("rightEar y = " + rightEarX);
        console.log("leftEar x = " + leftEarY);
    }
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(eye_left, leftEyeX, leftEyeY+40, 30, 30);
    image(eye_right, rightEyeX+30, rightEyeY+40, 30, 30);
    image(ear_left, leftEarX-20, leftEarY, 30, 30);
    image(ear_right, rightEarX+20, rightEarY+20, 30, 30);
}
    

function take_snapshot(){
    save('myFilterImage.png');
}