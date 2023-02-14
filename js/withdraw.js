// *eventhandler 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdraw = document.getElementById('withdraw-input');
    const newWithdrawAmountString = withdraw.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdraw.value = ''; 
    if(isNaN(newWithdrawAmount)){
        alert('Please Provide Valid Number');
        return;
    }
    
    // *text output conversion
    const WithdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawString = WithdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawString);

    withdraw.value = ''; 

    // *text output conversion
    const balanceTotalElement = document.getElementById('balance-total');
    const newBalanceString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(newBalanceString);
    
    if (newWithdrawAmount > previousBalanceTotal ){
        alert('Not enough balance');
        return;
    }
    // *calculation
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    WithdrawTotalElement.innerText = currentWithdrawTotal;
    
    // *calculation
    const currentBalanceTotal = previousBalanceTotal - currentWithdrawTotal;
    balanceTotalElement.innerText = currentBalanceTotal;

     
})