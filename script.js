function login(){

let u=document.getElementById("username").value;
let p=document.getElementById("password").value;

if(u=="admin" && p=="1234"){

document.getElementById("loginPage").style.display="none";
document.getElementById("dashboard").style.display="block";

}else{

alert("Wrong Username or Password");

}

}
