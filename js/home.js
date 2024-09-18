
document.getElementById('btn-add-meoney').addEventListener('click', function(event){
    event.preventDefault(); //browser ke laod hote dei na;
    const addMoneyInput = document.getElementById('input-add-money').value;
    const pinNumber = document.getElementById('input-pin-number').value;

    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert("Worng Pin Number");
    }
});