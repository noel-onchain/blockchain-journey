const name = "Leon";
let balance = 10;

console.log("Hello, " + name);
console.log("Balance:", balance);

balance = balance + 5;
console.log("After deposit:", balance);

function greet(person) {
  return "Hello, " + person;
}

console.log(greet("Ada"));

function canWithdraw(balance, amount) {
  if (amount > balance) {
    return "Not enough funds";
  }
  return "Success";
}

console.log(canWithdraw(10, 4));
console.log(canWithdraw(10, 20));

function isEven(n) {
  return n % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false

const skills = ["JavaScript", "Git", "VS Code"];

skills.push("Solidity");

for (const skill of skills) {
  console.log("Learning:", skill);
}

const wallet = {
  owner: "Leon",
  address: "0x1234",
  balance: 10
};

console.log(wallet.owner);
console.log(wallet.balance);

wallet.balance = wallet.balance + 2;
console.log(wallet.balance);

function deposit(wallet, amount) {
  wallet.balance = wallet.balance + amount;
  return wallet.balance;
}

console.log(deposit(wallet, 5));

function withdraw(wallet, amount) {
  if (amount > wallet.balance) {
    return "Not enough funds";
  }

  wallet.balance = wallet.balance - amount;
  return wallet.balance;
}

console.log(withdraw(wallet, 3));
console.log(withdraw(wallet, 1000));