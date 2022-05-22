const height = document.getElementById("height");
const weight = document.getElementById("weight");
const button = document.querySelector("button");
const result = document.getElementById("textId");

button.addEventListener("click", () => {
  const getResult = ((weight.value / height.value ** 2) * 10000).toFixed(1);
  if (weight.value < 0 || height.value < 0) {
    result.innerHTML = "No valid value!";
  } else {
    result.innerHTML = `Your BMI ${getResult}`;
  }
});
