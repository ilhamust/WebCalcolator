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

// memasukan angka pada nilai displayNumber
function inputDigit(digit) {
  calculator.displayNumber += digit;
}

// mengambil button
const buttons = document.querySelectorAll(".button");

for (button of buttons) {
  button.addEventListener("click", function (even) {
    const target = event.target; // mendapatkan element yang di klik
    inputDigit(target.innerText);
    updateDisplay();
  });
}
