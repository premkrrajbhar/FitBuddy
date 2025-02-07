let heightInput = document.getElementById("heightInput");
let weightInput = document.getElementById("weightInput");
let calculateBtn = document.getElementById("calculateBtn");
let result = document.getElementById("result");
let clearBtn = document.getElementById("clearBtn");

calculateBtn.addEventListener("click", () => {
  let heightVal = heightInput.value;
  let weightVal = weightInput.value;

  if (heightVal == "" || weightVal == "") {
    result.innerText = "Please fill all input fields";
    return;
  }

  let heightInMeter = parseFloat(heightVal) / 100;
  let weight = parseFloat(weightVal);

  if (heightInMeter <= 0 || weight <= 0) {
    result.innerText =
      "Please enter valid positive numbers for weight and height";
    return;
  }

  let calBmi = (weight / (heightInMeter * heightInMeter)).toFixed(2);

  if (calBmi < 16) {
    result.innerHTML = `Severe Thinness: ${calBmi}`;
  } else if (calBmi >= 16 && calBmi < 17) {
    result.innerText = `Moderate Thinness: ${calBmi}`;
  } else if (calBmi >= 17 && calBmi < 18.5) {
    result.innerText = `Mild Thinness: ${calBmi}`;
  } else if (calBmi >= 18.5 && calBmi < 25) {
    result.innerText = `Normal Weight: ${calBmi}`;
  } else if (calBmi >= 25 && calBmi < 30) {
    result.innerText = `Overweight: ${calBmi} `;
  } else if (calBmi >= 30 && calBmi < 35) {
    result.innerText = `Obese Class I: ${calBmi}`;
  } else if (calBmi >= 35 && calBmi < 40) {
    result.innerText = `Obese Class II: ${calBmi}`;
  } else {
    result.innerText = `Obese Class III: ${calBmi}`;
  }
});

clearBtn.addEventListener("click", () => {
  heightInput.value = "";
  weightInput.value = "";
  result.innerText = "";
});
