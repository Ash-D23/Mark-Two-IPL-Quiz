var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
	{
		name: 'Ashutosh',
		score: 3
	},

	{
		name: 'Akash',
		score: 2
	}
];

// array of objects with questions and answers with options
var questions = [
	{
		question: 'Which season(s) had the most number of hat-tricks?',
    options: ['2014','2008 and 2017','2009 and 2013'],
		answer: '2'
	},
	{
		question: 'Which player holds the record for the fastest fifty in IPL?',
    options: ['K. L. Rahul', 'Nicholas Pooran', 'Yuvraj Singh'],
		answer: '1'
	},
	{
		question: 'Which Indian player has scored the fastest hundred in the IPL?',
    options: ['Yusuf Pathan', 'Virat Kohli', 'Mayank Agarwal'],
		answer: '1'
	},
  {
		question: 'Which team won ipl in 2018?',
    options: ['CSK', 'MI', 'SRH'],
		answer: '1'
	},
  {
		question: 'Which team won ipl in 2020?',
    options: ['CSK', 'MI', 'SRH'],
		answer: '2'
	}
];

// into function to get name
function intro(){
  console.log("Welcome to My Quiz App")
  var userName = readlineSync.question('Enter your name? ');
console.log('Hi ' + userName + '! Let\'s Start\n');
}

// game function to ask questions from array and check answers and update score
function game(){
  for (var i=0; i < questions.length; i++){
    var current_question = questions[i];

    // check answers and update score
    play(current_question.question, current_question.options, current_question.answer)
  }
}

// get input from user for the question and compare
function play(question, options, answer){
  console.log(question)

  for (var i=0 ; i<options.length; i++){
    console.log(i+1, ". ", options[i])
  }

  var user_answer = readlineSync.question('Enter the Option: ')

  if(user_answer.toLowerCase() === answer.toLowerCase()){
    console.log('Correct Answer!');
		score = score + 1;
  }else{
    console.log('Wrong Answer!');
  }

  //Display score
  console.log('Current score: ', score);
	console.log('-------------');
}

// Display Final Score and Previous results and rank
function showResults(){
  console.log('Final Score: ', score);
  console.log('Thanks for Playing!');

  calculateRank();
}

function calculateRank(){
  user_score = score
  rank=1

  // check all high scores and calculate how many scores are above user's score
  for (var j=0; j<highScores.length; j++){
    current_score=highScores[j].score;
    if(current_score > score){
      rank+=1
    }
  }

  console.log("Your Rank: ", rank)
}

intro()

game()

showResults()
