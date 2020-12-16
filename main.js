Webcam.set({
    height:360,
    width:360,
    img_format:'png',
    png_quality:100
});
camera=document.getElementById("live_image");
Webcam.attach(camera);
function Take(){
    Webcam.snap(function(data_uri){
        document.getElementById("captured_image").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xOukSt1t1/model.json',modelLoaded);
function modelLoaded(){
    console.log("model loaded!");
}
function Identify(){
    img=document.getElementById("captured_image");
    classifier.classify(img, getResult);
}
function getResult(error,results){
    if (error){
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("Object_value").innerHTML=results[0].label;
        document.getElementById("Accuracy_value").innerHTML=results[0].confidence.toFixed(3);
    }
}