// Task 1
function analyzeString(str) {
  let letters = 0;
  let digits = 0;
  let others = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (/[a-zA-Z]/.test(char)) {
      letters++;
    } else if (/\d/.test(char)) {
      digits++;
    } else {
      others++;
    }
  }

  console.log(`Letters: ${letters}`);
  console.log(`Digits: ${digits}`);
  console.log(`Other symbols: ${others}`);
}

analyzeString("Hello World 323232323123");

// Task 2
function numberToText(number) {
    if (number < 0 || number > 99 || isNaN(number)) {
        return "Помилка: введіть число від 0 до 99";
    }

    const units = ["нуль", "один", "два", "три", "чотири", "п'ять", 
                  "шість", "сім", "вісім", "дев'ять"];
    const teens = ["десять", "одинадцять", "дванадцять", "тринадцять", 
                  "чотирнадцять", "п'ятнадцять", "шістнадцять", 
                  "сімнадцять", "вісімнадцять", "дев'ятнадцять"];
    const tens = ["", "десять", "двадцять", "тридцять", "сорок", 
                "п'ятдесят", "шістдесят", "сімдесят", 
                "вісімдесят", "дев'яносто"];

    if (number < 10) {
        return units[number];
    }
    else if (number < 20) {
        return teens[number - 10];
    }
    else {
        const ten = Math.floor(number / 10);
        const unit = number % 10;
        return tens[ten] + (unit !== 0 ? ` ${units[unit]}` : "");
    }
}

const testNumbers = [0, 5, 10, 12, 19, 20, 35, 42, 50, 68, 89, 90, 99];

testNumbers.forEach(num => {
    console.log(`${num} - ${numberToText(num)}`);
});

// Task 3

function changeCase(str) {
    let result = '';
    for (let char of str) {
        if (char === '1' || char === '2' || char === '3' || char === '4' || char === '5' || char === '6' || char === '7' || char === '8' || char === '9' || char === '0') {
            result += '_';
        } else if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}

let inputStringForCaseChange = "Hello World 234324234123";
let changedCaseString = changeCase(inputStringForCaseChange);

console.log(`Змінений рядок: ${changedCaseString}`);

// Task 4
function toCamelCase(str) {
    return str
        .split('-')
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

let inputKebabCase = "hi-python-world-of-a-grpc";
let camelCaseString = toCamelCase(inputKebabCase);

console.log(`Camel Case: ${camelCaseString}`);

// Task 5

function wordsToAbbreviation(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase())
        .join('');
}

let inputStringForAbbreviation = "hyper   text   markup   language";
let abbreviation = wordsToAbbreviation(inputStringForAbbreviation);

console.log(`Result: ${abbreviation}`);

// Task 6

function manyStringToOne(...strs) {
    return strs
        .map(str => str.trim())
        .filter(str => str.length > 0)
        .join(' ');
}

let inputStrings = ["  Asyncio  ", "httpx", "  ", "vue js "];
let combinedString = manyStringToOne(...inputStrings);

console.log(`Combined string: ${combinedString}`);

// Task 7

function mathFromString(str) {
    let result = 0;
    let firstNumber = '';
    let secondNumber = '';
    let operator = '';

    for (let char of str) {
        if (char >= '0' && char <= '9') {
            if (operator === '') {
                firstNumber += char;
            } else {
                secondNumber += char;
            }
        } else if (['+', '-', '*', '/'].includes(char)) {
            operator = char;
        }
    }

    if (operator === '/' && parseFloat(secondNumber) === 0) {
        return "Error: Division by zero";
    }

    let fNumber = Number(firstNumber.trim());
    let sNumber = Number(secondNumber.trim());

    switch (operator) {
        case '+':
            result = fNumber + sNumber;
            break;
        case '-':
            result = fNumber - sNumber;
            break;
        case '*':
            result = fNumber * sNumber;
            break;
        case '/':
            if (sNumber === 0) {
                return "Error: Division by zero";
            }
            result = fNumber / sNumber;
            break;
    }

    return result;
}

let inputMathString = "123 + 12";
let mathResult = mathFromString(inputMathString);

console.log(`Result "${inputMathString}": ${mathResult}`);

// Task 8

function infoAboutURL(url){
    try {
        let parsedURL = new URL(url);
        console.log(`Protocol: ${parsedURL.protocol}`);
        console.log(`Host: ${parsedURL.host}`);
        console.log(`Pathname: ${parsedURL.pathname}`);
    } catch (error) {
        console.error("Invalid URL:", error.message);
    }
}

let inputURL = "https://itstep.org/ua/about";

infoAboutURL(inputURL);

// Task 9

function divideString(str, divider) {
    const result = [];
    let currentPart = '';
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === divider) {
            if (currentPart !== '') {
                result.push(currentPart);
                currentPart = '';
            }
        } else {
            currentPart += str[i];
        }
    }
    
    if (currentPart !== '') {
        result.push(currentPart);
    }
    
    return result;
}

const dateString = "10/08/2020";

console.log(divideString(dateString, "/"));


// Task 10

function print(template, ...args) {
    if (typeof template !== 'string') {
        console.error('Перший аргумент має бути рядком-шаблоном');
        return '';
    }

    let result = template;
    
    for (let i = 0; i < args.length; i++) {
        const placeholder = `%${i + 1}`;
        result = result.replace(new RegExp(placeholder, 'g'), args[i]);
    }
    
    console.log(result);
    return result;
}

print("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020);