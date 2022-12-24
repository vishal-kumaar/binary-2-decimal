const binary = document.getElementById("binary");
const btn = document.getElementsByClassName("btn")[0];
const result = document.getElementsByClassName("result")[0];

function binary_to_decimal(binary){
    let decimal = 0;
    let len = binary.length;

    for (let i in binary){
        decimal += Number(binary[i]) * Math.pow(2, len - i - 1);
    }

    return decimal;
}

function is_binary(binary){
    for (let digit of binary){
        if (digit !== "0" && digit !== "1"){
            return false;
        }
    }

    return true;
}

btn.addEventListener("click", (e) => {
    let binary_value = binary.value;

    if (is_binary(binary_value)){
        result.innerHTML = "Decimal Number : " + binary_to_decimal(binary_value);
    }
    else {
        result.innerHTML = "Invaild Input";
    }

    e.preventDefault()
})