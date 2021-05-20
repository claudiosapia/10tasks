

describe('createScores works as it should', () => {
     beforeEach(() => {
        jest.resetModules();
    });
  //append html to document.body = to task6.ejs
  document.body.innerHTML = `
   <div class="jumbotron">
    <h1 class="display-1">Task 6</h1> <br>
    <p class="lead">Implement and test a program to calculate the number of points gained by five hockey teams, given the number of wins, draws and lost games, assuming a win is worth 3 points, a draw 1 point, and no points for a lost game. <br>
        You should create your own test data and output the results on screen, in a suitable format</p>

</div>
<br><br> <div id="container" class="text-center ">
<table id="table0" class="table">
  
</table>

<table id="table" border="1">
            
  <!-- The Row Number 0 -->
  <tr>
      <th>Team Name</th>
      <th>Wins</th>
      <th>Draws</th>
      <th>Games lost</th>
      <th>Total Score</th>

  </tr>
  
</table>
</div>

    
    <br><br>
  `;

//import elems stored in a obj, from task6
const exported= require('../task6')
//import teams and store in const var
const teams = exported.teams;
//test teams
  it('tests Toronto Maple Leaf 1st elements in team before running functions', () => {
 
// expect(typeof scores).toBe("number");
   expect(teams.length).toBe(5);

   expect(teams[0][0]).toBe('Toronto Maple Leaf')
   expect(teams[0][1]).toBe(5)
   expect(teams[0][2]).toBe(1)
   expect(teams[0][3]).toBe(0)

 expect(typeof teams[0][1]).toBe('number')
   expect(typeof teams[0][2]).toBe('number')
   expect(typeof teams[0][3]).toBe('number')

   expect(teams[0][4]).toBe(undefined)
  
expect(teams[0]).toMatchSnapshot();


});
  it('tests all teams before running functions, wins,draws >= 0 and <=10, team name is a string', () => {
 //loop through teams elements to test that elements format is correct.
    for (let i = 0; i < teams.length; i++) {


  expect(typeof teams[i][0]).not.toBe('number')
//check that each team's length is 4
   expect(teams[i].length).toBe(4);
//check that each team's name is a string
   expect(typeof teams[i][0]).toBe('string')
   //check that each team's wins is a number
   expect(typeof teams[i][1]).toBe('number')
      //check that each team's draws is a number
   expect(typeof teams[i][2]).toBe('number')
 //check that each team's game lost is a number
   expect(typeof teams[i][3]).toBe('number')
    //check that each team's total score is undefined
   expect(teams[i][4]).toBe(undefined)
  
// wins, draw and game lost of each team are >=0 and <=10
   expect(teams[i][1]).toBeGreaterThanOrEqual(0);
expect(teams[i][1]).toBeLessThanOrEqual(10);
   expect(teams[i][2]).toBeLessThanOrEqual(10);
   expect(teams[i][2]).toBeLessThanOrEqual(10);
  expect(teams[i][3]).toBeGreaterThanOrEqual(0);
expect(teams[i][3]).toBeLessThanOrEqual(10);

expect(teams[i]).toMatchSnapshot();

    }


});

it('tests createScores function', () => {
  //store createScores function imported from obj in task6.js into a const var.
const addMock1 = jest.spyOn(exported, "createScores");
//store output of function in a var.

const result= addMock1(teams);
  expect(typeof result).toBe("object");
  expect(result).toBe(teams);
  //check that after running createScores function, value of calculated points is added to elements:
   expect(typeof teams[0][4]).toBe('number')
   //loop through teams elems and check that values are added correctly after function is run
for (let i = 0; i < teams.length; i++) {
  expect(typeof teams[i][4]).toBe('number')

  //check that value of calc. points is added to all teams
expect(teams[i].length).toBe(5);
expect(teams[i]).toMatchSnapshot();

}

});
  




});


describe('createTables works as it should', () => {
 
// configure jsdom,  explicitly imported it in  test file,
const path = require("path");
const { JSDOM } = require("jsdom");
const fs = require("fs");
// built-in fs Node module to read the HTML file and store it in a variable:
const html = fs.readFileSync(
  path.resolve(__dirname, "../views/task6.ejs"),
  "utf8"
);
let table;
//init function createScores var and
let createScores;
let teams;
//Runs a function before each of the tests in this file runs. If the function returns a promise or is a generator, Jest waits for that promise to resolve before running the test.

//in  beforeEach method, I used jsdom to render my HTML so that I could test against it:
beforeEach(() => {
  dom = new JSDOM(html);
  main = dom.window.document.body;
  //get table elements
  table = main.querySelectorAll("table");
  //select table
    myTable = table[0];
//create copy of teams
teams = [
  ["Toronto Maple Leaf", 5, 1, 0],
  ["Philadelphia Flyers", 2, 2, 2],
  ["New York Rangers", 3, 1, 2],
  ["Boston Bruins", 4, 1, 1],
  ["Vancouver Canucks", 1, 3, 2],
];

 createScores= function(elem){
for (let i = 0; i < elem.length; i++) {
  //calc wins
  const wins = elem[i][1] * 3;
  //i[1] will store draw
  const draws = elem[i][2];
  //i[2] will store lost games
  const lost = elem[i][3];
  const totalScore = wins + draws;
  elem[i][4] = totalScore;
}
}
//run funct. to create scores adding them to teams elements.
});

it('tests createTables function, that create and display table to page showing values of teams: Team Name,	Wins,	Draws,	Games lost', () => {

  
 //create Table (copy of function createTable)
  for (let i = 0; i < teams.length; i++) {
  // create a new row
  let newRow = myTable.insertRow(myTable.length);
  for (let j = 0; j < teams[i].length; j++) {
    // create a new cell
    let cell = newRow.insertCell(j);

    // add value to the cell
    cell.innerHTML = teams[i][j]
  //create table
  }
}
//get innerHtml of myTable
var lvalue = myTable.innerHTML;
//split value
var larr = lvalue.split(' ');
//init len var= 0
var len = 0;

// For each iterates over the index of arrays
for(var i in larr) { 
     len += larr[ i ].length // Acummulate the length of all the strings
}
//expect length of string to be 333 (before function fires)
  expect(len).toBe(333);

})
//INTEGRATION OF COMPONENTS TESTS
it('tests functions createScore and createTable for integration, tests createTables function, that creates and display table to page showing values of teams: Team Name,	Wins,	Draws	Games, lost AND tot scores USING CREATESCORES FUNCTION STORED IN TOTAL SCORE', () => {
//run createScores function
createScores(teams)

//CREATE TABLE AFTER CALC. SCORES USING CREATESCORES FUNCT.
//create Table (copy of function createTable)
  for (let i = 0; i < teams.length; i++) {
  // create a new row
  let newRow = myTable.insertRow(myTable.length);
  for (let j = 0; j < teams[i].length; j++) {
    // create a new cell
    let cell = newRow.insertCell(j);

    // add value to the cell
    cell.innerHTML = teams[i][j]
  //create table
  }
}

//get innerHtml of myTable
var lvalue = myTable.innerHTML;
//split value
var larr = lvalue.split(' ');
//init len var= 0
var len = 0;


// For each iterates over the index of arrays
for(var i in larr) { 
     len += larr[ i ].length // Acummulate the length of all the strings
}

//expect length of string to be 386 (after function createScores fires)

  expect(len).toBe(386);


});
});










