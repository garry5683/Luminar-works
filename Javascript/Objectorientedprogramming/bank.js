// bank
//createAccount()
//balanceEnquiry()
//deposit()
//withdrawal()


class Bank{

    createAccount(account_number,name,balnce){
        this.acc_num=account_number;
        this.name=name;
        this.balance=balnce
    }
    balanceEnquiry(){
        console.log("Your Available balance="+this.balance);
    }
    deposit(amt){
        this.balance+=amt;
        console.log(`Your account ${this.acc_num} has been credited with amount ${amt} your aval bal = ${this.balance}`);
    }
    withdrawal(amt){
        if (this.balance<amt){
            console.log("Transaction failled insufficient balance");
        }
        else{
            this.balance -= amt;
            console.log(`Your account ${this.acc_num} has been debited with amount ${amt} your aval bal = ${this.balance}`);
        }

    }
}

var obj=new Bank()
    obj.createAccount(1000,"garry",20000)
    obj.withdrawal(5000)
    obj.balanceEnquiry()

var obj1=new Bank()
    obj1.createAccount(1000,"sebin",2000)
    obj1.withdrawal(5000)
    obj.withdrawal(1000)