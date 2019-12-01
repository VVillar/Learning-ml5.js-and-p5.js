let mobilenet, puffin;

function modelReady() {
    console.log('Model is ready!!');
    mobilenet.predict(puffin,gotResults);
}

function gotResults(error,results){

    if(error){
        console.error(error);
    }else{
        console.log(results);
        let label = results[0].label;
        let prob = results[0].confidence;
        fill(0);
        textSize(54);
        //text(label, 10,height -100);
        createP(label);
        createP(prob);
    }
}
function imgReady(){
    image(puffin,0,0,width,height);
}
function setup() {
    createCanvas(640, 480);
    puffin = createImg('images/perro.jpg', imgReady);
    puffin.hide();
    mobilenet = ml5.imageClassifier('MobileNet', modelReady);
    //console.log('ml5 version:', ml5.version);
}

//function draw() {
//    background(23, 12, 131);
//}  