// // //TITLE UNIT TEST
const orSentence= 'Right You Are! It Is So! If You Think So!'

document.body.innerHTML= `<div class="jumbotron">
    <h1 class="display-1">Task 4</h1> <br>
<h3 class="display-4">Implement and test a program to input a sentence, apply a code to each character (except spaces) and output the coded message to the screen.</h3>
<br><p class="lead"> 
For example, A becomes Y, B becomes Z, etc and thus Hello World would be coded as Fcjjm Umpjb.
    </p>
</div>
<div class="container">
    <h1 class="display-2">Original Sentence</h1>
    <br>
    <h1 class="display-4" id="originalSentence"></h1>
    <br>
    <h1 style="color: red;" class="display-2">Changed Sentence</h1>
    <br>
          <h1 class="display-4 " id="changedSentence"></h1>
   
    </div>`;
//imported shuffleWord var
 const { shuffleWord } = require('../task4');
 //shuffled word stored in result const var
 const result = shuffleWord(orSentence);

describe('Test ShuffleWord Function and orSentence', () => {
  
it("tests if orSentence and result are string", () => {
  
 expect(typeof orSentence).toBe('string')
 expect(orSentence).toMatchSnapshot();
 expect(result).toMatchSnapshot();
 expect(typeof result).toBe('string');  
   });  


it("shuffleWord is of the same length of orSentence", () => {
  
 expect(orSentence.length).toEqual(result.length)

 expect(result.length).toBe(41);  
 expect(result.length).toMatchSnapshot();
   });

it("result includes characters of orSentence", () => {
expect(result.includes("!")).toBeTruthy()

expect(!result.includes('<')).toBeTruthy()
expect(result.includes("o")).toBeTruthy()
expect(result.includes("S")).toBeTruthy()
expect(result.includes("R")).toBeTruthy()
expect(result.includes("i")).toBeTruthy()
expect(result.includes("g")).toBeTruthy()
expect(result.includes("h")).toBeTruthy()

});

  
});




