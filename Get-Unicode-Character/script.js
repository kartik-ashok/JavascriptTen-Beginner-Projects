function detectCharacter() {
  const input = document.getElementById("inputType").value;
  if (input) {
    const uniquecode = input.charCodeAt(0);
    const result = `The unique code value of ${input} is  ${uniquecode}`;
    document.getElementById("result").textContent = result;
  } else {
    document.getElementById("result").textContent = `please enter a character`;
  }
}
