

// the function that will get called to generate a random answer
function generateAnswer () {
// variable userQuestion that will assign the Users question into the variable userQuestion
var userQuestion = (document.getElementById("userQuestion").value);
// an array that contains 20 possible random asnwers
var answers = ['It is certain', 'It is decidely so', 'Without a doubt', 'Yes, definitely', 'You may rely on it', 'As I see it,yes','Most Likely', 'Outlook Good', 'Yes','Signs point to yes', 'Reply hazy try again','Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Do not count on it', 'My reply is no', 'My sources say no','Outlook not so good', 'Very doubtful' ];
// variable that contains the random number generator that cycles through the answers array by .length
var randomIndex = Math.floor(Math.random()*answers.length);
// variable that contains the user question with the randonly generated answer.
var newAnswer = userQuestion + " " + ":" + answers[randomIndex];
// alert(newAnswer);


// Inserting the randonly generated answer into the html
 document.getElementById('questionAnswers').innerHTML=newAnswer;

};








//Output the question with the random answer.




//Put the question and answer into a loop that stops when the user enters STOP.
