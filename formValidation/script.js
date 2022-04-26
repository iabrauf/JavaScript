let name = document.querySelector("#name");
let form = document.querySelector("#form");
let email= document.querySelector("#email");
let password = document.querySelector("#password");
let cpassword = document.querySelector("#cpassword");
let submit = document.querySelector("#submit");
let errname= document.querySelector("#errname");
let erremail = document.querySelector("#erremail");
let errpass = document.querySelector("#errpassword");
let errcpass = document.querySelector("#errcpassword");
let errsubmit = document.querySelector("#errsubmit");
form.addEventListener('submit',e=>{
    e.preventDefault();
 function checkRequired(){
  if(name.value==''){
        errname.textContent='Name is missing';
        return false;
      }
      else if(email.value ==''){
        erremail.textContent='Email is missing';
        return false;
      }
      else if(password.value==''){
        errpass.textContent='Password is missing';
        return false;
      }
      else if(cpassword.value==''){
        errcpass.textContent='Confirm Pasword is missing';
        return false;
      }
    }
    
     function checkPassword(){
         if(password.value !== cpassword.value){
            errsubmit.textContent ="Passowrd and Confirm Password are not same"
            return false; 
         }
         else{
             return true;
         }
     }
     validEmail=(emailid)=>{
         let re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         if(emailid.value.match(re)){
             return true;
         }else{
            erremail.textContent='Email is not correct';
            return false;
         }
     }
     function checkLength(){
         let min = 6;
         let max = 10;
         if( password.value.length < min || password.value.length > max ){
            errpass.textContent='Password length shoule be in between 6 and 10'
            return false;
         }
         else{
             return true;
         }
     }
checkRequired();
checkPassword();
validEmail(email);
checkLength();

})