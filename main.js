function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nWjpZKkIh/model.json', modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
Dog = 0;
Cat = 0;
Frog = 0;
Elephant = 0;
function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        random_colour_r = Math.floor(Math.random()*255)+1;
        random_colour_g = Math.floor(Math.random()*255)+1;
        random_colour_b = Math.floor(Math.random()*255)+1;
        document.getElementById("name").innerHTML = "I can hear: "+results[0].label;
        document.getElementById("voice").innerHTML = "Dog: "+Dog+", Cat: "+Cat+", Frog: "+Frog+", Elephant: "+Elephant;
        document.getElementById("name").style.color = "rgb("+random_colour_r+", "+random_colour_g+", "+random_colour_b+");";
        document.getElementById("voice").style.color = "rgb("+random_colour_r+", "+random_colour_g+", "+random_colour_b+");";
        img = document.getElementById("img");
        if (results[0].label =="Dog") {
         img.src = "Dog.png";
         Dog = Dog + 1;
        }
        else if(results[0].label == "Cat"){ 
         img.src = "Cat.jpg";
         Cat = Cat + 1;
        }
        else if(results[0].label == "Frog") {
         img.src = "Frog.webp";
         Frog= Frog + 1;
        }
        else if(results[0].label == "Elephant"){
         img.src = "Elephant.jpg";
         Elephant = Elephant + 1;
        }
        else{
            img.src = "Default.png";
           }
    }
}