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
class CheckingAccount extends Account {
    constructor(accountNumber, balance, overdraftLimit) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
}
let account1 = new CheckingAccount(2564659550, 1000000000, 200000000);
account1.withdraw(20000000);
