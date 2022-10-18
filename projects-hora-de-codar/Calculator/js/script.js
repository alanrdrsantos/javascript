const previuosOperationText = document.querySelector("#previous-operation")
const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button")

class Calculator {
    constructor(previuosOperationText, currentOperationText) {
        this.previuosOperationText = previuosOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = ""
    }

    addDigit(digit) {
        if(digit === "." && this.currentOperationText.innerText.includes(".")) {
            return
        }

        this.currentOperation = digit
        this.updateScreen()
    }

    processOperation(operation) {
        if(currentOperationText.innerText === "" && operation !== "C"){
            if(previuosOperationText.innerText !== "") { 
                this.changeOperation(operation)   
            }
            return
        }


        let operationValue
        const previous = +this.previuosOperationText.innerText.split(" ")[0]
        const current = +this.currentOperationText.innerText

        switch(operation) {
            case "+":
                operationValue = previous + current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case "-":
                operationValue = previous - current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case "*":
                operationValue = previous * current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case "/":
                operationValue = previous / current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case "DEL":
                this.processDelOperator()
                break  
            case "CE":
                this.processCeOperator()
                break 
            case "C":
                this.processCOperator()
                break 
            case "=":
                this.processEqualOperation() 
                break                                 
            default:
                return  
        }
    }

    updateScreen(operationValue = null, operation = null, current = null, previous = null){
        
        if(operationValue === null) {
            this.currentOperationText.innerText += this.currentOperation  
        } else {
            if(previous === 0) {
                operationValue = current
            }
            this.previuosOperationText.innerText = `${operationValue} ${operation}`
            this.currentOperationText.innerText = ""
        }
    }

    changeOperation(operation) {
        const mathOperations = ["*", "/", "+", "-"]

        if(!mathOperations.includes(operation)) {
            return
        }
        this.previuosOperationText.innerText = this.previuosOperationText.innerText.slice(0, -1) + operation
    }

    processDelOperator() {
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1)
    }

    processCeOperator() {
        this.currentOperationText.innerText = ""
    }

    processCOperator() {
        this.currentOperationText.innerText = ""
        this.previuosOperationText.innerText = ""
    }

    processEqualOperation() {
        const operation = previuosOperationText.innerText.split(" ")[1]

        this.processOperation(operation)
        this.currentOperationText.innerText = previuosOperationText.innerText.split(" ")[0]
    }


}

const calc = new Calculator(previuosOperationText, currentOperationText) // Instanciando um novo objeto a Calculator

buttons.forEach((btn)=> { // Usando forEach no buttons para executar uma função para todos os buttons 
    btn.addEventListener("click", (e)=> { // Adicionando o evento de click com uma função para os buttons
        const value = e.target.innerText // Definindo a const value para para obter o valor do buttons quando clicado, usando o target para fazer a referencia do obj que enviou o evento e o innerText, assim obtendo o valor de texto do button

        if(+value >= 0 || value === ".") { // Se o value for maior ou igual a 0 (value >= 0), (usando o + na frente do value para converter em número) ou (||) o valor for igual ao ponto( value === ".")
            calc.addDigit(value)

        } else {
            calc.processOperation(value)
        }
    })
})

window.addEventListener("keydown", (e) => {
    const value = e.key

    if(+value >= 0 || value === ".") {
        calc.addDigit(value)
    } else {
        calc.processOperation(value)
    }

    if(value == "Enter") {
        calc.processOperation("=")
        calc.processEqualOperator()
    }
})