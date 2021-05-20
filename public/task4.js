"use strict";
window.onload = function (){



     //get html h1 tags
  let dispOrSentence = document.getElementById("originalSentence");
  const changedSentence = document.getElementById("changedSentence");

  // original sentence
  const orSentence = "Right You Are! It Is So! If You Think So!";
    dispOrSentence.innerHTML = orSentence;

  // display original sentence
    if( dispOrSentence != null){
     dispOrSentence= dispOrSentence.innerHTML;

}


//PASSING PARAMETER word to function shuffleWord that will shuffle letters of word passed as argument when function is called.
const shuffleWord = function (word) {
//store word.split in variable
    let splitSentence = word.split("")
    //store length of split word in var
       let length = splitSentence.length;
//loop - from last char to first char of string
    for(let i = length - 1; i > 0; i--) {
      //created random number and stored in variable
        const j = Math.floor(Math.random() * (i + 1));
        //stored looped random char at index of [i] in 'temporary' variable
        const tmp =splitSentence[i];
        //swapped char at index [i] with char at index [j]
       splitSentence[i] =splitSentence[j];
       //temp random char at index [j] is swapped with char at index[i] stored in tmp var
       splitSentence[j] = tmp;
    }
    //return concatenated sentence using .join method separated by space
    const joinedSentence= splitSentence.join("");
    return joinedSentence;
}

 

  //display shuffled characters, changed sentence
  changedSentence.innerHTML = shuffleWord(orSentence);
}


//EXPORTS FOR TESTING
module.exports.shuffleWord = function (word) {
//store word.split in variable
    const splitSentence = word.split("")
    //store length of split word in var
       const length = splitSentence.length;
//loop - from last char to first char of string
    for(let i = length - 1; i > 0; i--) {
      //created random number and stored in variable
        const j = Math.floor(Math.random() * (i + 1));
        //stored looped random char at index of [i] in 'temporary' variable
        const tmp =splitSentence[i];
        //swapped char at index [i] with char at index [j]
       splitSentence[i] =splitSentence[j];
       //temp random char at index [j] is swapped with char at index[i] stored in tmp var
       splitSentence[j] = tmp;
    }
    //return concatenated sentence using .join method separated by space
    return splitSentence.join("");
}

