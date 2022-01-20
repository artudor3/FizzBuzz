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

        let numbers = generateNumbers(startNum, endNum);

        displayNumbers(numbers, fizzNum, buzzNum, endNum, startNum);

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Only Integers are allowed for FizzBuzz, please enter correctly in all values'
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

function displayNumbers(numArr, fizz, buzz, end, start) {
    let templateRows = '';
    let row = '';
    let rowCount = 0;

    for (let i = 0; i < numArr.length; i++) {
        rowCount++;
        let num = numArr[i];
        let numString = numArr[i];

        if (num % fizz == 0 && num % buzz == 0) {
            className = "FizzBuzz";
            numString = "FizzBuzz";
        } else {
            if (num % fizz == 0) {
                className = "Fizz";
                numString = "Fizz";
            } else if (num % buzz == 0) {
            className = "Buzz";
            numString = "Buzz";
            } else {
            className = "";
            }
        
        }

        if (rowCount == 1) {
            row += `<tr>`;
        }

        row += `<td class="${className}">${numString}</td>`;

        if (rowCount == 10 || i == (end - start)) {
            row += `</tr>`;
            templateRows += row;
            rowCount = 0;
            row = ``;
        }
    }

    document.getElementById("results").innerHTML = templateRows;
}