var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function run(event){
    console.log(event)
    var content= event.results[0][0].transcript;
    console.log(content)
    document.getElementById("textbox").innerHTML=content;

    if(content=="take my selfie ")
    {
        console.log("taking your selfie")
        speak();
    }
 
}


function speak(){
    var synth= window.speechSynthesis;
    var speak_data= "taking your selfie in 5 seconds";
    var utterthis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach('#camera'); 
}

 setTimeout(function(){
     take_snaphot()
     save()
 },5000)

 function take_snaphot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="selfie_image" src="'+ data_uri+'">';

});
 }
 


Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
}) ;

camera= document.getElementById("camera");

function save(){
    link= document.getElementById("link");
    img= document.getElementById("selfie_image").src;
    link.href=img;
    link.click();

}


