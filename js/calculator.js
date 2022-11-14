let runningTotal = 0;
let buffer = '0';
let previousOperator = null;

const screen = document.querySelector('.screen');


function buttonClick(value) {
    //either value will be symbol or it will be number
    if (isNaN(value)) {
        // not a number
        handleSymbol(value);
    }
    else {
        handleNumber(value);
    }
    screen.innerText = buffer;
}


function handleSymbol(symbol) {
    // now we have 7 symbols
    switch (symbol) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;

        case '=':
            if (previousOperator === null) {
                //we don't have to do anything
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = symbol;
            buffer = runningTotal;
            runningTotal = 0
            break;

        case '←' : 
            if(buffer.length ===1){
                buffer = '0';
            }else{
                buffer = buffer.substring(0,buffer.length-1);
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }
}

function handleNumber(numberString) {
    if (buffer === '0') {
        buffer = numberString
    }
    else {
        buffer += numberString
    }
}


function handleMath(symbol) {
    if (buffer === '0') {
        return;
        //do nothing
    }
    //change string value to int
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    previousOperator = symbol;
    buffer = '0';

}

function flushOperation(intBuffer) {
    if (previousOperator === '+') {
        runningTotal += intBuffer;
    } else if (previousOperator === '−') {
        runningTotal -= intBuffer;
    } else if (previousOperator === '×') {
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }

    // console.log(runningTotal)
}


function init() {
    document.querySelector('.calc-buttons').addEventListener('click', function (event) {
        buttonClick(event.target.innerText);

    })
}

init();