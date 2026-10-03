let balance = Number(localStorage.getItem("balance"));

if (!balance && balance !== 0) {
  balance = 10;
}

const balanceEl = document.querySelector("#balance");
const messageEl = document.querySelector("#message");
const depositBtn = document.querySelector("#deposit-btn");
const withdrawBtn = document.querySelector("#withdraw-btn");
const resetBtn = document.querySelector("#reset-btn");

balanceEl.textContent = balance;

depositBtn.addEventListener("click", function () {
  balance = balance + 5;
  localStorage.setItem("balance", balance);
  balanceEl.textContent = balance;
  messageEl.textContent = "Deposited 5";
});

withdrawBtn.addEventListener("click", function () {
  if (balance < 3) {
    messageEl.textContent = "Not enough funds";
    return;
  }
  balance = balance - 3;
  localStorage.setItem("balance", balance);
  balanceEl.textContent = balance;
  messageEl.textContent = "Withdrew 3";
});

resetBtn.addEventListener("click", function () {
  balance = 10;
  localStorage.setItem("balance", balance);
  balanceEl.textContent = balance;
  messageEl.textContent = "Reset";
});