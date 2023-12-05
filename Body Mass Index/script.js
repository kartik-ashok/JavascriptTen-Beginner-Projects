document.getElementById("bmiform").addEventListener("submit", function (event) {
  event.preventDefault();
  calculateBMI();
});

function calculateBMI() {
  // Get values from form inputs
  const gender = document.getElementById("gender").value;
  const age = parseFloat(document.getElementById("age").value);
  const feet = parseFloat(document.getElementById("height-feet").value);
  const inches = parseFloat(document.getElementById("height-inches").value);
  const weight = parseFloat(document.getElementById("weight").value);

  // Convert height to meters
  const heightInMeters = feet * 0.3048 + inches * 0.0254;

  // Calculate BMI
  const bmi = weight / (heightInMeters * heightInMeters);

  // Display the result
  displayResult(bmi);
}

function displayResult(bmi) {
  const resultElement = document.querySelector(".result");

  if (!isNaN(bmi)) {
    const category = getBMICategory(bmi);
    resultElement.textContent = `Your BMI is ${bmi.toFixed(2)} - ${category}`;
  } else {
    resultElement.textContent = "Please enter valid values for calculation.";
  }
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return "Normal Weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
