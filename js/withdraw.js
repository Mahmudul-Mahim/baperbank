// *eventhandler 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdraw = document.getElementById('withdraw-input');
    const newWithdrawAmountString = withdraw.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    // *text output conversion
    const WithdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawString = WithdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawString);

    // *calculation
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    WithdrawTotalElement.innerText = currentWithdrawTotal;

    // *text output conversion
    const balanceTotalElement = document.getElementById('balance-total');
    const newBalanceString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(newBalanceString);

    // *calculation
    const currentBalanceTotal = previousBalanceTotal - currentWithdrawTotal;
    balanceTotalElement.innerText = currentBalanceTotal;

    withdraw.value = '';  
})