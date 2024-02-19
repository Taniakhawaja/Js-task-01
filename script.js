// exercise1//

/*const userName = prompt("Enter your name");
function welcome(){
    alert("Welcome" +userName);
}
welcome ();*/

//exercise2//
/*const quotes = [
    "Quote 1",
    "Quote 2",
    "Quote 3"
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    console.log(quote);
  }
  
  generateQuote();*/

//exercise3//
 function generateRandomNumber(){
    return Math.floor(Math.random() * 100) + 1;
 }
 const randomNumber = generateRandomNumber();
 console.log(randomNumber);
