//search: form submit reloading the page
//step-1
document.getElementById('button-login').addEventListener('click', function(event){
    //step-2
    event.preventDefault(); //browser ke laod hote dei na;
    console.log("Login button paici");

    //step-3 get the phone number;
    const phoneNumber = document.getElementById('phone-number');
    console.log(phoneNumber.value);

});