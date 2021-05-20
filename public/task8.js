const button = document.querySelector("#passwordValidator");
//1. Prompt the user to enter their password that can contain letters and numbers and be at least six characters long.

//init number of attempts max 3 attempts to submit pwd for users
let attempts = 3;

//outputMessage is a p displaying message according to what user is typing using fonction below...
const outputMessage = document.getElementById("outputMessage");

  const formatCheck = document.getElementById('formatCheck')

// document.addEventListener("keydown",charactersValidator);


const passwordValidator= function(){
    formatCheck.innerHTML= "";
 //init local input let
  const input = document.getElementById("input").value;
  //init pwd
  const pattern = /^[a-z0-9]+$/i;
  const chosenPwd = "Scotland";
if(!input.match(pattern) || input.length <6){
  formatCheck.innerHTML= `<h1>You have entered an invalid password format or length, please enter only letters and numbers (minimum 6 characters)</h1><br><br>`
}

  //  2. If the password is correct, it should display a welcome message

  if (input.match(pattern) && input === chosenPwd) {
    alert("Correct! Welcome to your profile!");
    outputMessage.innerHTML = " Welcome to your profile!";
    attempts = 3; //reset attempts to 3
    return true; //if form is submitted value will be true
  }
  //  else notify the user that their password was entered wrongly
  else if (!input.match(pattern) || input !== chosenPwd) {
    if (attempts > 1) {
      attempts--; // decrease attempts by 1
      alert(`Wrong Password! You have ${attempts} attempts left`);
      outputMessage.innerHTML = `<h1>${attempts} attempts left.</h1><br> <h1 class="text-danger"> Wrong password!, make sure your password format and length are correct</h1><br><br> Hint:<br> Land of the Brave, Glens, Whiskey`; //display  error message and hint
      if (!outputMessage.classList.contains("text-danger")) return false; //if form is submitted value will be false
    }
    // after three attempts and let  user receives a suitable message
    else {
      // if attempts < 0
      outputMessage.innerHTML = `Too many attempts! Please try again later or contact our support team`;
      button.disabled = true; //disable button
      button.classList.add("hide"); //hide button in case disabled true fails in certain browsers
      return false; //returns false if attempts < 0
    }
  }
}


button.addEventListener("click", passwordValidator
)



module.exports= {passwordValidator,button}