const btnEl = document.getElementById("btn");
const billEl = document.getElementById("bill");
const precentageEl = document.getElementById("precentage");
const totalEl = document.getElementById("total");
const errorEl = document.getElementById("error");


function calculate() {
    const billValue = billEl.value;
    const precentageValue = precentageEl.value;
    const totalValue = billValue * (1+ precentageValue / 100)

    if ((billValue <= 0 || isNaN(billValue)) || (precentageValue <= 0 || isNaN(precentageValue)))  {
        errorEl.innerHTML = "Please enter a valid number";
    }else {
        totalEl.innerHTML = totalValue.toFixed(1);
        errorEl.innerHTML = "";
    }

   
}




btnEl.addEventListener("click", calculate)

