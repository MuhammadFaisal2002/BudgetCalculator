



function ExpenseRemainingButtonFunc() {
  var titleExpense = document.getElementById("product-title").value;
  var userDate = document.getElementById("user-Date").value;
  var expenseMonthly = document.getElementById("user-amount").value;
  var totalAmount = document.getElementById("total-amount").value;
  var table = document.getElementById('budgetTable');

  var totalRemainingBalance = totalAmount - expenseMonthly;


  var table = document.getElementById("budgetTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);


  
  cell1.innerHTML = userDate;
  cell2.innerHTML = titleExpense;
  cell3.innerHTML = expenseMonthly;
  cell4.innerHTML = totalAmount;
  cell5.innerHTML = totalRemainingBalance;

 
  document.getElementById('budgetTable').style.display = 'table';
}




