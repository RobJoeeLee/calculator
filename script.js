const numberButton = document.querySelectorAll(".number")
const operatorButton = document.querySelectorAll(".operator")
const equalButton = document.querySelector(".equal")
const clearButton = document.querySelector(".clear")
const display = document.querySelector(".display")

let firstNumber = ""
let secondNumber = ""
let operator = ""
let shouldResetDisplay = false

function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    if (b === 0){
        return "Error"
    }
    return a / b
}

function operate(operator, a, b){
    a = Number(a)
    b = Number(b)

    switch(operator){
        case "+":
            return add(a, b)
        case "-":
            return subtract(a, b)
        case "*":
            return multiply(a, b)
        case "/":
            return divide(a, b)
        default:
            return null
    }
}

function updateDisplay(value){
    if (shouldResetDisplay){
        display.textContent = value
        shouldResetDisplay = false
    } else {
        display.textContent = display.textContent === "0" ? value: display.textContent + value
    }
}

numberButton.forEach(button => {
    button.addEventListener("click" , () => {
        updateDisplay(button.dataset.number)
        if(!operator){
            firstNumber += button.dataset.number
        } else {
            secondNumber += button.dataset.number
        }
    } )
})

operatorButton.forEach(button => {
    button.addEventListener("click" , () => {
        if (operator && secondNumber){
            firstNumber = operate(operator, firstNumber, secondNumber)
            display.textContent = firstNumber
            secondNumber = ""
        }

        operator = button.dataset.operator
        shouldResetDisplay = true
    })
})

equalButton.addEventListener("click" , () => {
    if (operator && secondNumber){
        display.textContent = operate(operator, firstNumber, secondNumber)
        firstNumber = display.textContent
        secondNumber = ""
        operator = ""
        shouldResetDisplay = true
    }
})

clearButton.addEventListener("click" , () => {
    firstNumber = ""
    secondNumber = ""
    operator = ""
    shouldResetDisplay = false
    display.textContent = "0"
})