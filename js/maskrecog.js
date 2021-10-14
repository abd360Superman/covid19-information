var recognizing = false

function startRecognizer() {
    if(recognizing == false) {
        recognizing = true
        document.getElementById('start_btn').innerHTML = "Stop"
        setup()
    } else if(recognizing == true) {
        recognizing = false

        document.getElementById('appendCamView').innerHTML = ''
        document.getElementById('result').innerHTML = ''
        document.getElementById('start_btn').innerHTML = "Click here to see if someone is wearing a mask!"
    }
}

function setup() {
    if (recognizing != false) {
        canvas = createCanvas(450, 300);
        canvas.parent('appendCamView');
        video = createCapture(VIDEO);
        video.size(450, 300);
        video.hide()

        classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/z1bAq0zGI/model.json', video, modelLoaded);

        document.querySelector("#result").innerHTML = "Loading...";
    }
}

function modelLoaded() {
    if (recognizing != false) {
        console.log("Model Loaded");
        classifyVideo();
    }
}

function classifyVideo() {
    if (recognizing != false) {
        classifier.classify(gotResults);
    }
}

function gotResults(error, results) {
    if (recognizing != false) {
        console.log(results);
        document.querySelector("#result").innerHTML = results[0].label;
        setTimeout(classifyVideo(), 2000);
    }
}

function draw() {
    if(recognizing != false) {
        image(video, 0, 0, 450, 300);
    }
}
