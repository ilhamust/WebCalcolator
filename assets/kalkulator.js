//objek digunakan untuk menyimpan data dan kondisi dari kalkulator
const calculator = {
  displayNumber: "0",
  operator: null,
  fristNumber: null,
  isWaitForSecondNumber: false,
};

// mengupdate angka pada kalkulator
function updateDisplay() {
  document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

// Menghapus data pada kalkulator
function clearCalculator() {
  calculator.displayNumber = "0";
  calculator.operator = null;
  calculator.fristNumber = null;
  calculator.isWaitForSecondNumber = false;
}

// menghilangkan angka nol
function inputDigit(digit) {
  if (calculator.displayNumber === "0") {
    calculator.displayNumber = digit;
  } else {
    calculator.displayNumber += digit;
  }
}

function inverseNumber() {
  if (calculator.displayNumber === "0") {
    return;
  }
  calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator) {
  if (!calculator.isWaitForSecondNumber) {
    calculator.operator = operator;
    calculator.isWaitForSecondNumber = true;
    calculator.fristNumber = calculator.displayNumber;

    //mengatur ulang angka agar kembali ke awal lagi
    calculator.displayNumber = "0";
  } else {
    alert("Operator sudah di tetapkan");
  }
}

function performCalculation() {
  if (calculator.fristNumber == null || calculator.displayNumber == null) {
    alert("Anda belum menetapkan Operator");
    return;
  }

  let result = 0;
  if (calculator.operator === "+") {
    result =
      parseInt(calculator.fristNumber) + parseInt(calculator.displayNumber);
  } else {
    result =
      parseInt(calculator.fristNumber) - parseInt(calculator.displayNumber);
  }
  const history = {
    firstNumber: calculator.fristNumber,
    secondNumber: calculator.displayNumber,
    operator: calculator.operator,
    result: result,
  };
  putHistory(history);
  calculator.displayNumber = result;
  renderHistory();
}

// mengambil button
const buttons = document.querySelectorAll(".button");

for (button of buttons) {
  button.addEventListener("click", function (even) {
    const target = event.target; // mendapatkan element yang di klik

    if (target.classList.contains("clear")) {
      clearCalculator();
      updateDisplay();
      return;
    }

    if (target.classList.contains("negative")) {
      inverseNumber();
      updateDisplay();
      return;
    }

    if (target.classList.contains("equals")) {
      performCalculation();
      updateDisplay();
      return;
    }

    if (target.classList.contains("operator")) {
      handleOperator(target.innerText);
      return;
    }

    inputDigit(target.innerText);
    updateDisplay();
  });
}
