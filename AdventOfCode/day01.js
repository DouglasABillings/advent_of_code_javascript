function readFile(){
    const fs = require('fs');
    const file = fs.readFileSync('input.txt', 'utf-8');
    const result = file.split("\r\n");
    return result;
}

function check(input){
    const inputArr = [];
    for (element of input){
        inputArr.push(parseInt(element)); 
    }
    for (first of inputArr){
        for (second of inputArr){
            if (first + second == 2020) return [first, second];
        }
    }
}

function multiply(num1, num2){
    let result = 0;
    result = num1 * num2;
    return result;
}
const file = readFile();
const sum = check(file);
const numOne = sum[0];
const numTwo = sum[1];
const value = multiply(numOne, numTwo);
console.log(`${numOne} * ${numTwo} = ${value}`);