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

let eyeIcon = document.getElementById("exampleCheck1");
    let pass = document.getElementById("user-password");
    let password = document.getElementById("confirm-password")
     eyeIcon.onclick = function(){
      if(pass.type == "password" && password.type == "password"){
        pass.type  = "text";
        password.type = "text";
      }
      else{
        pass.type = "password";
      }
     }
