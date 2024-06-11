class Account {
    protected accountNumber: number; 
    protected balance: number;
    constructor(accoutNumber: number, balance: number) {
        this.accountNumber = accoutNumber;
        this.balance = balance;
    }
    deposit(money: number): void {
        this.balance += money;
    }
    withdraw(money: number): void {
        this.balance -= money;
    }
}

class SavingsAccount extends Account {
    private interestRate: number;
    constructor(accoutNumber: number, balance: number, interestRate: number) {
        super(accoutNumber, balance);
        this.interestRate = interestRate;
    }
    calculateInterest(): number{
        return this.balance * this.interestRate/100
    }
}

let account1 = new SavingsAccount(2564659550, 1000000000, 0.8)

console.log(account1.calculateInterest());

account1.deposit(200000000)

console.log(account1.calculateInterest());

