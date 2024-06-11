"use strict";
class Account {
    constructor(accoutNumber, balance) {
        this.accountNumber = accoutNumber;
        this.balance = balance;
    }
    deposit(money) {
        this.balance += money;
    }
    withdraw(money) {
        this.balance -= money;
    }
}
class SavingsAccount extends Account {
    constructor(accoutNumber, balance, interestRate) {
        super(accoutNumber, balance);
        this.interestRate = interestRate;
    }
    calculateInterest() {
        return this.balance * this.interestRate / 100;
    }
}
let account1 = new SavingsAccount(2564659550, 1000000000, 0.8);
console.log(account1.calculateInterest());
account1.deposit(200000000);
console.log(account1.calculateInterest());
