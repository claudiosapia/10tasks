




const express = require("express"); // import express

const request = require("supertest"); // supertest is a framework that allows to easily test web apis in jest

// configure jsdom,  explicitly imported it in  test file,
const path = require("path");
const { JSDOM } = require("jsdom");
const fs = require("fs");
// built-in fs Node module to read the HTML file and store it in a variable:
const html = fs.readFileSync(
  path.resolve(__dirname, "../views/task10.ejs"),
  "utf8"
);
//init variables:
let result;

// //INTEGRATION TEST OF COMPONENTS
describe('TEST COMPONENTS OF TASK 10', () => {
beforeEach(() => {    
        spyOn(window, "prompt").and.returnValue(5);
        spyOn(window, "confirm");
      

    });
    
document.body.innerHTML=`<title>Task 10</title>
</head>
<body>
<div class="jumbotron bg-white">
<h1 class="display-1">Task 10</h1><br>
<p class="lead"> Implement and test a program to simulate a simple game.<br><br> Your program should do the following:<br><br>
    Store six colours in an external file (Note: these colours can be your choice of words or graphics).<br> Create three arrays and input the colours to each of the arrays.<br> For each of the three arrays, create a random number between 1 and 6 and output that colour to the screen. If two of the colours match, the user wins 50 pence. <br> If all three colours match, the user wins &pound;1.<br> Allow the user to have five &lsquo;shots&rsquo; and keep track of their winnings.<br> Display suitable messages on screen.
    </p> <br><p> File handling : write, save and close on file:app.js</p></div>
    <br><br>
    <div class="jumbotron bg-white text-center bg">
        <p class="lead text-danger">Game rules:</p>
        <p class="lead text-primary">Match 3 colors and you<span class='text-danger'> WIN</span> £ 1</p>
        <p class="lead text-primary">Match 2 colors and you <span class='text-danger'>WIN</span> £ 0.50</p>
        <p class="lead text-primary">Match no colors and you <span class='text-danger'>LOOSE </span> £ 0.50</p>
        <button type="button" id="cashOut"  class="btn btn-warning btn-lg"> Cash Out </button> <br><br>
     <p class="lead text-warning warn">IF YOU LOOSE, AND YOUR GAME BALANCE IS LESS THAN 0, £ 0.50 IS <span class="text-danger">AUTOMATICALLY WITHDRAWN </span>FROM YOUR GAME WALLET</p>

      <div id="result"></div>

        <br><br>
        <div class="row">
            <div class="col-4">
                <div class="square square1"></div>
            </div>
            <div class="col-4"><div class="square square2"></div>

            </div>
                <div class="col-4"><div class="square square3"></div>

                </div>

        </div>


<br><br><br>
  
        <button type="button" id="start"  class="btn btn-success btn-lg"> Play </button> &nbsp;&nbsp;&nbsp;


        <button type="button" id="tryAgain"  class="btn btn-primary btn-lg"> Play Again </button>
<br>
      

    </div>`;  
    const {colors, play, reTry,withdraw, playGame,maxRounds, wallet,wins,
 round , button, tryAgain,cashOut }= require('../task10')

const t10 = require("../task10"); //import file we you have to test 
  it('tests colors array', () => {
// test.js
jest.mock('../task10'); // this happens automatically with automocking

//import data from colors1.json 
const data = require('../../colors1.json');
//TEST COLORS.LENGTH
expect(colors.length).toBe(6);
expect(colors.length).toMatchSnapshot();
//TEST THAT COLORS VALUES ARE WHAT THEY SHOULD BE
expect(colors[0]).toBe('red');

expect(colors[1]).toBe('blue');

expect(colors[2]).toBe('green');

expect(colors[3]).toBe('yellow');

expect(colors[4]).toBe('orange');

expect(colors[5]).toBe('pink');

});
 it('tests initial values of key variables', () => {


expect(maxRounds).toBe(6);
expect(wins).toBe(0);
expect(round).toBe(0)
expect(play).toBe(false)

expect(maxRounds).toMatchSnapshot();
expect(wins).toMatchSnapshot();
expect(round).toMatchSnapshot();
expect(play).toMatchSnapshot();

});
 it('tests initial values of key html elements stored in variables', () => {
 result= document.getElementById('result');

//result div should have id of result
expect(result.getAttribute('id')).toBe('result')
//button should have id of start
 expect(button.getAttribute('id')).toBe('start')
 //tryAgain should have id of tryAgain
expect(tryAgain.getAttribute('id')).toBe('tryAgain')
//cashOut should have id of cashOut
expect(cashOut.getAttribute('id')).toBe('cashOut')

 //reult should have value of null
expect(result.getAttribute('value')).toBe(null);


expect(result.getAttribute('value')).toMatchSnapshot();

});


});


