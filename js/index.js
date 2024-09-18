//search: form submit reloading the page
//step-1
document.getElementById('button-login').addEventListener('click', function(event){
    //step-2
    event.preventDefault(); //browser ke laod hote dei na;

    //step-3 get the phone number;
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if(phoneNumber === '5' && pinNumber === '1234'){
        window.location.href = '/home.html';
    }
    else{
        alert("Worng Pin Number");
    }
});