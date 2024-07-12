
    document.addEventListener('DOMContentLoaded', () => {
      const username = localStorage.getItem('username');
      if (username) {
        document.getElementById('uName').innerText = `Name: ${username}`;
      }
    });



let balance = 0;

function processTransaction() {

  const deposit = parseFloat(document.getElementById('deposit').value) || 0;
  const withdraw = parseFloat(document.getElementById('withdraw').value) || 0;
  
  let transactionType = '';
  let amount = 0;

  if (deposit > 0) {
    balance += deposit;
    transactionType = 'Deposit';
    amount = deposit;
  }
  
  if (withdraw > 0) {
    if (withdraw <= balance) {
      balance -= withdraw;
      transactionType = 'Withdraw';
      amount = withdraw;
    } else {
      alert("Insufficient balance for the withdrawal! your balance is "+balance);
      return; 
    }
  }
  
  
  document.getElementById('result').innerText = `Current Balance: $${balance.toFixed(2)}`;

  if(transactionType){
  
  addTransactionToTable(transactionType, amount, balance);
  
  }
  
  document.getElementById('deposit').value = '';
  document.getElementById('withdraw').value = '';
}

function addTransactionToTable(transactionType, amount, balance) {
  
  const table = document.getElementById('transactionTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  
  
  cell1.innerText = transactionType;
  cell2.innerText = `$${amount.toFixed(2)}`;
  cell3.innerText = `$${balance.toFixed(2)}`;
}

