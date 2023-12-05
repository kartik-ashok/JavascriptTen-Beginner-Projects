function calculateAge() {
  const today = new Date();
  const birthdateInput = document.getElementById("birthedate").value;
  const birthdateparts = birthdateInput.split("-");
  const birthDay = parseInt(birthdateparts[0]);
  const birthMonth = parseInt(birthdateparts[1]) - 1;
  const birthYear = parseInt(birthdateparts[2]);
  const birthDate = new Date(birthYear, birthMonth, birthDay);

  console.log(birthDate);
  const isValidDate = (date) => {
    return (
      Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
    );
  };

  if (!isValidDate(birthDate)) {
    alert("Invalid Date Format DD-MM-YYYY");
    return;
  }

  const ageInMillSec = today - birthDate;
  const ageInSec = Math.floor(ageInMillSec / 1000);
  const ageInMin = Math.floor(ageInSec / 60);
  const ageInHou = Math.floor(ageInMin / 60);
  const ageIndays = Math.floor(ageInHou / 24);
  const ageInWeeks = Math.floor(ageIndays / 7);
  const ageInMonths = Math.floor(ageIndays / 30.436875);
  const ageInYears = Math.floor(ageIndays / 365.25);
  //   const ageInMonths =ageInDays / 30.436875;
  //   const ageInYears = Math.floor(ageInDays / 365.25);

  const resultcontainer = document.getElementById("resulrContainer");
  const result = document.getElementById("result");
  result.innerHTML = `
    <div class="result-Item">
      <h3>Age:</h3>
      <p>${ageInYears} years ${ageInMonths % 12} months ${
    ageIndays % 30
  } days</p>
    </div>
    
    <div class="result-Item">
      <h4>Months Passed</h4>
      <p>${ageInMonths} Months</p>
    </div>
    
     <div class="result-Item">
      <h4>Week Passed</h4>
      <p>${ageInWeeks} Weeks</p>
    </div>

         <div class="result-Item">
      <h4>Day Passed</h4>
      <p>${ageIndays} Days</p>
    </div>

     <div class="result-Item">
      <h4>Hours Passeds</h4>
      <p>${ageInHou} HOurs</p>
    </div>


     <div class="result-Item">
      <h4>Minutes Passed</h4>
      <p>${ageInMin} Min</p>
    </div>

     <div class="result-Item">
      <h4>Sec Passed</h4>
      <p>${ageInSec} Sec</p>
    </div>

     <div class="result-Item">
      <h4>MilliSeconds Passed</h4>
      <p>${ageInMillSec} MilliSeconds</p>
    </div>




        `;
  resultcontainer.style.display = "block";
}

const ageCalculatorform = document.getElementById("ageCalculator");
ageCalculatorform.addEventListener("submit", (event) => {
  event.preventDefault();
  calculateAge();
});
