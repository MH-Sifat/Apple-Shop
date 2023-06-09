document.getElementById('login').addEventListener('click',function(){
    const email = document.getElementById('user-mail').value;
    let  password = document.getElementById('user-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    console.log(confirmPassword);
    if(email == 'admin@gmail.com' && password == 12345 && confirmPassword == 12345){

        window.location.href ="product.html";
       
    }
    else{
        alert('something is wrong!');

    }
    
    
})

