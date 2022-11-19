function loginValidation() { 
    // will access form input names
    let user = document.login.un;
    let pass = document.login.pw;
    if(user.value.length < 1) {
        //alert('Username is mandatory');
        let userErr = document.getElementById('userError')
        userErr.innerHTML = 'Username is mandatory';
        userErr.style.color = 'red';
        return false;
    }
    if(pass.value.length < 1) {
        //alert('Password is mandatory');
        let passErr = document.getElementById('passError')
        passErr.innerHTML = 'Password is mandatory';
        passErr.style.color = 'red';
        return false;
    }
    return true;
}