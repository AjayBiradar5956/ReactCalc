import { useState } from 'react';
import styles from '../home.module.css';
function Calculator() {

    let [num, setNum] = useState('');
    let [num1, setNum1] = useState('');
    let [num2, setNum2] = useState('');
    let [operator, setOperator] = useState('');
    let [isOperatorClicked, setIsOperatorClicked] = useState(false);


    function calculate(num1, operator, num2) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        switch (operator) {
            case '+':
                return (num1 + num2).toString();
            case '-':
                return (num1 - num2).toString();
            case '*':
                return (num1 * num2).toString();
            case '/':
                return (num1 / num2).toString();
            default:
                return '';
        }
    }

    //isOperatorClicked true, all the operators should be disabled except the equal to operator
    function handleBtnClick(e) {
        const clickedNum = e.target.innerText;

        if (clickedNum === 'C') {
            setNum1('');
            setNum2('');
            setOperator('');
            setNum('');
            setIsOperatorClicked(false);
        }
        else if (clickedNum === '+/-') {
            if (num1.length === 0) {
                setNum('');
            } else if (!isOperatorClicked) {
                setNum1(num1 *= -1);
                setNum(num1);
            } else {
                setNum2(num2 *= -1);
                setNum(num2);
            }
        }
        else if (clickedNum === '%') {
            setIsOperatorClicked(true);
            setOperator('%');
        }
        else if (clickedNum === '/') {
            setIsOperatorClicked(true);
            setOperator('/');
        }
        else if (clickedNum === 'X') {
            setIsOperatorClicked(true);
            setOperator('*');
        }
        else if (clickedNum === '-') {
            setIsOperatorClicked(true);
            setOperator('-');
        }
        else if (clickedNum === '+') {
            setIsOperatorClicked(true);
            setOperator('+');
        }
        else if (clickedNum === '=') {
            setIsOperatorClicked(true);
            // 8 - (-5) = 13
            if (operator === '-' && num2 < 0) {
                setNum2(num2 *= -1);
                setOperator('+');
                return;
            }
            const result = calculate(num1, operator, num2);
            setNum(result);
            setNum1('');
            setNum2('');
            setOperator('');
            setIsOperatorClicked(false);
        }
        else if (clickedNum === '.') {
            if (!isOperatorClicked) {
                setNum1(num1 += '.');
                setNum(num1);
            } else {
                setNum2(num2 += '.');
                setNum(num2);
            }
        }
        else {
            if (!isOperatorClicked) {
                setNum1(num1 += clickedNum);
                setNum(num1);
            } else {
                setNum2(num2 += clickedNum);
                setNum(num2);
            }
        }
        console.log(`num1: ${num1} and num2: ${num2} Operator:${operator}`);
        return;
    }

    return (
        <div className={styles.container}>
            <div className={styles.display}>{num}</div>
            <div class={styles.gridContainer} onClick={handleBtnClick}>
                <button>C</button>
                <button>+/-</button>
                <button disabled={isOperatorClicked}>%</button>
                <button disabled={isOperatorClicked} style={{ backgroundColor: 'orange' }}>/</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button disabled={isOperatorClicked} style={{ backgroundColor: 'orange' }}>X</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button disabled={isOperatorClicked} style={{ backgroundColor: 'orange' }}>-</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button disabled={isOperatorClicked} style={{ backgroundColor: 'orange' }}>+</button>
                <button className={styles.zero}>0</button>
                <button>.</button>
                <button style={{ backgroundColor: 'orange' }}>=</button>
            </div>
        </div>
    )
}

export default Calculator