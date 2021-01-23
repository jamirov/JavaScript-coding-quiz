

var button = document.querySelector(".btn");
var pEl = document.querySelector("p");
var h1 = document.getElementById("question");
var questionOne = document.getElementById("question1");
var questionTwo = document.getElementById("question2");
var questionThree = document.getElementById("question3");
var questionFour = document.getElementById("question4");
var allDone = document.getElementById("allDone");
var highScores = document.getElementById("viewHighScores");
var resultAlert = document.getElementById("resultAlert");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var highScoresBoard = document.getElementById("highScoresBoard");
var viewHighScores = document.getElementById("viewHighScores");
var wrongAlert = document.getElementById("resultAlertWrong");
var score = 0;
var penalty = 10;
var timeleft = 75;
var finalScore = document.getElementById("score");
var initial = document.getElementById("initial");
var displayScore = document.getElementById("displayScore");

button.addEventListener("click", function() {
var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
clearInterval(downloadTimer);
document.getElementById("countdown").innerHTML = "Finished";
    } else {
document.getElementById("countdown").innerHTML = timeleft;
    }
timeleft -= 1;
}, 1000);
button.setAttribute("style", "display:none");
pEl.setAttribute("style", "display:none");
h1.setAttribute("style", "display:none");
question1.setAttribute("style","display:inline-block");
});

questionOne.addEventListener("click", function(event) {
var element = event.target;
if (element == answer1){
    score++;
    resultAlert.setAttribute("style","display:inline-block");
    wrongAlert.setAttribute("style","display:none");       
} else {
    wrongAlert.setAttribute("style","display:inline-block");
    resultAlert.setAttribute("style","display:none")
    timeleft = timeleft - penalty;
}
questionOne.setAttribute("style","display:none");
questionTwo.setAttribute("style","display:inline-block");
});

questionTwo.addEventListener("click", function(event) {
    var element = event.target;
    if (element == answer2){
        score++;
        console.log(score);
        resultAlert.setAttribute("style","display:inline-block");
    wrongAlert.setAttribute("style","display:none");       
} else {
    wrongAlert.setAttribute("style","display:inline-block");
    resultAlert.setAttribute("style","display:none")
        timeleft = timeleft - penalty;
    }
questionTwo.setAttribute("style","display:none");
questionThree.setAttribute("style","display:inline-block");
});

questionThree.addEventListener("click", function(event) {
    var element = event.target;
if (element == answer3){
    score++;
    console.log(score);
    resultAlert.setAttribute("style","display:inline-block");
    wrongAlert.setAttribute("style","display:none");       
} else {
    wrongAlert.setAttribute("style","display:inline-block");
    resultAlert.setAttribute("style","display:none")
    timeleft = timeleft - penalty;
}
questionThree.setAttribute("style","display:none");
questionFour.setAttribute("style","display:inline-block");
});

questionFour.addEventListener("click", function(event) {
    var element = event.target;
if (element == answer4){
    score++;
    resultAlert.setAttribute("style","display:inline-block");
    wrongAlert.setAttribute("style","display:none");
} else {
    wrongAlert.setAttribute("style","display:inline-block");
    resultAlert.setAttribute("style","display:none")
    timeleft = timeleft - penalty;
}
questionFour.setAttribute("style","display:none");
allDone.setAttribute("style","display:inline-block");
score = timeleft;
finalScore.innerHTML = score;
timeleft = 0;
});

document.getElementById("submit").addEventListener("click", function() {
resultAlert.setAttribute("style","display:none");
var newScore = {init:initial.value, score:score}
localStorage.setItem("newScore", JSON.stringify(newScore));
var stringObj = JSON.parse(localStorage.getItem('newScore'));
var int = stringObj.init;
var scor = stringObj.score;
var newLi = document.createElement("li");
newLi.innerHTML = int + " " + scor;
var scoreBoard = document.getElementById("scoreBoard");
scoreBoard.appendChild(newLi);
});

viewHighScores.addEventListener("click", function() {
allDone.setAttribute("style","display:none");
questionFour.setAttribute("style","display:none");
questionThree.setAttribute("style","display:none");
questionTwo.setAttribute("style","display:none");
questionOne.setAttribute("style","display:none");
button.setAttribute("style", "display:none");
pEl.setAttribute("style", "display:none");
h1.setAttribute("style", "display:none");
resultAlert.setAttribute("style","display:none");
highScoresBoard.setAttribute("style","display:inline-block");
var stringObj = JSON.parse(localStorage.getItem('newScore'));
var int = stringObj.init;
var scor = stringObj.score;
var newLi = document.createElement("li");
newLi.innerHTML = int + " " + scor;
var hiScorBoard = document.getElementById("hiScorBoard");
hiScorBoard.appendChild(newLi);
});     

document.getElementById("goBack").addEventListener("click", function() {

location.reload();
});

document.getElementById("clearHighScores").addEventListener("click", function(){
var hiScorBoard = document.getElementById("hiScorBoard");
hiScorBoard.innerHTML = "";
localStorage.clear();

})