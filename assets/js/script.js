$(document).ready(function() {
	
var Magic8Ball = {};
$('#answer').hide();
Magic8Ball.listOfAnswers = ["It is certain", "What is html?", "I hope so", "Without a doubt", "Yes - definitely o.o", "You may rely on it", "As I see it, yes", "Most likely","Nay", "Outlook good", "Yes", "Yeeh", "Signs point to yes", "You good?", "Ask again later", "Better not tell you now", "Give me your money first", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "You don't look so good", "You know Da' way", "What is life"];
Magic8Ball.askQuestion = function (question) {


  $('#answer').fadeIn(4000);
  if (question) {
      var answerRandomNumber = Math.random();
      var answerRandomArray = answerRandomNumber * this.listOfAnswers.length;
      var answerRandomIndex = Math.floor(answerRandomArray);
      var answerRandom = this.listOfAnswers[answerRandomIndex];
    console.log("Your question is " + question + ". The answer is " + answerRandom);
    $("#answer").text( answerRandom );
    $('#8ball').attr('src', "/brainstation_in_person_8ball/assets/img/answerside.png");
    $('#8ball').effect("shake");
  } else {
    $("#answer").text( "Enter an actual question" );
    $('#8ball').attr('src', "/brainstation_in_person_8ball/assets/img/answerside.png");
    $('#8ball').effect("shake");
    console.log("Enter an actual question.");
  }
};

var askMe = function() {
	$('#answer').hide();
	
	$("#8ball").attr('src', "/brainstation_in_person_8ball/assets/img/8side.png");
	
	setTimeout(
    function() {
      var question = prompt("ASK A YES/NO QUESTION!");
      var shake = document.getElementById("#8ball");
      
      setTimeout(() => {
        shake.style.animation = "animation shake 3";
        console.log(shake)
        // animation-iteration-count: infinite;
        }, 10000);
      Magic8Ball.askQuestion(question);
    }, 500);
}	
$("#questionButton").click( askMe );

});
