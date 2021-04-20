function Account(name, surname) {
  this.name = name;
  this.surname = surname;
  let number = Math.random() * 100000;
  let ibanCode = `GR0000${Math.round(number)}`;
  this.balance = 0;
  this.info = function () {
    return `New account created for ${name} ${surname}, IBAN: ${ibanCode}`;
  };
}

Account.prototype.getBalance = function () {
  return this.balance;
};

Account.prototype.deposit = function (amount) {
  if (amount < 0 || !typeof amount === "number") {
    return "Error 'Invalid amount'";
  }
  this.balance += amount;
  return `Deposit of ${amount} is made by ${this.name} ${this.surname}`;
};

Account.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    return "Error 'Insufficient balance!'";
  }
  if (!Number.isInteger(amount) || amount < 0) {
    return "Error 'Invalid amount'";
  }
  this.balance -= amount;
  return `Withdraw of ${amount} is made by ${this.name} ${this.surname}`;
};

const newAccount = new Account("Aglaia", "Perpiniadou");

console.log(newAccount.info());
console.log(newAccount.getBalance()); // 0
console.log(newAccount.deposit(100));
console.log(newAccount.getBalance()); // 100
console.log(newAccount.withdraw(50));
console.log(newAccount.getBalance()); // 50
console.log(newAccount.withdraw(500)); // Error 'Insufficient balance!'
console.log(newAccount.withdraw("50")); // Error 'Invalid amount'
