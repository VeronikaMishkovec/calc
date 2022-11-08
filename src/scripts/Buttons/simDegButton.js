import {calculator} from "../Calculator";

const simDegButton = document.querySelectorAll('[data-deg]')

simDegButton.forEach(button => {button.addEventListener('click', () => {
    calculator.computeDeg(button.dataset.myatt)
    calculator.updateDisplay()
})

})
