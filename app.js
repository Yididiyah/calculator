
// add
// subtract
// multiply
// divide

const add = (a,b) => {
    return a + b;
}

const subtract = (a,b) => {
    return a - b;
}

const multiply = (a,b) => {
    return a * b;
}

const divide = (a,b) => {
    return (a / b).toFixed(2);
}

const mod = (a,b) => {
    return a % b;
}

// console.log(add(5,3));
// console.log(subtract(5,3));
// console.log(multiply(5,3));
// console.log(divide(5,3));

const operate = (operator, a,b) => {
    let result;
    switch (operator) {
        case '+':
            result = add(a,b);
            break;
        case '-':
            result = subtract(a,b);
            break;
        case '*':
            result = multiply(a,b);
            break;
        case '/':
            result = divide(a,b);
            break;
        case '%':
            result = mod(a,b);
            break;
    }
    return result;
}

// console.log(operate('+', 5, 3));
// console.log(operate('-', 5, 3));
// console.log(operate('*', 5, 3));
// console.log(operate('/', 5, 3));

// const updateDisplay = (display, btnValue) => {
//     if(display.value === ''){
//         display.value = btnValue
//     } else {
//         display.value += btnValue;
//     }
// }

const format = (result) => {
    return result.toString().length > 12 ? result.toPrecision(12) : result;
}

// let operand1, operand2, operator, result;
let operand1 = operand2 = operator  = result = '';
let dotOperand1 = dotOperand2 = operationComplete = false;
const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('#display');
const equalBtn = document.querySelector('.equals');
const allResetBtn = document.querySelector('.all-reset');
const dotBtn = document.querySelector('.dot');
const invertSignBtn = document.querySelector('.invert-sign-operator');
// const operators = ''

const operandClicked = (operandBtnValue) => {
    // If there is operator the number entered should be second operand
    if(operator){
        // Prevent Divide by Zero
        if(operator == '/' && operand2 === 0){
            display.value = 'HAHA: Nope!'
        }else {
        operand2 += operandBtnValue;
        display.value = operand2;
        }
    } else if(operationComplete) {
        operand1 = '';
        operand1 += operandBtnValue;
        display.value = operand1;
    } else {
        operand1 += operandBtnValue;
        display.value = operand1;
    }
    operationComplete = false;
}

const operatorClicked = (operatorBtnValue) => {
    if(operator && operator != '/' && operand2 != 0){
        result = operate(operator, Number(operand1), Number(operand2));
        result = format(result);
        operand1 = result;
        display.value = result;
    
    }
    operand2 = '';
    operator = operatorBtnValue;
    dotOperand2 = false;
    operationComplete = false;
}

const equalClicked = () => {
    if(operator === '/' && operand2 === 0){
        return;
    } else {
        result = operate(operator, Number(operand1), Number(operand2));
        result = format(result);
        display.value = result;
        dotOperand1 = dotOperand2 = false;
        operator = '';
        operand1 = result;
        operationComplete = true;
    }
}

const dotClicked = () => {
// To put 0 before dot in decimal if the dot is the first character
        // And to allow only one dot per operand
        if(display.value == '' || operationComplete){
            operand1 = '0.';
            operator = '';
            display.value = '0.';
            dotOperand1 = true;
            operationComplete = false;
        }else if(operator && !dotOperand2 && !operationComplete && !operand2){
            operand2 = '0.';
            display.value = operand2;
        }else if(operator && !dotOperand2 && !operationComplete){
            operand2 += '.';
            display.value = operand2;
            dotOperand2 = true;
        }else if(!dotOperand1 && !operationComplete) {
            operand1 += '.';
            display.value = operand1;
            dotOperand1 = true;
        }
}

const allResetClicked = () => {
    operand1 = operand2 = operator = operator2 = result = '';
    display.value = '';
    dotOperand1 = dotOperand2 = false;
}

const themeBtnClicked = (btnValue) => {
    let root = document.documentElement;
        switch (btnValue) {
            case 'dark':
                root.style.setProperty('--bg-color', 'rgb(16, 16, 16)');
                root.style.setProperty('--bg-center-color', 'rgb(16, 16, 16)');

                root.style.setProperty('--calc-bg-color', 'rgb(51, 58, 64)');
                root.style.setProperty('--calc-text-color', 'rgb(197, 197, 197)');
                
                root.style.setProperty('--display-bg-color', 'rgb(83, 94, 103)');
                root.style.setProperty('--display-color', 'rgb(243, 243, 243)');
                
                root.style.setProperty('--shadow-1-color', 'rgba(0,0,0,0.30)');
                root.style.setProperty('--shadow-2-color', 'rgba(0,0,0,0.22)');
                
                root.style.setProperty('--heading-color', 'rgba(212,212,212,1)');
                break;
            case 'silver':
                root.style.setProperty('--bg-color', 'rgb(202,202,202)');
                root.style.setProperty('--bg-center-color', 'rgb(222, 222, 222)');

                root.style.setProperty('--calc-bg-color', 'rgb(44, 62, 78)');
                root.style.setProperty('--calc-text-color', 'rgb(222, 222, 222)');
                
                root.style.setProperty('--display-bg-color', 'rgb(225, 230, 234)');
                root.style.setProperty('--display-color', 'rgb(82, 82, 82)');
                
                root.style.setProperty('--shadow-1-color', 'rgba(0,0,0,0.30)');
                root.style.setProperty('--shadow-2-color', 'rgba(0,0,0,0.22)');
                
                root.style.setProperty('--heading-color', 'rgb(109, 109, 109)');
                
                break;
            case 'pink':
                root.style.setProperty('--bg-color', 'rgb(226, 167, 167)');
                root.style.setProperty('--bg-center-color', 'rgb(208, 182, 182)');

                root.style.setProperty('--calc-bg-color', 'rgb(255, 255, 255)');
                root.style.setProperty('--calc-text-color', 'rgb(68, 68, 68)');
                
                root.style.setProperty('--display-bg-color', 'rgb(0, 0, 0)');
                root.style.setProperty('--display-color', 'rgb(211, 190, 194)');
                
                root.style.setProperty('--shadow-1-color', 'rgba(0,0,0,0.30)');
                root.style.setProperty('--shadow-2-color', 'rgba(0,0,0,0.22)');
                
                root.style.setProperty('--heading-color', 'rgb(0, 0, 0)');
                
             break;
            default:
                    root.style.setProperty('--bg-color', 'rgb(175, 253, 244)');
                    root.style.setProperty('--bg-center-color', 'rgb(223, 255, 251)');

                    root.style.setProperty('--calc-bg-color', 'rgb(175, 253, 244)');
                    root.style.setProperty('--calc-text-color', 'rgb(0,0,0)');

                root.style.setProperty('--display-bg-color', 'rgb(0,0,0)');
                root.style.setProperty('--display-color', 'rgb(129, 248, 236)');

                root.style.setProperty('--shadow-1-color', 'rgba(0,0,0,0.30)');
                root.style.setProperty('--shadow-2-color', 'rgba(0,0,0,0.22)');

                root.style.setProperty('--heading-color', 'rgba(0,0,0,1)');
        }
}

const onBackspacePress = () => {
    if(operator){
        console.log('Before Removal',[...operand2]);
        operand2 = [...operand2]
        operand2.pop();
        operand2 = operand2.join('');
        display.value = operand2;
        console.log('After Removal',[...operand2]);
    }else {
        console.log('Before Removal',[...operand1]);
        operand1 = [...operand1]
        operand1.pop();
        operand1 = operand1.join('');
        // operand1 = 
        // [...operand1]
        // .slice(operand1.length - 1,operand1.length + 1)
        // .join('');
        display.value = operand1;
        console.log('After Removal',[...operand1]);
    }
    console.log('Backspace');
}

const keyPressHandler = (e) => {
    if(e.keyCode === 8){
        onBackspacePress();
    } else if(e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 48 && e.keyCode <= 57){
        operandClicked(e.key);
    } else if(e.keyCode == 110){
        dotClicked();
        console.log('Dot Pressed');
    } else if(e.keyCode == 106 || e.keyCode == 107 || e.keyCode == 109 || e.keyCode == 111){
        operatorClicked(e.key)
    } else if(e.keyCode = 13){
        equalClicked();
    }
}

const init = () => {

    operands.forEach((operandBtn) => {
        operandBtn.addEventListener('click', () => {
            operandClicked(operandBtn.value);
        });
    });
    
    operators.forEach((operatorBtn) => {
        operatorBtn.addEventListener('click', () => {
            operatorClicked(operatorBtn.value);
        });
    });
    
    equalBtn.addEventListener('click', () => {
        // Prevent crashing when divided by zero
        equalClicked();
    });
    
    allResetBtn.addEventListener('click', () => {
        allResetClicked();
    });

    dotBtn.addEventListener('click', () => {
        dotClicked();
    });

    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            // console.log(btn.value);
            themeBtnClicked(btn.value);
        })
    });

    document.addEventListener('keydown', keyPressHandler);
}

init();
