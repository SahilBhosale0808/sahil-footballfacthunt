var chalk = require("chalk");
var readlineSync = require('readline-sync');


var score = 0;

var highscore = 14;

console.log("WELCOME")

console.log(chalk.greenBright("\nThink you are a true Football expert? Take this addictive Football quizz and prove it. "))

var userName = readlineSync.question(chalk.greenBright("\nWhats your Name? "));

console.log(chalk.blue("\nWelcome", userName, "to Football Fact Hunt"))



console.log("\nThis game contains 3 levels each level contains 5 questions.You need to get 4 questions right to go to the next level \nALL THE BEST")

console.log(chalk.bold.cyan("\n---Level 1--- "))



function play (question,answer){
  var userAnswer = readlineSync.question(question)

  if (userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("Right!"),
    score = score + 1
  }else{
    console.log("Wrong!")
  }

  console.log("Current Score: ",score)
  console.log("------------------------------------")

}


var questions = [ {
  question : (chalk.blueBright("The biggest event for every soccer fan is the World Cup. How often is it played? Once in __ years ")),
  answer : "4"
},

{
  question : (chalk.blueBright("How many blows of his whistle does the Referee give to signify the end of the game? ")),
  answer : "3"
},

{
  question : (chalk.blueBright("Who is Indian Football Team Captain ")),
  answer : "Sunil Chettri"
},

{
  question : (chalk.blueBright("Which team did Ronaldo play for before signing for Real Madrid? ")),
  answer : "Manchester United"
},

{
  question : (chalk.blueBright("What is it called when a player without the ball on the offensive team is behind the last defender or fullback ")),
  answer : "Offside"
}


 ]

for (var i = 0; i<questions.length; i = i+1){
  currentQuestion = questions[i]
  play(currentQuestion.question,currentQuestion.answer)
}

console.log( userName,"you Scored ", score, "points in Level 1")


//***********************************************

if(score >= 4){

  console.log(chalk.greenBright("\nCongrats You Cleared Level 1 and are Eligible for Level 2 "))

  console.log(chalk.bold.cyan("\n---Level 2--- "))

  console.log("Already thinking yourself as true fan here you go with next level")

  function play (question,answer){
  var userAnswer = readlineSync.question(question)

  if (userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("Right!"),
    score = score + 1
  }else{
    console.log("Wrong!")
  }

  console.log("Current Score: ",score)
  console.log("------------------------------------")
  }
  

  var questions = [ {
    question : (chalk.blueBright("Which club has won the most Champions League titles? ")),
    answer : "Real Madrid"
  },

  {
    question : (chalk.blueBright("Messi has won a record number of Ballon d'Or awards how many? ")),
    answer : "6"
  },

  {
    question : (chalk.blueBright("With 260 goals, who is the Premier League's all-time top scorer?(Enter full name) ")),
    answer : "Alan Shearer"
  },

  {
    question : (chalk.blueBright("Who is the Champions League's top goalscorer of all time?(Enter full name) ")),
    answer : "Cristiano Ronaldo"
  },

  {
    question : (chalk.blueBright("Who is known as the 'King of Soccer'? ")),
    answer : "Pele"
  }
  ]

  for (var i = 0; i<questions.length; i = i+1){
    currentQuestion = questions[i]
    play(currentQuestion.question,currentQuestion.answer)
  }
  
  console.log(userName,"you Scored ", score, "points in Level 2")


}else if(score <4){
  console.log("\nYou did not qualify Game Over. You need to Know More About Football")
}


//***********************************************


if(score >= 8){

  console.log(chalk.bold.cyan("\n---Level 3--- "))

  console.log("Good Job! Here you go with final level")

  function play (question,answer){
  var userAnswer = readlineSync.question(question)

  if (userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.yellow("Right!")),
    score = score + 1
  }else{
    console.log(chalk.red("Wrong!"))
  }

  console.log("Current Score: ",score)
  console.log("------------------------------------")
  }
  

  var questions = [ {
    question : (chalk.blueBright("Which team won the first Premier League title? ")),
    answer : "Manchester United"
  },

  {
    question : (chalk.blueBright("Which country won the first ever World Cup in 1930? ")),
    answer : "Uruguay"
  },

  {
    question : (chalk.blueBright("Which country has appeared in three World Cup finals but never won the competition? ")),
    answer : "Netherlands"
  },

  {
    question : (chalk.blueBright("With 202 clean sheets, which goalkeeper has the best record in the Premier League? (Enter full name) ")),
    answer : "Petr Cech"
  },

  {
    question : (chalk.blueBright("Which outfield player appeared in the Champions League final in three different decades? (Enter full name) ")),
    answer : "Ryan Giggs"
  }
  ]

  for (var i = 0; i<questions.length; i = i+1){
    currentQuestion = questions[i]
    play(currentQuestion.question,currentQuestion.answer)
  }
  
  console.log(userName,"you Scored ", score, "points in Level 3 \nWell PLayed!! \nThank you for playing the game",userName)


}else if(score < 7){
  console.log("\n You did not qualify Game Over. :(" )
}

console.log(chalk.green("Highscore is:" ,highscore))
if(score < highscore){
  console.log("You didnt beat the highscore")

}
else{
  console.log("You Created a new Highscore")
}