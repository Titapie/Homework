class BankAccount{
    #balance=0
    static totalMoney=0
    constructor (ownerName, balance){
        this.ownerName=ownerName;
        if (balance<0 || typeof(balance)!="number") throw new Error("Lỗi balance")
        this.#balance=balance
        BankAccount.totalMoney+=balance
    }
    get check(){
        return this.#balance
    }
    deposit(amount){
        if (amount<=0 || typeof(amount)!="number") throw new Error("Lỗi amount")
        this.#balance+=amount
      
    }
    withdraw(amount){
        if (amount>this.#balance || typeof(amount)!="number") throw new Error("số tiền rút nhiều hơn số dư hiện tại.")
          this.#balance-=amount   
    }
    toString(){
        return `Chủ tài khoản: ${this.ownerName}
        Số dư: ${this.#balance}`
    }
}
class SavingsAccount extends BankAccount{
    constructor(ownerName, balance, interestRate){
        super(ownerName,balance)
        this.interestRate=interestRate
    }
    addInterest(){
        super.deposit(this.check*this.interestRate)
    }
    withdraw(amount){
        if (amount > this.check/2) throw new Error("số tiền rút nhiều hơn nửa số dư hiện tại.")
            else super.withdraw(amount)
    }
   
}


const account = new SavingsAccount(
    "Bình",
    1000000,
    0.05
);

account.withdraw(400000);
console.log(account.check);




