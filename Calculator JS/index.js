// Number evaluation

const zero = document.querySelector(".btn0");
const one = document.querySelector(".btn1");
const two = document.querySelector(".btn2");
const three = document.querySelector(".btn3");
const four = document.querySelector(".btn4");
const five = document.querySelector(".btn5");
const six = document.querySelector(".btn6");
const seven = document.querySelector(".btn7");
const eight = document.querySelector(".btn8");
const nine = document.querySelector(".btn9");

// Operations evaluation

const addBtn = document.querySelector(".add-btn");
const subtractBtn = document.querySelector(".minus-btn");
const divideBtn = document.querySelector(".divide-btn");
const timesBtn = document.querySelector(".times-btn");


const clearbtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equal")


zero.addEventListener("click", () => {
    result.value += 0;
})

one.addEventListener("click", () => {
    result.value += 1;
})

two.addEventListener("click", () => {
    result.value += 2;
})

three.addEventListener("click", () => {
    result.value += 3;
})

four.addEventListener("click", () => {
    result.value += 4;
})

five.addEventListener("click", () => {
    result.value += 5;
})

six.addEventListener("click", () => {
    result.value += 6;
})

seven.addEventListener("click", () => {
    result.value += 7;
})

eight.addEventListener("click", () => {
    result.value += 8;
})

nine.addEventListener("click", () => {
    result.value += 9;
})

//Operations Function

addBtn.addEventListener("click", () => {
    result.value += "+"
})

subtractBtn.addEventListener("click", () => {
    result.value += "-"
})

divideBtn.addEventListener("click", () => {
    result.value += "/";
})

timesBtn.addEventListener("click", () => {
    result.value += "*"
})


// Clear input function

clearbtn.addEventListener("click", () => {
    result.value = "";
})

equalBtn.addEventListener("click", () => {
    result.value = eval(result.value)
})
