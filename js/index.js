//search: form submit reloading the page
//step-1
document.getElementById('button-login').addEventListener('click', function(event){
    //step-2
    event.preventDefault(); //browser ke laod hote dei na;

    //step-3 get the phone number;
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if(phoneNumber === '1234' && pinNumber === '1234'){
        window.location.href = 'home.html'
    }
    else{
        alert("Invalid Pin, Account Number and Password 1234");
    }
});