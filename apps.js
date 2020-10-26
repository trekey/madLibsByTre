function createParagraph(){
   
    console.log("create paragraph has been logged")

    let wordOne = document.getElementById("animal").valuelet
    let wordTwo = document.getElementById("state").value;
    let wordThree  = document.getElementById("store").value;
    let wordFour = document.getElementById("candy").valuelet
    let wordFive = document.getElementById("car").value;

    console.log(wordOne,wordTwo,wordThree,wordFour,wordFive,wordSix,wordSeven,wordEight);

    let paragraph = "<p> I keep smeeling the sick smell of dead" + wordOne + "in the air." + "I always hate comming to" + wordTwo + "this place just gives me the creeps." + "Me and my cousins decide to walk to" + wordThree + "by ourselves and that wasn't fun." + "As we reached" + wordThree + "a" + wordFive + "pulled up and scared me half to death!" + "When he opened the door all I could feel was a tremble down my spine...</p>"
    
    console.log(paragraph);
    
    document.getElementById("answer").innerHTML = paragraph;

}