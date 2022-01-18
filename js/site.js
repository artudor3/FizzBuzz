function getValues() {
    let fizzNum = document.getElementById("fizzNumber").value;
    let buzzNum = document.getElementById("buzzNumber").value;

    fizzNum = parseInt(fizzNum);
    buzzNum = parseInt(buzzNum);

    let startNumber = 1;
    let endNumber = 100;

    if (Number.isInteger(fizzNum) && Number.isInteger(buzzNum)) {

        let numbers = generateNumbers(startNumber, endNumber);

        displayNumbers(numbers, fizzNum, buzzNum);

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Only Integers are allowed for Hundo, please enter both values'
        });
    }
}

function generateNumbers(start, end) {
    let numbers = [];

    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }

    return numbers;
}

function displayNumbers(numArr, fizz, buzz) {
    let templateRows = '';
    let row = '';
    let rowCount = 0;

    for (let i = 0; i < numArr.length; i++) {
        rowCount++;
        let num = numArr[i];
        let numString = numArr[i];

        if (num % fizz == 0 && num % buzz == 0) {
            className = "fizzBuzz";
            numString = "FizzBuzz";
        } else {
            if (num % fizz == 0) {
                className = "fizz";
                numString = "Fizz";
            } else if (num % buzz == 0) {
            className = "buzz";
            numString = "Buzz";
            } else {
            className = "";
            }
        
        }

        if (rowCount == 1) {
            row += `<tr>`;
        }

        row += `<td class="${className}">${numString}</td>`;

        if (rowCount == 10) {
            row += `</tr>`;
            templateRows += row;
            rowCount = 0;
            row = ``;
        }
    }

    document.getElementById("results").innerHTML = templateRows;
}