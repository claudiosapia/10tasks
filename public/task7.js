"use strict";  
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


//randomLetter function that outputs random letters from A to Z
function randomLetter(length) {
  //init empty array
  var array = [];
//store letters A to Z to var.

  //loop through letter, output random letter
  for (let i = 0; i < length; i++) {
    array += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return array.toUpperCase(); //makes sure letters are in uppercases
}
//create list of letters using function, split letters will create array with split elements, then sorted
const lettersList = randomLetter(35);
const splitLetters = lettersList.split("")
//bubbleSort is a simple sorting algorithm
const bubbleSort = (arr) => {
  //get array length and stores it in var
    let len = arr.length;
    //loop through length of array 
    for (let i = 0; i < len; i++) {
      //loop through length of array inner loop
        for (let j = 0; j < len; j++) {
           //make sure every item is sorted (if elem at index of [j] is > than arr[j] + 1)
            if (arr[j] > arr[j + 1]) {
              //store element at index of j in a temp var
                const tmp = arr[j];
                //swap arr at index of j = arr[j] + 1 
                arr[j] = arr[j + 1];
                //swap arr [j + 1] with arr[j] value stored in tmp var
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
};
//sort letters using a simple sorting algorithm bubbleSort
const sortedList= bubbleSort(splitLetters)


//create div element
const div = document.createElement("div");

//1. Display random letters,
//2. Display random letters, split "," and sorted
//3. Display element in middle of sorted list

div.innerHTML = `<h2 class='text-primary'>Random letters unsorted: </h2><br>
<h1>${lettersList}</h1><br><h2 class='text-danger'> Random letters, sorted A-Z:</h2><br>
<h1>${sortedList}</h1> <br>
<h2 class='text-success'>Display Element in middle of sorted list: </h2><br>
<h1>${sortedList[Math.round((sortedList.length - 1) / 2)]}</h1>`; //return element in mid of sortedList
document.body.appendChild(div);


module.exports= {randomLetter, letters};