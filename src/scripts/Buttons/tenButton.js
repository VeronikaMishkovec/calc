import {calculator} from "../Calculator";

const tenButton = document.querySelectorAll('[data-ten]')

tenButton.forEach(button => {button.addEventListener('click', () => {
    console.log(button.dataset.ten)
    calculator.computeWithout(button.dataset.ten)
    calculator.updateDisplay()
})
})
