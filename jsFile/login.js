// step: 1 Submit button clicked

document.getElementById('submit-btn').addEventListener('click',function(){
//    step:2 get input email value
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    
    // step: get the password element

    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    
    // step: 4 check is email or password are verified 

    if( email === 'example@gmail.com' && password === '123456789'){
        window.location.href = 'http://127.0.0.1:5500/jsFile/bank.html'
    }
    else{
        alert('invalid user');
    }
})