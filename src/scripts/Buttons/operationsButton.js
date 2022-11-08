import {calculator} from "../Calculator";

const operationButtons = document.querySelectorAll('[data-operation]')

operationButtons.forEach(button => {button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
})
})
