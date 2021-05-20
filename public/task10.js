'use strict';

const readTextFile= function(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("colors1/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
//usage:
readTextFile("public/colors1.json", function(text){
    var data = JSON.parse(text);


const colors = [
      data.red,
      data.blue,
      data.green,
      data.yellow,
      data.orange,
      data.pink,
    ];

// //mocked colors for testing:
// const colors=[   'red',
//      'blue',
//      'green',
//      'yellow',
//      'orange',
//      'pink']

let play;
    //init play = false to change css bg color when playing
    play = false;

    //init wallet so user can cash out or play when game balance < 0; --NOT REQUIRED TASK EXTRA
    let wallet = 0;
    //let maxRounds= max rounds per game
    let maxRounds = 6;
    //init user winnings
    let wins = 0;
    //init let round to count round number and finish game when > max round
    let round = 0;
    //target div to display winning and round number
    const result = document.getElementById("result");
    //target buttons start, cashout(extra-not required) and tryAgain
    const button = document.getElementById("start");
    const tryAgain = document.getElementById("tryAgain");
    const cashOut = document.getElementById("cashOut");

    //init let play to establish if game on play or not to create change css style to page

    //hide try again button until game ends
    tryAgain.classList.add("hide");
    //START GAME
    //add click event to: start
    const resetPage= function(){
                  //reload page
           location.reload();
               }
    const playGame= function(){
      play = true;
      //arrayColors will store all of the random colors for each click so we can compare and create logic
      const arrayOfColors = [];
      //decrease maxrounds , at 0 game ends
      maxRounds--;
      //increase round number at every click to check round number
      round++;
      // //for each element:

    const square1=document.querySelector('.square1')
        const square2=document.querySelector('.square2');
                const square3=document.querySelector('.square3')

      document.querySelectorAll(".square").forEach(element => {
        //give random bg colors to squares
        // generate random color at each click for each element and assign to elements
        const random = Math.floor(Math.random() * colors.length);
        const randomColor = colors[random];
        //display color name as text on square
        element.textContent = randomColor;
        //display each random bg color on each square
        element.style.backgroundColor = randomColor;
        // push colors to array to create conditions and game logic
        arrayOfColors.push(randomColor);
      });
      if (play === true) {
        document.querySelector(".bg").classList.remove("bg-white");
        document.querySelector(".bg").classList.add("bgPlay");
      } else {
        document.querySelector(".bg").classList.remove("bgPlay");
        document.querySelector(".bg").classList.add("bg-white");
      }
      // if current game balance is < 0
      if (wins < 0) {
        wallet -= 0.5; //withdraw 0.5£ from wallet
        wins += 50; // add 0.5£ to game balance
        const formatScore = parseFloat(wins) / 100; //format let containing winnings
         const score = formatScore.toFixed(2); // round up let so we get correct value
      }
      // if wallet <=0 and is not a number display prompt to user so he can topUp
      if (wallet <= 0 || isNaN(wallet)) {
        const askMoney = parseFloat(
          prompt("Please enter a deposit of at least £1 to play", 5) 
        );

        //return prompt to user
        function getDeposit() {
          return askMoney;
        }
        //wallet will be = to prompt value or if input ! a numb user will get alert message
        function topUpMoney() {
          wallet = parseInt(getDeposit());
         //if user enters incorrect format of value when prompted
          if (isNaN(askMoney)) {
            topUpMoney();
          //if user enters amount below or = 0 or > 100;
          } else if(askMoney<=0 || askMoney >100){
           
           alert('THE AMOUNT ENTERED IS INCORRECT!')
       resetPage();

          } else {
            alert("Thank You for your deposit of £ " + getDeposit());
          }
        }

        topUpMoney();
      }

      // check if all of the colors match
      if (maxRounds >= 0) {
        if (
          arrayOfColors[0] === arrayOfColors[1] &&
          arrayOfColors[0] === arrayOfColors[2] &&
          arrayOfColors[1] === arrayOfColors[2]
        ) {
          //player win £1
          wins += 100;
          const formatScore = parseFloat(wins) / 100;
         const score = formatScore.toFixed(2);
          result.innerHTML = `<p class='lead text-primary'>Your Wallet: <span id='credit' class=text-danger'>£${wallet}</span></p><br>This is round:<p class='lead text-danger round'>${round}</p>
           Congratulations! The 3 Colors Match! You Won <span class='lead text-danger roundWinnings'>£ 1 </span><span class='lead text-white'> your game balance is:</span> 
           <span class='lead text-danger score'>£${score}</span><br>You have:<span class='lead text-danger'> ${maxRounds}  rounds left</span>`;
          // if only 2 colors match
        } else if (
          arrayOfColors[0] === arrayOfColors[1] ||
          arrayOfColors[0] === arrayOfColors[2] ||
          arrayOfColors[1] === arrayOfColors[2]
        ) {
          //increase win by 0.50£
          wins += 50;
          //format winning to display correct value
          const formatScore = parseFloat(wins) / 100.0;
        const score = formatScore.toFixed(2);
          //output result keeping track of wallet, winnings, rounds and rounds left
          result.innerHTML = `<p class='lead text-primary'>Your Wallet:<span id='credit' class='lead text-danger'>£${wallet}</span></p><br>This is round:<p class='lead text-danger round'>${round}</p>
           2 colors match! You Won <span class='lead text-danger roundWinnings'>£0.50 </span><span class='lead text-white'> your game balance is:</span>
           <span class='lead text-danger score'>£${score}</span><br> You have:<span class='lead text-danger'> ${maxRounds}  rounds left</span>`;
        } else if (
          //if any any of the 3 colours are not === to each other
          arrayOfColors[0] !== arrayOfColors[1] &&
          arrayOfColors[0] !== arrayOfColors[2] &&
          arrayOfColors[1] !== arrayOfColors[2]
        ) {
          wins -= 50; //decrease winnings by 0.50 displaying correct format
          const formatScore = parseFloat(wins) / 100;
             //real variable    
         const score = formatScore.toFixed(2);
          result.innerHTML = `<p class='lead text-primary'>Your Wallet: <span id='credit' class='lead text-danger'>£${wallet}</span> </p><br>This is round:<p class='lead text-danger round'>${round}</p>
           Sorry! You have lost, we have detracted <span class='lead text-danger roundWinnings'>-£0.50 </span><span class='lead text-white'> Your game balance is:</span>
           <span class='lead text-danger score'>£ ${score}</span><br> You have:<span class='lead text-danger roundLeft'> ${maxRounds}  rounds left</span>`;
        }
      }
      // if round lefts ar less or = 0 display final results and messages, hide button start and display button try again
      if (maxRounds <= 0) {
        round = 6;
        maxRounds = 0;
        play = false;
        //chec if play === false to change bg colour
        if (play === false) {
          document.querySelector(".bg").classList.remove("bg-Play");
          document.querySelector(".bg").classList.add("bg-white");
        }
        const formatScore = parseFloat(wins) / 100;
       const score = formatScore.toFixed(2);
        result.innerHTML = `<br><br>Your credit is<span class='lead text-primary' id='credit'>£${wallet}</span></p><br><p class='lead text-danger'>This is round:<p class='lead text-danger round'>${round}</p>
       <span class='lead text-dark'>Game balance:</span> <span class='lead text-danger score'>£${score}</span> You have: <p class='lead text-danger'>${maxRounds}<span class='lead text-dark'> rounds left</span></p> <p class='lead text-success'>You will carry your current game balance to the next game if you don't wish to Cash Out now.</p>
         <br>`;
        button.classList.add("hide");
        tryAgain.classList.remove("hide");
      }

    }
   
       button.addEventListener("click",playGame);

//FUNCTION reTry: resets game values so user can play again
const reTry= function(){
      //play = true -> change bg colour
      play = true;
      round = 0;
      maxRounds = 6;
      //hide tryagain but and show start button
      button.classList.remove("hide");
      tryAgain.classList.add("hide");
      //target all squares and reset colors and innertxt
      document.querySelectorAll(".square").forEach(element => {
        element.style.backgroundColor = "white";
        element.textContent = "";
      });
      // reset arrayOfColors and display message to user
      result.innerHTML = `<br><br><p class='lead text-success newGame'>THANKS FOR PLAYING AGAIN</p><br><p class='lead text-success'>You will carry your current game balance to the next game if you don't wish to Cash Out now.</p>
     <span class='lead text-success'>  You have</span> <p id='credit' class='lead text-danger'>£${wallet} in your Wallet</p><br>`;
}
  //trigger FUNCTION RETRY BY CLICKING ON button tryagain to reset game values so user can play again
tryAgain.addEventListener("click", reTry)



    //trigger cashout button TO WITHDRAW VALUE FROM SCORE AND ADD TO WALLET
const withdraw= function(){
      const formatScore = parseFloat(wins) / 100;
      const score = formatScore.toFixed(2);
      //add winnings to wallet
      wallet += Number(score); //add current game balance to wallet
      //if winnings > 0 display message to user else warn user that wallet was updated due to negative value
      if (score > 0) {
        result.innerHTML = `You have withdrawn <span class='lead text-danger gameBalance'>£${score}</span> from your total game balance , You have: <p id='wallet' class='lead text-danger'>£${wallet} in your wallet</p>`;
        wins = 0;
      } else {
        result.innerHTML = `<span class='lead text-white'>Your game balance is:</span><span class='lead text-danger gameBalance'>${score}</span> <br>Your wallet has been <span class='lead text-danger'> Updated </span> You have: <p id='wallet' class='lead text-danger'>£${wallet} in your wallet</p>`;
      }
}
//add click event to cashOut to trigger withdraw funct.
     cashOut.addEventListener("click", withdraw);

          module.exports= {play,colors,playGame, withdraw,maxRounds, wallet,wins,
 round ,result, button, tryAgain,cashOut,reTry,resetPage};  

});



  //COMMENTED CODE BELOW WAS USED FOR TESTING ONLY INSIDE FUNCTION PLAYGAME -CHANGED VALUES MANUALLY TO MATCH 2 3 OR NO COLORS ONLY:
    // square1.style.backgroundColor = 'blue';
    //     square2.style.backgroundColor = 'blue';
    //     square3.style.backgroundColor = 'blue';
           
    // square1.textContent = 'blue';
    //     square2.textContent = 'blue';
    //     square3.textContent = 'blue';