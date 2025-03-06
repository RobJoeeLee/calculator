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
    if (b === "0"){
        return "Error: Can't divide by 0!"
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