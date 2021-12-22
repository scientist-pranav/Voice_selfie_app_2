var SpeachRecognition = window.webkitSpeachRecognition;

var recognition = new SpeachRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event) {

    console.log(event);

var Content = event.results[0] [0].transcript;

document.getElementById("textbox").innerHTML = Content;
console.log(Content);
}

function speak(){
    var synth = window.speachSynthesis;

    speak_data = document.getElementById("textbox").value;

    var utterTHis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");