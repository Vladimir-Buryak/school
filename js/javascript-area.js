const base = document.querySelector("#base");
const height = document.querySelector("#height");
const result = document.querySelector("#result");
const buttonDelete = document.querySelector(".delete-button");
const buttonCount = document.querySelector(".count");

const digitalConverter = (string) =>{
    let num = string.value.replace(/\s/g, '');
    if (num === "") return false;
    return +num;
}

const processingTheResult = (num) => {
    if (isNaN(num)){
        result.value = "Error";
        return;
    }
    result.value = num;
}

buttonCount.addEventListener("click", () => {
    let num1 = digitalConverter(base);
    let num2 = digitalConverter(height);

    if (num1 === false || num2 === false){
        return;
    }

    processingTheResult((0.5 * num1) * num2);
})

buttonDelete.addEventListener("click", () => {
    base.value = "";
    height.value = "";
    result.value = "";
})

