// pin generate
function getPin() {
    document.getElementById('input-pin').value = calculatePin()
        ;
}

function calculatePin() {
    const pinGenerate = Math.round(Math.random() * 10000);
    const pin = pinGenerate + '';
    if (pin.length == 4) {
        return pin;
    }
    else {
        return calculatePin();
    }

}

//calculte part using by bubble event
document.getElementById('number-btn').addEventListener('click', function (event) {
    const calcNumber = event.target.innerText;
    const calcInput = document.getElementById('calc-input');
    if (isNaN(calcNumber)) {
        if (calcNumber == 'C') {
            calcInput.value = '';

            document.getElementById('success-notify').style.display = 'none';
            document.getElementById('fail-notify').style.display = 'none';
        }
    }
    else {

        const previousNumber = calcInput.value;
        const newNumber = previousNumber + calcNumber;

        calcInput.value = newNumber;
    }
})

//matched pin
function matchPin() {
    const generatePin = document.getElementById('input-pin').value;
    const calcInput = document.getElementById('calc-input').value;

    const successMessage = document.getElementById('success-notify');
    const failMessage = document.getElementById('fail-notify');
    if (generatePin == calcInput) {
        successMessage.style.display = 'block';
        failMessage.style.display = 'none';
    }
    else {
        failMessage.style.display = 'block';
        successMessage.style.display = 'none';

    }
}