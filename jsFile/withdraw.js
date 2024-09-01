
document.getElementById('withdraw-btn').addEventListener('click',function(){
    
    const withdrawInputField = document.getElementById('withdraw-value')
    const newWithdrawAmountString = withdrawInputField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString)
    
    const withdrawTotalValue = document.getElementById('withdraw-total')
    const previousWithdrawAmountString = withdrawTotalValue.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString)
    const currentWithDraw = previousWithdrawAmount + newWithdrawAmount;

    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotal.innerText
    const newBalanceTotal = parseFloat(previousBalanceTotalString)
    if(newBalanceTotal == 0){

        return withdrawInputField.value = '', alert('not balance')
     }

    const withdrawCurrentBalance = newBalanceTotal - newWithdrawAmount  ;
    balanceTotal.innerText = withdrawCurrentBalance;

    
    

    withdrawTotalValue.innerText = currentWithDraw;

    withdrawInputField.value = '';

})