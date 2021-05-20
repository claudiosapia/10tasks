//init array of teams with data
const teams = [
  ["Toronto Maple Leaf", 5, 1, 0],
  ["Philadelphia Flyers", 2, 2, 2],
  ["New York Rangers", 3, 1, 2],
  ["Boston Bruins", 4, 1, 1],
  ["Vancouver Canucks", 1, 3, 2],
];
//loop through teams array  to calculate the number of points gained by teams, a win is worth 3 points, a draw 1 point, and no points for a lost game.
const createScores= function(elem){
for (let i = 0; i < elem.length; i++) {
  //calc wins
  const wins = elem[i][1] * 3;
  //results[1] will store draw
  const draws = elem[i][2];
  //results[2] will store lost games
  const lost = elem[i][3];
  const totalScore = wins + draws;
  elem[i][4] = totalScore;
}
}
//run funct. to create scores adding them to teams elements.
createScores(teams)

const createTable= function(el){
//create table
for (let i = 0; i < el.length; i++) {
  // create a new row
  let newRow = table.insertRow(table.length);
  for (let j = 0; j < el[i].length; j++) {
    // create a new cell
    let cell = newRow.insertCell(j);

    // add value to the cell
    cell.innerHTML = el[i][j];
  }
}

}
//run function to create table adding updated teams elements with calc. scores, and display to page.
createTable(teams)



//export elements for testing:

const exported= {
   teams : [
  ["Toronto Maple Leaf", 5, 1, 0],
  ["Philadelphia Flyers", 2, 2, 2],
  ["New York Rangers", 3, 1, 2],
  ["Boston Bruins", 4, 1, 1],
  ["Vancouver Canucks", 1, 3, 2],
],
//loop through teams array  to calculate the number of points gained by teams, a win is worth 3 points, a draw 1 point, and no points for a lost game.
 createScores: function(elem){
for (let i = 0; i < elem.length; i++) {
  //calc wins
  const wins = elem[i][1] * 3;
  //results[1] will store draw
  const draws = elem[i][2];
  //results[2] will store lost games
  const lost = elem[i][3];
  const totalScore = wins + draws;
  elem[i][4] = totalScore;
}
return elem;
},


createTable: function(el){
//create table
for (let i = 0; i < el.length; i++) {
  // create a new row
  let newRow = table.insertRow(table.length);
  for (let j = 0; j < el[i].length; j++) {
    // create a new cell
    let cell = newRow.insertCell(j);

    // add value to the cell
    cell.innerHTML = el[i][j];
  }
}
}
}

module.exports = exported
