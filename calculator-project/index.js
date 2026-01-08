// getting the data from the input field:

const inputBox = document.querySelector(".input-box");
inputBox.addEventListener("input", function () {
  let currentValue = inputBox.value;
  console.log(currentValue);
});

// number-buttons:
const numberbuttons = document.querySelectorAll(
  ".zero,.one,.two,.three,.four,.five,.six,.seven,.eight,.nine"
);

const addbtn = document.querySelector(".plus-icons");
const subbtn = document.querySelector(".minus-icon");
const mulbtn = document.querySelector(".mutiply-icon");
const divbtn = document.querySelector(".division-icon");

const equalbtn = document.querySelector(".equal-to");
const clearbtn = document.querySelector(".cancel-btn");

// memory:

// let firstNumber = inputBox.value;

let operator = " ";

console.log("operator : ", operator);
console.log("input : ", inputBox.value);

// let secondNumber = "";

// number button click logic:

numberbuttons.forEach((button) => {
  button.addEventListener("click", () => {
    inputBox.value += button.textContent;
  });
});

// handleOperator :

function handleOperator(op) {
  if (inputBox.value === "") return;

  if (operator !== "") return;

  operator = op;
  inputBox.value += op;
}

// attach the operator buttons :

addbtn.addEventListener("click", () => handleOperator("+"));
subbtn.addEventListener("click", () => handleOperator("-"));
mulbtn.addEventListener("click", () => handleOperator("*"));
divbtn.addEventListener("click", () => handleOperator("/"));

// plus-icon:

// add_btn.addEventListener('click',()=>{
//     if(inputBox.value === '') return;

//     firstNumber = inputBox.value;
//     operator="+";
//     inputBox.value= inputBox.value + operator;
// })

// // minus-icon:

// sub_btn.addEventListener('click',()=>{
//     if(inputBox.value === '') return;

//     firstNumber = inputBox.value;
//     operator = '-';
//     inputBox.value = inputBox.value - operator;
// })

// // multiple-icons:

// mul_btn.addEventListener('click',()=>{
//     if(inputBox.value === '') return;

//     firstNumber = inputBox.value;
//     operator = '';
//     inputBox.value = inputBox.value * operator;
// })

// // divison-icon:
// div_btn.addEventListener('click',()=>{
//     if(inputBox.value === '') return;

//     firstNumber = inputBox.value;
//     operator = '/';
//     inputBox.value = inputBox.value / operator;
// })

//equal to :

equalbtn.addEventListener("click", () => {
  if (operator === "") return;

  const parts = inputBox.value.split(operator);

  if (parts.length !== 2) return;

  const firstNum = Number(parts[0]);
  const secondNum = Number(parts[1]);

  if (isNaN(firstNum) || isNaN(secondNum)) return;

  let result;

  switch (operator) {
    case "+":
      result = firstNum + secondNum;
      break;

    case "-":
      result = firstNum - secondNum;
      break;

    case "*":
      result = firstNum * secondNum;
      break;

    case "/":
      result = secondNum === 0 ? "error" : firstNum / secondNum;
      break;
  }

  inputBox.value = result;
  operator = "";

  /*

    if(operator === '+'){
        result = firstNumber + secondNumber;
    }
    else if(operator === '-'){
        result = firstNumber - secondNumber;
    }

    else if(operator === '*'){
        result = firstNumber * secondNumber;
    }

    else if(operator === '/'){
        result = secondNumber === 0 ? 'error' : firstNumber/secondNumber;
    }

    */
});

// clear :

clearbtn.addEventListener("click", () => {
  inputBox.value = "";
  // firstNumber = '';
  operator = "";
});
