//get html h1 tags
const dispOrSentence = document.getElementById("originalSentence");
const changedSentence = document.getElementById("changedSentence");

// original sentence
const orSentence = "Right You Are! It Is So! If You Think So!";
// display original sentence
dispOrSentence.innerHTML = orSentence;

//init new const storing string without spaces
const noSpacesString = orSentence.replace(/\s/g, "");

//generate random letters passing param of length which will be the length of our noSpacesString
function randomLetter(length) {
  let array = [];
  const letters = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < length; i++) {
    //returns the character at the specified index in string.
    array += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return array;
}
//output changed sentence
const length = noSpacesString.length;
let changedString = randomLetter(length);

changedSentence.innerHTML = changedString;

let addedSpace = changedString.split("").join(" ");
//add spaces to changed string button
const button = document.getElementById("addSpaces");
button.addEventListener("click", function () {
  changedSentence.innerHTML = addedSpace;
});

//remove spaces to changed string button
const removeS = document.getElementById("removeS");
removeS.addEventListener("click", function () {
  changedSentence.innerHTML = changedString;
});
