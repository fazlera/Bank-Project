// step:1 add event listener in deposit button 
document.getElementById('deposit-btn').addEventListener('click',function(){
    // step: 2 get deposit amount from the input field 
    // for get input field . value 
    const depositField = document.getElementById('deposit-value')
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    //step 3  get the deposit current amount
    // get the deposit total .inner text
    const depositTotalValue = document.getElementById('deposit-total')
    const previousDepositTotalString = depositTotalValue.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    // step 4 add total deposit amount
    const currentDeposit = previousDepositTotal + newDepositAmount;
      depositTotalValue.innerText = currentDeposit;

    //   step 5 add total balance

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)

    // step 6 calculate the balance total 
    const currentBalance = newDepositAmount + previousBalanceTotal;
    balanceTotal.innerText = currentBalance;



    // step 7 clear the deposit field

    depositField.value = '';
    

})