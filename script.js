document.querySelector("button").addEventListener("click", function () {

    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if(username === "admin" && password === "1234"){
        alert("Login Successful");
    }else{
        alert("Invalid Username or Password");
    }

});
