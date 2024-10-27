/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";
/*------------------------ Cached Element References ------------------------*/
const numbersButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const erase = document.querySelector(".clear");
const equals = document.querySelector(".equals");
const display = document.querySelector(".display");
/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

const emptyDisplay = (event) => {
  display.innerText = "";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  result = "";
};



const selectedNumber = (event) => {
  if (result) {
    emptyDisplay(); 
  }
if( operator){
  if(display.innerText === firstNumber){
    display.innerText = ''
  }
  display.innerText += event.target.innerText;
  secondNumber = display.innerText
}else{
  display.innerText += event.target.innerText
  firstNumber = display.innerText
}
}

 

const selectedOperator = (event) => {
  if(firstNumber){
  const operatorClick = event.target.innerText;
  operator = operatorClick;
  }
};

const equalsSelected = (event) => {
  if (firstNumber && operator && secondNumber) {
    result = eval(`${firstNumber} ${operator} ${secondNumber}`);
    display.innerText = result;
    firstNumber = result; 
    secondNumber = ''; 
    operator = ''; 
  }
};


numbersButton.forEach((button) => {
  button.addEventListener("click", selectedNumber);
});

operatorButton.forEach((button) => {
  button.addEventListener("click", selectedOperator);
});

equals.addEventListener("click", equalsSelected);

erase.addEventListener("click", emptyDisplay);
