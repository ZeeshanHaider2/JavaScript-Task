
let currentText = document.querySelector('.current');
let perviousText = document.querySelector('.previous');
const numbersButtons = Array.from(document.querySelectorAll('.num'));
const operationsButton = Array.from(document.querySelectorAll('.operation'));
//https://stackoverflow.com/questions/68304430/convert-htmlcollection-to-an-array-with-javascript
//https://dev.to/hasnaindev/easiest-way-to-convert-htmlcollection-into-an-array-bkl
const deleteButton = document.querySelector('.delete');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equals');

let currentOperand = '';
let previousOperand = '';
let operation = null;

numbersButtons.map(button =>{
    button.addEventListener('click', e => {
     
        currentOperand === 0 ? currentOperand === "": '';
        if(e.target.innerText === '.' && currentOperand.includes('.'))return
        currentOperand+=e.target.innerText;
        console.log(currentOperand);
        updateDisplay();
       
    })
})

operationsButton.map(button =>{
    button.addEventListener('click', e => {
        
       if (currentOperand === "")return
       operation = e.target.innerText;
       console.log(operation);
       operate();
       updateDisplay();
        
    })
})


let updateDisplay=()=>{
    currentText.innerText = currentOperand;
    perviousText.innerText = previousOperand;
}

let operate=()=>{
  if(currentOperand === "")return
  if(previousOperand !== ""){
      calculateResults();
  }
  previousOperand = `${currentOperand}${operation}`
  currentOperand = "";
}

clearButton.addEventListener('click', e =>{
    currentOperand = 0;
    previousOperand= "";
    operation = null;

    updateDisplay();
})

deleteButton.addEventListener('click', e => {
    currentOperand = 0;
    updateDisplay;
})

function  calculateResults() {
    const curr = parseFloat(currentOperand)
    const prev = parseFloat(previousOperand)
    let results;

   // if( isNaN(prev)  ||  isNaN(curr) ) return 
    operation === '+' ? results = prev  + curr
    : operation === '-' ? results =  prev - curr
    : operation === '*' ? results = prev * curr
    : operation === '÷' && curr === 0 ? results = "You Can't divide by 0"
    : operation === '÷' ? results = prev / curr 
    : '';
    //Math.round((results + Number.EPSILON) * 100) / 100;
    currentOperand = results
    operation = null;
    previousOperand = ''
}

equalButton.addEventListener('click', () => {
    calculateResults()
    updateDisplay()
})