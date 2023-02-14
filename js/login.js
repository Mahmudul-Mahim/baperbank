// * step 1 - add an event handler
document.getElementById('btn-submit').addEventListener('click',function(){
    // *step 2 - get the email address inside the email input filed 
    // *always use .value to get text from the input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // * step 3 - get password
    // * 3.a - set id on the html element
    // * 3.b - get the element
    // * 3.c - get the value of the element 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // !DO NOT VERIFY PASSWORD ON CLIENT SIDE, THIS IS DONE FOR EXAMPLE ONLY
    // * step 4 - verify email and password
    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid User');
    }

})