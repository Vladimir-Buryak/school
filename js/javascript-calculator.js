const result = document.querySelector(".result");
const numberOne = document.querySelector(".number-one");
const numberTwo = document.querySelector(".number-two");
const operations = document.querySelector(".operations");
const clearText = document.querySelector(".delete-button");

const digitalConverter = (string) =>{
  let num = string.value.replace(/\s/g, '');
  if (num === "") return false;
  return +num;
}

const performOperation = (operation, num1, num2) => {
    switch (operation) {
        case " + ":
            return num2 + num1;
        case " - ":
            return num2 - num1;
        case " * ":
            return num2 * num1;
        case " / ":
            if (num1 === 0) {
                return "Error";
            }
            return num2 / num1;
    }
}

const processingTheResult = (num) => {
    if (isNaN(num)){
        result.value = "Error";
        return;
    }
    result.value = num;
}

operations.addEventListener("click", (event) => {
    let operation = event.target.value;
    let num1 = digitalConverter(numberOne);
    let num2 = digitalConverter(numberTwo);
    if (num1 !== false && operation === " sqrt " && num2 === false){
        processingTheResult(Math.sqrt(num1));
        return;
    } else if (num1 === false || num2 === false || operation === " sqrt " || operation === undefined){
        return;
    }
    processingTheResult(performOperation(operation, num1, num2));
});

clearText.addEventListener("click", () => {
    numberOne.value = "";
    numberTwo.value = "";
    result.value = "";
})
