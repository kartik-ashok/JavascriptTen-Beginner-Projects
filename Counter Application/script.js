document.getElementById("increment").addEventListener("click", increment);
document.getElementById("decrement").addEventListener("click", decrement);
document.getElementById("reset").addEventListener("click", reset);

let conunterDisplay = document.getElementById("counter");
let counterValue = 0;
function updateCounterDisplay() {
  conunterDisplay.textContent = counterValue;
}
function increment() {
  counterValue++;
  updateCounterDisplay();
}
function decrement() {
  counterValue--;
  updateCounterDisplay();
}
function reset() {
  counterValue = 0;
  updateCounterDisplay();
}
