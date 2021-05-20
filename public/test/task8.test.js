const { expectation } = require("sinon");

// configure jsdom,  explicitly imported it in  test file,
const path = require("path");
const { JSDOM } = require("jsdom");
const fs = require("fs");
// built-in fs Node module to read the HTML file and store it in a variable:
const html = fs.readFileSync(
  path.resolve(__dirname, "../views/task8.ejs"),
  "utf8"
);
//init variables:
//input will be our mocked input to be used to test functionalities
let input;
//init mockedKeyEvent variable, we will store mocked keyboard event
let mockedKeyEvent ;
//init let outputMessage, we will store html <p> element that will output message to user guiding him while typing and confirming pwd.
let outputMessage;
let formatCheck;
//create instance of task8.ejs (input value is changed to test passwordValidator function in next text)
  document.body.innerHTML = `
<div class="jumbotron text-center">
    <h3 class="display-3">Input Password and Submit </h3><br>
    <form name="form" action="#">
    <h1>
    <h2><input onfocus="this.value=''" type="password" value=""  id="input"  name='userInput'/></h2> <br>
    <h4>Please enter at least 6 characters which contain only letters and numeric digits</h2>
    <h2></h2>&nbsp;</h2></h2><br><br>
    <p id="outputMessage"></p>
    <p id="formatCheck"></p>
    <button type="button" id="passwordValidator"  class="btn btn-primary btn-lg"> Submit </button>
    </form>
    </div>`;
const {passwordValidator,button }= require('../task8')
//Runs a function before each of the tests in this file runs. If the function returns a promise or is a generator, Jest waits for that promise to resolve before running the test.

//in  beforeEach method, I used jsdom to render my HTML so that I could test against it:







//INTEGRATION TESTING OF COMPONENTS
describe('test that CHARACTERS typed from user and PASSWORD ARE VALIDATED', () => {

  //get input element
input= document.getElementById('input');
//get p element to output msg to user accordingly
outputMessage= document.getElementById('outputMessage')
formatCheck= document.getElementById('formatCheck');

beforeEach(() => {
  //mockedKeyEvent is defined so we  run various tests changing key accordingly
  //TEST DATA: Pco2445tland    Scotl5       Sc!.$
                  //NORMAL     //EXTREME   // EXCEPTIONAL

mockedKeyEvent = new KeyboardEvent('keypress', { key: "Pco2445tland" });
//dispatch mocked key event
input.dispatchEvent(mockedKeyEvent);

});



it('tests that password validator button click functionality works FUNCTION INVOKED 1ST TIME', () => {
//outputMessage should display message:
  
const alert= jest.spyOn(window, 'alert').mockImplementation(() => {});
input.value= mockedKeyEvent.key;
//run function for testing;
//store validated pwd in const var
 const validatedPWD= passwordValidator();


//store validated pwd in const var
expect(outputMessage.innerHTML).toBe('<h1>2 attempts left.</h1><br> <h1 class=\"text-danger\"> Wrong password!, make sure your password format and length are correct</h1><br><br> Hint:<br> Land of the Brave, Glens, Whiskey');

expect(outputMessage.innerHTML).toMatchSnapshot()
//expect alert to have been called: twice as stored in validatedPwd returns 1 call
expect(alert).toHaveBeenCalledTimes(1)

//p html element with id of formatCheck will not display any text to user as format of password should be correct.
expect(formatCheck.innerHTML).toBe("")

expect(formatCheck.innerHTML).toMatchSnapshot();
//validatedPws should return value of true;
  // expect(validatedPwd).toBe(true);


//button is disabled if attempt =0 after user enter wrong pwd more than 3 times;
expect(button.disabled).toBeFalsy();
expect(button.disabled).toMatchSnapshot()
 });

it('tests that password validator button click functionality works FUNCTION INVOKED 2ND TIME', () => {

const alert= jest.spyOn(window, 'alert').mockImplementation(() => {});

//run function for testing;
 const validatedPWD= passwordValidator();

//expect alert to have been called:
expect(alert).toHaveBeenCalledTimes(2)



 //pattern used in function passwordValidator
  const pattern = /^[a-z0-9]+$/i;

  //get input value and store it in variable
  const chosenPWD= input.value;

//chosen password includes any of the characters:
  expect(chosenPWD.match(pattern)).toBeTruthy();
  //password typed from user is of 6 characters or more
expect(chosenPWD.length).toBeGreaterThanOrEqual(6);

  //message displayed to user should be:
expect(outputMessage.innerHTML).toBe("<h1>1 attempts left.</h1><br> <h1 class=\"text-danger\"> Wrong password!, make sure your password format and length are correct</h1><br><br> Hint:<br> Land of the Brave, Glens, Whiskey")
expect(outputMessage.innerHTML).toMatchSnapshot()

//p html element with id of formatCheck will not display any text to user as format of password should be correct.
expect(formatCheck.innerHTML).toBe("")
expect(formatCheck.innerHTML).toMatchSnapshot();

// //validatedPws should return value of true if password correct
  expect(validatedPWD).toBe(false);

  //button is disabled if attempt =0 after user enter wrong pwd more than 3 times;
expect(button.disabled).toBeFalsy();
expect(button.disabled).toMatchSnapshot();
 });

it('tests that password validator button click functionality works FUNCTION INVOKED 3RD TIME', () => {
//p html element with id of formatCheck will not display any text to user as format of password should be correct.
expect(formatCheck.innerHTML).toBe("")

expect(formatCheck.innerHTML).toMatchSnapshot();

//outputMessage should display message:
  
const alert= jest.spyOn(window, 'alert').mockImplementation(() => {});

//store validated pwd in const var
//run function for testing;
 const validatedPWD= passwordValidator();

//expect alert to have been called: twice as stored in validatedPwd returns 1 call
//AT THE 3RD ATTEMPT ALERT IS NOT FIRED
expect(alert).toHaveBeenCalledTimes(2)



 //pattern used in function passwordValidator
  const pattern = /^[a-z0-9]+$/i;

  //get input value and store it in variable
  const chosenPWD= input.value;

//chosen password includes any of the characters:
  expect(chosenPWD.match(pattern)).toBeTruthy();
  //password typed from user is of 6 characters or more
expect(chosenPWD.length).toBeGreaterThanOrEqual(6);
  //message displayed to user should be:
expect(outputMessage.innerHTML).toBe("Too many attempts! Please try again later or contact our support team")
expect(outputMessage.innerHTML).toMatchSnapshot()

// //validatedPws should return value of true if password correct
  expect(validatedPWD).toBe(false);

  expect(button.disabled).toBeTruthy()
  expect(button.disabled).toMatchSnapshot();
 });

 //reset button disable property after tests
afterAll(()=> {
  button.disabled= false;
})






  });




describe('test that CORRECT PASSWORD typed from user and PASSWORD IS VALIDATED', () => {

  //get input element
input= document.getElementById('input');
//get p element to output msg to user accordingly
outputMessage= document.getElementById('outputMessage')


beforeEach(() => {
  //mockedKeyEvent is defined so we  run various tests changing key accordingly
mockedKeyEvent = new KeyboardEvent('keypress', { key: "Scotland" });
//dispatch mocked key event
input.dispatchEvent(mockedKeyEvent);

});



it('tests that password validator button click functionality works', () => {

const alert= jest.spyOn(window, 'alert').mockImplementation(() => {});
input.value= mockedKeyEvent.key;
//run function for testing;
//store validated pwd in const var
 const validatedPWD= passwordValidator();


//store validated pwd in const var
expect(outputMessage.innerHTML).toBe(' Welcome to your profile!');

//expect alert to have been called: twice as stored in validatedPwd returns 1 call
expect(alert).toHaveBeenCalledTimes(3)


  //message displayed to user should be:


//validatedPws should return value of true;
  expect(validatedPWD).toBe(true);


//button is disabled if attempt =0 after user enter wrong pwd more than 3 times;
expect(button.disabled).toBeFalsy();

 

});

});
