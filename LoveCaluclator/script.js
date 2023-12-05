function calculateLove() {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();
  if (name1 === "" || name2 === "") {
    alert("please enter a both names");
  } else {
    const lovePercentage = Math.floor(Math.random() * 100);
    const result = document.getElementById("result");
    result.innerHTML = `${name1} and ${name2} 's love percentage is ${lovePercentage}%`;
    if (lovePercentage < 30) {
      result.innerHTML += "<br> Not a Great Match Keep Trying ";
    } else if (lovePercentage >= 30 && lovePercentage <= 60) {
      result.innerHTML += "<br> There is potential keep try and love";
    } else {
      result.innerHTML += "<br> Great Match Love is in the air ";
    }
  }
}
