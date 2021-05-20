
  //import elems stored in a obj, from task7

describe('randomLetter works as it should', () => {
const {randomLetter, letters}= require('../task7')
//create div element
const div = document.createElement("div");

//create list of letters using function, split letters will create array with split elements, then sorted
const lettersList = randomLetter(35);
const sortedList = lettersList.split("").sort();


  it('tests function randomLetter that shuffles letters from A to Z', () => {
      //store result in const var.
 const result= randomLetter(35);
//check that randomLetter is a function
   expect(typeof randomLetter).toBe('function');
   //check that typeof result is string
   expect(typeof result).toBe('string');  
   //check that length of result is 35 (characters)
 expect(result.length).toBe(35);  
 //letters' format is number
expect(typeof letters).toBe('string');
//26 characters are stored in var letters
expect(letters.length).toBe(26);
//
    });

  it('tests that correct number and format of random letters is  sorted and displayed correctly, element at center of the list is selected', () => {
//create list of letters using function, split letters will create array with split elements, then sorted
const lettersList = randomLetter(35);
const sortedList = lettersList.split("").sort();
//get char in mid of list and stores it in var.
const elementMid= sortedList[Math.round((sortedList.length - 1) / 2)];
//lettersList is a string
 expect(typeof lettersList).toBe('string');  
 //sortedList is an object
 expect(typeof sortedList).toBe('object');  
 //element mid formula is correct;
expect(elementMid).toEqual(sortedList[Math.round((sortedList.length - 1) / 2)]);  
//lettersList length is 35 and = to sortedList
expect(lettersList.length).toBe(35)
expect(lettersList.length).toEqual(sortedList.length)
//sortedList length is 35
expect(sortedList.length).toBe(35)
//element in mid of list is 1
expect(elementMid.length).toBe(1)

expect(letters).toMatchSnapshot()
expect(lettersList.length).toMatchSnapshot();
expect(sortedList.length).toMatchSnapshot();
expect(elementMid.length).toMatchSnapshot();
});

  it('tests that random letters are split, sorted and displayed correctly', () => {
//1. Display random letters,
//2. Display random letters, split "," and sorted
//3. Display element in middle of sorted list
//add innerHTML to div displaying list of letters, sorted list and element in the middle (highlighted)
div.innerHTML = `<h2 class='text-primary'>Random letters unsorted: </h2><br>
<h1>${lettersList}</h1><br><h2 class='text-danger'> Random letters, sorted A-Z:</h2><br>
<h1>${sortedList}</h1> <br>
<h2 class='text-success'>Display Element in middle of sorted list: </h2><br>
<h1>${sortedList[Math.round((sortedList.length - 1) / 2)]}</h1>`; //return element in mid of sortedList

//append div to body
document.body.appendChild(div);



//get innerHtml of div
const lvalue = div.innerHTML;
//split value
const larr = lvalue.split(' ');
//init len var= 0
let len = 0;
// For each iterates over the index of arrays
for(var i in larr) { 
     len += larr[ i ].length // Acummulate the length of all the strings
}
//expect length of string to be 386 (after function RandomLetters fires)
  expect(len).toBe(323);
 expect(len).toMatchSnapshot();
 });


  });
  
