


describe('FULL TEST OF TASK 9, ', () => {
//create instance of task8.ejs (input value is changed to test  function )
    document.body.innerHTML=`<div class="jumbotron bg-white">
<p class="lead">Implement and test a program in your programming language which does the following:<br>
    Fills an array with 20 random integers between 1 and 10. Prints the array contents to screen. Finds and displays the maximum and minimum values in the array. Asks the user for an integer between 1 and 10 using input validation and displays how many times it occurs in the array. Asks the user for an integer between 1 and 10 using input validation and displays where in the array that number first occurs and indicates when it is not present</p></div>
<br><br><div class="jumbotron text-center bg-white">
<h2 id="randomNumbers" ></h2>&nbsp;<br><br>
<h4 class="display-4 text-success " id="min"></h4>
<h4  class="display-4 text-danger" id="max"></h4><br><br>
    <h3 class="display-4"><strong>PLease enter a number between 1 and 10 to find occurences in the array </h3><br>
    <h2></strong><input  class="form-control"  onfocus="this.value=''" type="number" placeholder="Enter a number between 1 and 10" value=""  id="input"  name='userInput'/></h2> <br>
    <br><br>    <h1 id="showInput"></h1>
    <br><br>
    <h1 id="occurences"></h1><br><br>
    <button type="button" id="getInput"  class="btn btn-primary btn-lg"> Submit </button>
    <br><br><br>
<div id="highlightDiv"><span id="highlightSpan"></span></div>
<br>
<div id="container" class="text-center "> 
    </div>
</div>`;
 //mockedKeyEvent is defined so we  run various tests changing key accordingly
mockedKeyEvent = new KeyboardEvent('keypress', { key: 5 });
//get input value and stor in mockedInput let variable
let mockedInput= document.getElementById('input').value;

//convert mockedInput from string to number
mockedInput =Number(mockedKeyEvent.key);
const alert= jest.spyOn(window, 'alert').mockImplementation(() => {});

//import elements from task9.js
const {min,max, randomNumbers, highlightDiv, array, button, showInput, showOccurences, displayMax, displayMin, countOccurence, linearSearch, displayResult}= require('../task9');


//INTEGRATION OF COMPONENTS
it('tests mocked user input, random numbers, let min and max, array, button', () => {


//2. display min and max values   -TASK
displayMax.innerHTML = `the maximum value is: ${max}`;
displayMin.innerHTML = `the minimum value is: ${min}`;

//3. display array of numbers   -TASK
randomNumbers.innerHTML = ` <h1 class='display-4 text-primary'>The random numbers of the array are:</h1> <br><h1 class='display-4'> ${array} </h1>  <br>`;
 
//get input value and stor in mockedInput let variable
let mockedInput= document.getElementById('input').value;

//convert mockedInput from string to number
mockedInput =Number(mockedKeyEvent.key);
//check if randomNumbers.innerHtml:
expect(randomNumbers.innerHTML).toContain(array)


//TEST MOCKED INPUT : SHOULD BE A NUMBER BETWEEN 1 AND 10
expect(mockedInput).toBe(Number(mockedKeyEvent.key));
expect(typeof mockedInput).toBe('number');
expect(mockedInput).toBeGreaterThanOrEqual(1);
expect(mockedInput).toBeLessThanOrEqual(10);
expect(typeof mockedInput).toMatchSnapshot();

 // Test the attributes of button as normal HTML
  expect(button.getAttribute('class')).toBe('btn btn-primary btn-lg')
  expect(button.getAttribute('id')).toBe('getInput')

//min should be:
  expect(typeof min).toBe('number');
  expect(min).toBe( Math.min(...array))

//max should be:
  expect(typeof max).toBe('number');
  expect(max).toBe( Math.max(...array))
  expect(max).toBeLessThanOrEqual(10);
  expect(min).toBeGreaterThanOrEqual(1)
//array.length should be:
  expect(array.length).toBe(20);

expect(array.length).toMatchSnapshot()

//randomNumber DISPLAY TEXT TO USER: 
  expect(randomNumbers.innerHTML.length).toBeGreaterThan(100);

});

it('tests countOccurence function', () => {

//store result output from funct. to test
const result= countOccurence(array,mockedInput);

//result is not undefined
expect(result).toBeGreaterThan(0)


//expect result format to be number
expect(typeof result).toBe('number')
expect(typeof result).toMatchSnapshot()


})

it('tests linearSearch function', () => {
//if alert is called, number is not included in the array (exceptional data)
expect(alert).toBeCalledTimes(0);
//store result output from funct. to test
const result= linearSearch(array,mockedInput);
//result is not undefined
expect(typeof result).not.toBe(undefined);


//expect result format to be number
expect(typeof result).toBe('number')
//result is CALCULATED
expect(result).toBeGreaterThan(0)
expect(typeof result).toMatchSnapshot()
})


})




//INTEGRATION TEST OF COMPONENTS
describe('TEST INTEGRATION OF COMPONENTS', () => {

//create instance of task8.ejs (input value is changed to test  function )
    document.body.innerHTML=`<div class="jumbotron bg-white">
<p class="lead">Implement and test a program in your programming language which does the following:<br>
    Fills an array with 20 random integers between 1 and 10. Prints the array contents to screen. Finds and displays the maximum and minimum values in the array. Asks the user for an integer between 1 and 10 using input validation and displays how many times it occurs in the array. Asks the user for an integer between 1 and 10 using input validation and displays where in the array that number first occurs and indicates when it is not present</p></div>
<br><br><div class="jumbotron text-center bg-white">
<h2 id="randomNumbers" ></h2>&nbsp;<br><br>
<h4 class="display-4 text-success " id="min"></h4>
<h4  class="display-4 text-danger" id="max"></h4><br><br>
    <h3 class="display-4"><strong>PLease enter a number between 1 and 10 to find occurences in the array </h3><br>
    <h2></strong><input  class="form-control"  onfocus="this.value=''" type="number" placeholder="Enter a number between 1 and 10" value="5"  id="input"  name='userInput'/></h2> <br>
    <br><br>    <h1 id="showInput"></h1>
    <br><br>
    <h1 id="occurences"></h1><br><br>
    <button type="button" id="getInput"  class="btn btn-primary btn-lg"> Submit </button>
    <br><br><br>
<div id="highlightDiv"><span id="highlightSpan"></span></div>
<br>
<div id="container" class="text-center "> 
    </div>
</div>`;


//import elements from task9.js
const {min,max, randomNumbers, highlightDiv, button, showInput, showOccurences, displayMax, displayMin,array, countOccurence, linearSearch, displayResult}= require('../task9');
it('tests displayResult function', () => {
  
//run function
displayResult();
//IF NORMAL/EXTREME DATA output message is not:
expect(showInput.innerHTML).not.toBe("Please enter a number between 1 and 10 included in the array above")

//store innerHtml of showInput in var
let showInputHtml= showInput.innerHTML;
//get character display index of character found using linearSearch
let indexChar= showInputHtml.charAt(115);
//convert to Number so we can test it
const parsedIndexChar= Number(indexChar)
//get user input from shoinputHtml
let getInput= showInputHtml.charAt(98)
//convert char to number
parsedInput= parseInt(getInput);
expect(typeof input.value).toMatchSnapshot()

//input value is displayed to user.
expect(showInput.innerHTML).toContain(input.value)


//if alert is called, number is not included in the array (exceptional data)
expect(alert).toBeCalledTimes(0);


//TEST DISPLAY RESULT FUNCTION:
  //showOccurences.innerHtml.length should be;
expect(showOccurences.innerHTML.length).toBeGreaterThan(1);
 //showInput.innerHtml should contain input value
expect(showInput.innerHTML).toContain(input.value);
//showInp. html should not be an empty string;
expect(showInput.innerHTML).not.toBe("")

expect(showOccurences.innerHTML.length).toMatchSnapshot();
//INPUT SHOULD BE BETWEEN 1 AND 10 (NORMAL DATA = 2 to 9)
expect(Number(input.value)).toBeGreaterThanOrEqual(1);
expect(Number(input.value)).toBeLessThanOrEqual(10);

//EXTREME data : 1 AND 10
//EXCEPTIONAL data : NUMBERS OUTSIDE RANGE, LETTERS, SYMBOLS, NUMBERS NOT INCLUDED IN GENERATED ARRAY.

//parsed IndexChar (char found with linearSearch) should be a numb(for testing) between 0-20 //if NAN EXCEPTIONAL DATA was passed in linearSearch (number out of range)
expect(parsedIndexChar).toBeGreaterThanOrEqual(0);

expect(typeof input.value).toMatchSnapshot()
expect(parsedIndexChar).toBeLessThanOrEqual(10);
//parsedInput should be a numb(for testing) between 1-10
expect(parsedInput).toBeGreaterThanOrEqual(1);
expect(parsedInput).toBeLessThanOrEqual(10);

//highlightDiv display highlighted number of array which correspond to user input and occurence, contains input.value
expect(highlightDiv.innerHTML).toContain(input.value)
expect(highlightDiv.innerHTML.length).toBeGreaterThanOrEqual(182)

//button is hidden (function was executed)
  expect(button.getAttribute('class')).toBe('btn btn-primary btn-lg hide')

expect(button.getAttribute('class')).toMatchSnapshot();
})
})
