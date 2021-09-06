function runCalculator(config) {
    const numberButtons = document.querySelectorAll(config.btnNumberClass)
    const operationButtons = document.querySelectorAll(config.operationButtonsClass)
    const equalsButton = document.querySelector(config.equalsButtonClass)
    const deleteButton = document.querySelector(config.deleteButtonClass)
    const allClearButton = document.querySelector(config.allClearButtonClass)
    const previousOperandTextElement = document.querySelector(config.prevandTextElementClass)
    const currentOperandTextElement = document.querySelector(config.currandTextElementClass)

    class Calculator {
        constructor(previousOperandTextElement, currentOperandTextElement) {
            this.previousOperandTextElement = previousOperandTextElement
            this.currentOperandTextElement = currentOperandTextElement
            this.clear()
        }
        clear() {
            this.currentOperand = ''
            this.previousOperand = ''
            this.operation = undefined
        }
        delete() {
            this.currentOperand = this.currentOperand.toString().slice(0, -1)
        }
        appendNumber(number) {
            if (number === '.' && this.currentOperand.includes('.')) return
            this.currentOperand = this.currentOperand.toString() + number.toString()
        }
        chooseOperation(operation) {
            if (this.currentOperand === '') return
            if (this.previousOperand !== '') {
                this.compute()
            }
            this.operation = operation
            this.previousOperand = this.currentOperand
            this.currentOperand = ''
        }
        compute() {
            let result
            const prev = parseFloat(this.previousOperand)
            const current = parseFloat(this.currentOperand)
            if (isNaN(prev) || isNaN(current)) return
            switch (this.operation) {
                case '+':
                    result = prev + current
                    break
                case '-':
                    result = prev - current
                    break
                case '*':
                    result = prev * current
                    break
                case '÷':
                    result = prev / current
                    break

                default:
                    return
            }
            this.currentOperand = result
            this.operation = undefined
            this.previousOperand = ''
        }

        updateResult() {
            this.currentOperandTextElement.innerText = this.currentOperand
            if (this.operation != null) {
                this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`
            }
            else {
                this.previousOperandTextElement.innerText = ''
            }
        }
    }

    const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.appendNumber(button.innerText)
            calculator.updateResult()
        })
    })

    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.chooseOperation(button.innerText)
            calculator.updateResult()
        })
    })

    equalsButton.addEventListener("click", () => {
        calculator.compute()
        calculator.updateResult()
    })

    allClearButton.addEventListener("click", () => {
        calculator.clear()
        calculator.updateResult()
    })

    deleteButton.addEventListener("click", () => {
        calculator.delete()
        calculator.updateResult()
    })


}