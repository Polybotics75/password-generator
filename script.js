function characterCountHandle(e){
  var slider = e.target.closest('input#lengthHandle');
  
  //GET THE DISPLAY
  var passwordLength = document.querySelector('.passwordLength');
  passwordLength.innerText = slider.value;
}


function showNewPassword(){
  var passwordDisplay = document.querySelector('.passwordDisplay');
  
  var generatedPassword = generatePassword();
  
  passwordDisplay.innerText = generatedPassword;
  
  //GRADE THE GENERATED PASSWORD
  var passwordStrength = document.querySelector('.passwordStrength');
  
  var strength = getPasswordStrength(generatedPassword);
  
  passwordStrength.innerText = strength;
  
}

//add an eventlistener
const generateBtn = document.querySelector('.generateBtn');
generateBtn.addEventListener('click', () => {
  showNewPassword();
})



//Function to check strength
function getPasswordStrength(y){
  let gradeScore = 10;
  
  
  if (y.length < 10) {
    gradeScore = gradeScore - 3;
  }
  if (y.search(/[a-z]/) < 0) {
    gradeScore = gradeScore - 2;
  }
  if(y.search(/[A-Z]/) < 0) {
    gradeScore = gradeScore - 2;
  }
  if (y.search(/[0-9]/) < 0) {
    gradeScore = gradeScore - 3;
  } else {
    // Pass is OK
  }
  
  
  //GRADE STRENGTH
  var final = "";
  if(gradeScore > 7 || gradeScore == 10){
    final = "strong";
  }else if(gradeScore > 4 && gradeScore < 8){
    final = "medium";
  }else{
    final = "weak"
  }
  
  
  return final;
}



// Function to generate random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generatePassword(){
  var newPassword = "";
  
  //GET CHARACTER LENGTH CHOICE
  var charLen = document.querySelector('input#lengthHandle').value;
  
  
  
  //DEFAULT SMALL TEXT
  let textSmall = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let textBig = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let numberArr = ['0','1','2','3','4','5','6','7','8','9'];
  
  
  //RUN SIMPLE LOGICE
  for(let x=0; x < charLen; x++){
    var character;
    
    let randNum;
    
    //character = textSmall[randNum - 1];
  
    
    
    
    //GET THE CHECK BOX CHOICES AND EVALUATE
    var addUpperCase = document.querySelector('#addUpperCase');
    var addLowerCase = document.querySelector('#addLowerCase');
    var addNumber = document.querySelector('#addNumber');
    
    
    //CHECK EVALUATION
    if(addUpperCase.checked && addLowerCase.checked && addNumber.checked){
      //ALL VALUE CHECKED
      let choiceRand = randomNumber(1, 4);
      if(choiceRand == 1){
        randNum = randomNumber(1, textBig.length);
        character = textBig[randNum - 1];
      }else if(choiceRand == 2){
        randNum = randomNumber(1, textSmall.length);
        character = textSmall[randNum - 1];
      }else{
        randNum = randomNumber(1, numberArr.length);
       character = numberArr[randNum - 1];
      }
      
    }else if(addUpperCase.checked && addLowerCase.checked && !addNumber.checked){
      //ONLY UPPERCASE AND LOWERCASE
      let choiceRand = randomNumber(1, 3);
      if(choiceRand == 1){
        randNum = randomNumber(1, textBig.length);
        character = textBig[randNum - 1];
      }else{
        randNum = randomNumber(1, textSmall.length);
        character = textSmall[randNum - 1];
     }
      
    }else if(addUpperCase.checked && !addLowerCase.checked && addNumber.checked){
      //ONLU UPPERCASE AND NUMBERS
      let choiceRand = randomNumber(1, 3);
      if(choiceRand == 1){
        randNum = randomNumber(1, textBig.length);
        character = textBig[randNum - 1];
      }else{
        randNum = randomNumber(1, numberArr.length);
       character = numberArr[randNum - 1];
      }
      
    }else if(!addUpperCase.checked && addLowerCase.checked && addNumber.checked){
      //ONLY LOWERCASE AND NUMBERS
      let choiceRand = randomNumber(1, 3);
      if(choiceRand == 1){
        randNum = randomNumber(1, textSmall.length);
        character = textSmall[randNum - 1];
      }else{
        randNum = randomNumber(1, numberArr.length);
       character = numberArr[randNum - 1];
      }
      
    }else if(!addUpperCase.checked && !addLowerCase.checked && addNumber.checked){
      //ONLY NUMBER CHECKED
      randNum = randomNumber(1, numberArr.length);
      character = numberArr[randNum - 1];
      
    }else if(!addUpperCase.checked && addLowerCase.checked && !addNumber.checked){
      //ONLY LOWERCASE CHECKED
      randNum = randomNumber(1, textSmall.length);
      character = textSmall[randNum - 1];
      
    }else if(addUpperCase.checked && !addLowerCase.checked && !addNumber.checked){
      //ONLY UPPERCASE CHECKED
      randNum = randomNumber(1, textBig.length);
      character = textBig[randNum - 1];
      
    }else{
      character = "INSECURE";
    }
    
    
    
    if(character == "INSECURE" || character == "insecure"){
      newPassword = 'INSECURE';
    }else{
      newPassword += `${character}`;
    }
    
  }
  
  
  
  
  return newPassword;
}