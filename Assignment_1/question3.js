function createBankAccount(initialDeposit) {
    let balance = initialDeposit;
    let history = [];
    
    function deposit(amount) {
      balance += amount;
      history.push({ type: "Deposit", amount: amount });
    }
    
    function withdraw(amount) {
      const fee = 5;
      if (balance >= amount + fee) {
        balance -= (amount + fee);
        history.push({ type: "Withdrawal", amount: amount });
      } else {
        console.log("Error: Insufficient balance.");
      }
    }
    
    function getBalance() {
      return balance;
    }
    
    function getHistory() {
      return history;
    }
    
    function resetAccount() {
      balance = initialDeposit; 
      history = [];
    }
  
    const getAccountSummary = () => {
      return `Balance: $${balance}, Transactions: ${history.length}`;
    }
  
    return {
      deposit,
      withdraw,
      getBalance,
      getHistory,
      resetAccount,
      getAccountSummary
    };
  }
  
  const myAccount = createBankAccount(1000); 
  
  myAccount.deposit(200); 
  myAccount.withdraw(150); 
  myAccount.withdraw(1200); 
  
  console.log(myAccount.getBalance()); 
  
  console.log(myAccount.getHistory()); 
  
  console.log(myAccount.getAccountSummary()); 
  
  myAccount.resetAccount();
  console.log(myAccount.getBalance()); 
  console.log(myAccount.getHistory()); 
  