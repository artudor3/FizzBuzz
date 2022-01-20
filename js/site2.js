function getValues() {
    let fizzNum = document.getElementById("fizzNumber").value;
    let buzzNum = document.getElementById("buzzNumber").value;
    let startNum = document.getElementById("startNumber").value;
    let endNum = document.getElementById("endNumber").value;

    fizzNum = parseInt(fizzNum);
    buzzNum = parseInt(buzzNum);
    startNum = parseInt(startNum);
    endNum = parseInt(endNum);

    if (Number.isInteger(fizzNum) && Number.isInteger(buzzNum) && Number.isInteger(startNum) && Number.isInteger(endNum)) {

        let numbers = generateData(startNum, endNum, fizzNum, buzzNum);

        displayData(numbers);

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Only Integers are allowed for FizzBuzz, please enter correctly in all values'
        });
    }
}

function generateData(start, end, fizz, buzz) {
    let numbers = [];
    let isFizz = false;
    let isBuzz = false;

    for (let i = start; i <= end; i++) {
        isFizz = i % fizz == 0;
        isBuzz = i % buzz == 0;

        if (isFizz && isBuzz) {
            numbers.push('FizzBuzz');
        } else if (isFizz) {
            numbers.push('Fizz');
        } else if (isBuzz) {
            numbers.push('Buzz');
        } else {
            numbers.push(i);
        }
    }

    return numbers;
}

function displayData(numArr) {
    let contentDiv = document.getElementById("results");
    let content = "";

    //clear previous data
    contentDiv.innerHTML = "";

    for (let i = 0; i < numArr.length; i++) {
        let dataValue = numArr[i];
        let dataElement = `<div class="col ${dataValue}">${dataValue}</div>`;
        content += dataElement;
    }

    //writes the results to the page
    contentDiv.innerHTML = content;
}