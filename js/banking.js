// handle deposite event handler
document.getElementById("deposit-button").addEventListener("click", function () {
    // get the deposit input field
    const depositField = document.getElementById("deposit-input")
    const depositInputText = depositField.value;
    const depositInput = parseFloat(depositInputText)


    // update deposit total amount
    const depositTotal = document.getElementById("deposit-total")
    const depositText = depositTotal.innerText;
    const previesDepositAmount = parseFloat(depositText)
    const newDepositAmount = previesDepositAmount + depositInput;
    depositTotal.innerText = newDepositAmount;


    // update balance total
    const balanceTotal = document.getElementById("balance-total")
    const balanceText = balanceTotal.innerText;
    const previesBalanceAmount = parseFloat(balanceText)
    const newBalanceAmount = previesBalanceAmount + depositInput;
    balanceTotal.innerText = newBalanceAmount;

    // clean the input Field
    depositField.value = "";
})


// handle withdraw event handler
document.getElementById("withdraw-button").addEventListener("click", function () {
    // get input from withdraw input field
    const widthdrawField = document.getElementById("withdraw-input")
    const withdrawText = widthdrawField.value;
    const withdrawInput = parseFloat(withdrawText)

    // update withdraw amount
    const widthdrawTotal = document.getElementById("withdraw-total")
    const previesWithdrawText = widthdrawTotal.innerText;
    const prviesWithdraw = parseFloat(previesWithdrawText)
    const newWithdrawAmount = prviesWithdraw + withdrawInput;
    widthdrawTotal.innerText = newWithdrawAmount;

    // update withdraw amount 
    const balancetotal = document.getElementById("balance-total")
    const balanceText = balancetotal.innerText;
    const previesAmount = parseFloat(balanceText)
    const newBalanceAmount = previesAmount - withdrawInput;
    balancetotal.innerText = newBalanceAmount;

    // clean withdraw Field
    widthdrawField.value = ""
})