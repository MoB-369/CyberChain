class Customer {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposit successful. New balance for ${this.name}: $${this.balance}`);
    }

    checkBalance() {
        console.log(`Current balance for ${this.name}: $${this.balance}`);
    }

    withdraw(amount) {
        return new Promise((resolve, reject) => {
            if (this.balance >= amount) {
                this.balance -= amount;
                resolve(`Withdrawn $${amount} successfully. New balance for ${this.name}: $${this.balance}`);
            } else {
                reject(`Withdrawal failed. Insufficient balance for ${this.name}. Current balance: $${this.balance}`);
            }
        });
    }
}

const customers = [
    new Customer("Customer1", 1000),
    new Customer("Customer2", 500),
    new Customer("Customer3", 200)
];

const func = async function(){

    customers[0].checkBalance();
    customers[0].deposit(200);
    customers[0].checkBalance();


    await customers[0].withdraw(300)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

    customers[1].checkBalance();
    await customers[1].withdraw(600)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

}
func()


