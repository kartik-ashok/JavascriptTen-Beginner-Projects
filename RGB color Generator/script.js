const redSlider = document.getElementById("red");
const greenslider = document.getElementById("green");
const blueSlider = document.getElementById("blue");

const redvaluespan = document.getElementById("redvalue");
const greenvaluespan = document.getElementById("greenValue");
const bluevaluespan = document.getElementById("blueValue");

const colorbox = document.getElementById("color-box");
const copyBtn = document.getElementById("copyButton");

const inputType = document.getElementById("inputType");

redSlider.addEventListener("input", updateColor);
greenslider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);
copyBtn.addEventListener("click", copyRGB);

function updateColor() {
  const redvalue = redSlider.value;
  const greenvalue = greenslider.value;
  const bluevalue = blueSlider.value;

  const rgbColor = `rgb(${redvalue},${greenvalue},${bluevalue})`;
  colorbox.style.backgroundColor = rgbColor;

  redvaluespan.textContent = redvalue;
  greenvaluespan.textContent = greenvalue;
  bluevaluespan.textContent = bluevalue;
  inputType.textContent = rgbColor;
}
updateColor();

function copyRGB() {
  const redvalue = redSlider.value;
  const greenvalue = greenslider.value;
  const bluevalue = blueSlider.value;

  const rgbColor = `rgb(${redvalue},${greenvalue},${bluevalue})`;
  navigator.clipboard
    .writeText(rgbColor)
    .then(() => {
      alert("copied to clipboard");
    })
    .catch((error) => {
      console.error("failed to copy RGB values", error);
    });
}
