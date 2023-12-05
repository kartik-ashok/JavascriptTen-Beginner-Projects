function calculator() {
  const billAmountInput = document.getElementById("billAmount");
  const serviceRatingSelect = document.getElementById("servicerating");
  const splitCountInput = document.getElementById("splitcount");
  const mealTypeSelect = document.getElementById("mealType");

  const tipAmountoutput = document.getElementById("tipamount");
  const totalAmountoutput = document.getElementById("totalAmount");
  const amountPerPersonOutput = document.getElementById("amountPerPerson");

  const billAmount = parseFloat(billAmountInput.value);
  const serviceRating = parseFloat(serviceRatingSelect.value);
  const splitAmount = parseFloat(splitCountInput.value);
  const mealType = mealTypeSelect.value;

  if (isNaN(billAmount) || isNaN(serviceRating) || isNaN(splitAmount)) {
    tipAmountoutput.textContent = "Please enter valid numbers";
    totalAmountoutput.textContent = "";
    amountPerPersonOutput.textContent = "";
    return;
  }

  let tip;
  switch (serviceRating) {
    case 1:
      tip = billAmount * 0.05;
      break;
    case 2:
      tip = billAmount * 0.1;
      break;
    case 3:
      tip = billAmount * 0.15;
      break;
    case 4:
      tip = billAmount * 0.25;
      break;
  }

  let tAmount = billAmount + tip;
  let amtPerPerson = tAmount / splitAmount;

  if (mealType === "dinner") {
    tip += 5;
    tAmount += 5;

    amtPerPerson += 5;
  }

  tipAmountoutput.textContent = `Tip: ${tip.toFixed(2)} $`;
  totalAmountoutput.textContent = `Total Amount: ${tAmount.toFixed(2)} $`;
  amountPerPersonOutput.textContent = `Amount per person: ${amtPerPerson.toFixed(
    2
  )} $`;
}

document.getElementById("calculate").addEventListener("click", calculator);
