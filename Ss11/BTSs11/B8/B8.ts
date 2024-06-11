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

class CheckingAccount extends Account {
    private overdraftLimit: number;
    constructor(accountNumber: number, balance: number, overdraftLimit: number) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
    // rút theo số tiền trong tài khoản
    // override withdraw(money: number) {
    //     if (money > this.balance) {
    //         alert("Tài khoản của quý khách không đủ để thực hiện giao dịch")
    //     }else{
    //         super.withdraw(money);
    //         console.log(this.balance);
            
    //     }
    // }
    // rút theo hạn mức cho phép
    // override withdraw(money: number): void {
    //     if(money > this.overdraftLimit){
    //         alert(`Số tiền rút tối đa trong 1 lần là: ${this.overdraftLimit}`)
    //     }else{
    //         super.withdraw(money);
    //         console.log(this.balance);
    //     }
    // }
}

let account1 = new CheckingAccount(2564659550, 1000000000, 200000000)

account1.withdraw(20000000)