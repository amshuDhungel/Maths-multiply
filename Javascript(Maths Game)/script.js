var playing = false;
var score;
var action;
var timeremaining;
var correctanswer;

//if we click on the start reset
document.getElementById("startreset").onclick = function(){
    //if we are playing
    if(playing == true){
        location.reload(); //reload page
    }
    else{//if we are bot playing
        //change mode to playing
        playing = true;
        //set score to 0
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        document.getElementById("timeremaining").style.display = "block";
        //show countdown time
        // show("timeremaining");
        // timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;

        //hide game over box
        hide("gameOver");
        
        //change button to reset
        document.getElementById("startreset").innerHTML = "Reset Game";

        //start countdown
        startCountdown();

        //generate a new Q&A
        generateQA();
    }
}
//Clicking on an answer box
for (i=1; i<5; i++){
    document.getElementById("box" + 1).onclick = function(){
        //check if we are playing
        if(playing == true){
            if(this.innerHTML== correctanswer){
                //correct answer
                //increase score by 1
                score++;
                document.getElementById("scorevalue").innerHTML = score;
                //hide wrong box and show correct box
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                }, 1000);  
            }else{
                hide("correct")
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                }, 1000);
            }
        
        
        }
    }
}
//if we click on answer box
 //if we are playing
 //correct?
 //yes
 //increase score
 //show correct box for 1sec
 //generate new Q&A
 //no
 //show try again box for 1sec
//functions
//start counter
function startCountdown( )