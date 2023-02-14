// *input values
document.getElementById('btn-deposit').addEventListener('click', function(){
    const deposit = document.getElementById('deposit-input');
    const newDepositAmountString = deposit.value;
    // *conversion from string to number
     const newDepositAmount = parseFloat(newDepositAmountString);

    // *previous values 

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    // *conversion from string to number
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // *total value
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // *value conversion from sting
    depositTotalElement.innerText = currentDepositTotal;

    // *balance values
    const balanceTotalElement = document.getElementById('balance-total');
    const newBalanceString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(newBalanceString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    deposit.value = '';
})