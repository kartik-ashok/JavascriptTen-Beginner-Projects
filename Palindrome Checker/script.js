// inputText;

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(cleanStr);
  const reverse = cleanStr.split("").reverse().join("");
  return cleanStr === reverse;
}

function palindromchecker() {
  const input = document.getElementById("inputText");
  const result = document.getElementById("result");
  if (isPalindrome(input.value)) {
    result.textContent = `"${input.value}" is palindrome`;
  } else {
    result.textContent = `"${input.value}" is not a palindrome`;
  }
  result.classList.add("fadeIn");
  input.value = "";
}

document
  .getElementById("checkButton")
  .addEventListener("click", palindromchecker);
