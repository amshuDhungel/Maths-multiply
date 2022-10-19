var playing = false
var score;
var action;
var correctAnswer;

//if we click on the start/reset
document.getElementById("startreset").onclick = function () {
    //if we are playing(
    if (playing == true) {
        location.reload();
    } else {
        playing = true;
        //set score to 0
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        //show countdown box
        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;

        //hide the game over box
        hide("gameOver")
        //change button to reset
        document.getElementById("startreset").innerHTML = "Reset Game";
        //start countdown
        startCountdown();

        //generate a new Q&A
        generateQA()
    }
}
//clikcing on an answer

for (i = 1; i<5; i++){
    document.getElementById("box" +i).onclick = function () {
        //check if we are playing
        if (playing == true) {
            if (this.innerHTML == correctAnswer) {
                //correct answer
                score++;
                document.getElementById("scorevalue").innerHTML =score;
    
                //hide wrong box and show correct boc
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
    
                },1000)
                //generate new QA
                generateQA();
            }
            else{
                //wrong answer
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
    
                },1000);
            }
        }
    }
}

//functions

//start counter
function startCountdown() {
    action = setInterval(function () {
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if (timeremaining == 0) {//game over
            stopCountdown();
            show("gameOver");
            document.getElementById("gameOver").innerHTML = "<p>Game Over;</p><p>Your score is " + score + ".</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";

        }
    }, 1000);
}
//stop the counter
function stopCountdown() {
    clearInterval(action);
}
//hide an element
function hide(id) {
    document.getElementById(id).style.display = "none";
}
//show an element
function show(id) {
    document.getElementById(id).style.display = "block";
}
//generate question
function generateQA() {
    var x = 1 + Math.round(9 * Math.random());
    var y = 1 + Math.round(9 * Math.random());
    correctAnswer = x * y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPositon = 1 + Math.round(3 * Math.random());
    document.getElementById("box" + correctPositon).innerHTML = correctAnswer;
    //fill one  box with  the correct answer

    //fill other boxes with wrong answer
    var answers = [correctAnswer];
    for (i = 1; i < 5; i++) {
        if (i != correctPositon) {
            var wrongAnswer;
            do {
                wrongAnswer = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));// a wrong answer
            } while (answers.indexOf(wrongAnswer) > -1);
            document.getElementById("box" + i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }

}