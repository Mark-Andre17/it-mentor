// переменные
const calc = document.querySelector('.calc-box');

const result = document.querySelector('.calc-input');

// функция калькулятора(чтобы не использовать eval)
function calcOperation(str){ 
    let operations = ['+', '-', '*', '/'];

    let result;

    for (let operator of operations) {

        if (str.includes(operator)) {

            let [firstNum, secondNum] = str.split(operator);

            let num1 = parseFloat(firstNum);

            let num2 = parseFloat(secondNum);
            
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                default:
                    result = null;
            }
            break;
        }
    }

    return result;
}

// обаботчик событий
calc.addEventListener('click',(e) => {
    
    if(e.target.classList.contains('calc-input')) {
        return;
    }

    const value = e.target.innerHTML;

    switch(value) {
        case 'C':
            result.value = '0';
            break;
        case '=':
            result.value = calcOperation(result.value).toFixed(2);
            break;
        default:
            if(result.value === '0') {
                result.value = value;
            }else{
                result.value += value;
            }
    }
})
