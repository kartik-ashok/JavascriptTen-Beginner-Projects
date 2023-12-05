document.getElementById("calculateBtn").addEventListener("click", calculatLoan);

function calculatLoan() {
  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  const intrestRate = parseFloat(document.getElementById("IntrestRate").value);
  const loanTerm = parseFloat(document.getElementById("loanTearmMOnth").value);
  if (isNaN(loanAmount) || isNaN(intrestRate) || isNaN(loanTerm)) {
    alert("Please Enter a valid numbers");
  }
  const monthlyIntrest = intrestRate / 100 / 12;
  const totalPayments = loanTerm;
  const MonthlyPayment =
    (loanAmount * monthlyIntrest) /
    (1 - Math.pow(1 + monthlyIntrest, -totalPayments));
  const totalIntrest = MonthlyPayment * totalPayments - loanAmount;
  displayResult(MonthlyPayment, totalIntrest);
}

function displayResult(mp, mi) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
  <p><strong>Monthly Payment:${mp.toFixed(2)}</strong></p>
  <p><strong>Total Intrest:${mi.toFixed(2)}</strong></p>`;
}
