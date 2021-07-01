// bank
//createAccount()
//balanceEnquiry()
//deposit()
//withdrawal()


class Bank {
   

    getAccountDetails() {
        
        accounts = {
            1000: { account_number: 1000, name: "ram", balance: 4000, username: 1000, password: "userone" },
            1001: { account_number: 1001, name: "ravi", balance: 2000, username: 1001, password: "usertwo" },
            1002: { account_number: 1002, name: "raju", balance: 7000, username: 1002, password: "userthree" },
            1003: { account_number: 1003, name: "nikil", balance: 6000, username: 1003, password: "userfour" },
        }
        return accounts
    }
    //1000,userone
    authenticate(uname, pwd) {

        let data = this.getAccountDetails()
        if (uname in data) {
            if (uname == data[uname]["username"] & pwd == data[uname]["password"]) {
                this.status = 1;
                console.log("Authentication successfull");
                return uname;

            }
            else {
                console.log("incorrect password"); obj.authenticate(1000, "userone")
                return -1
            }
        }
        else {
            console.log("invalid user");
            return 0;
        }
    }
    balanceEnquiry(accno) {
        if (this.status == 1) {
            let data = this.getAccountDetails()
            console.log(data[accno]["balance"]);
            this.status = 0
        }
        else {
            console.log("you must login");
        }
    }
    fundTransfer(user, to_accno, amount) {
        let data = this.getAccountDetails()
        if (this.status == 1) {
            if (to_accno in data) {
                if (amount < data[user]["balance"]) {
                    data[user]["balance"] -= amount;
                    data[to_accno]["balance"] += amount;

                    console.log("user balance=" + data[user]["balance"]);
                    console.log("Reciever Balance=" + data[to_accno]["balance"]);
                    this.status = 0
                }
                else {
                    console.log("Transaction failled insufficient balance ");
                }
            }
            else {
                console.log("invalid to_account number");
            }
        }
        else {
            console.log("you must login");
        }
    }
}

var obj = new Bank()

obj.balanceEnquiry(1000)

obj.authenticate(1000, "userone")
obj.balanceEnquiry(1000)

obj.authenticate(1000, "userone")
obj.fundTransfer(1000, 1002, 3000)
obj.authenticate(1000, "userone")
obj.balanceEnquiry(1000)



