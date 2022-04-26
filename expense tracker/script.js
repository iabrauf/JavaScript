let submit = document.querySelector('#submit');
let balance = document.querySelector('#balance');
let amount = document.querySelector("#amount");
let income = document.querySelector('#money-plus');
let expense = document.querySelector('#money-minus');
let form = document.querySelector('#form');
let text = document.querySelector('#text');
let list = document.querySelector('#list');
let errmessage = document.querySelector('#message');
let deposite = 0.00;
let withdraw = 0.00;
let totalAmount = 0.00;
form.addEventListener('submit',e=>{
    e.preventDefault();
    let transactAmount = parseInt(amount.value);
    function transaction(n){
     try{
        if(n > 0){
          totalAmount += n;
          deposite += n;
          withdraw =0.0;
          balance.innerHTML = `$${totalAmount}`;
          income.innerHTML =  `$${deposite}`;
          expense.innerHTML = `$${withdraw}`;
          let element = document.createElement('LI');
          let message = `${text.value} did the previos transction of $${transactAmount}`;
          element.appendChild(document.createTextNode(message));
          list.appendChild(element);
      }
      else if(n < 0 && Math.abs(n) <= totalAmount && totalAmount > 0){
          totalAmount +=n;
          withdraw -=n;
          deposite =0.0;
          balance.innerHTML = `$${totalAmount}`;
          income.innerHTML =  `$${deposite}`;
          expense.innerHTML = `$${withdraw}`;
          let element = document.createElement('LI');
          let message = `${text.value} did the previos transction of $${transactAmount}`;
          element.appendChild(document.createTextNode(message));
          list.appendChild(element);

      }
      else{
        throw "Not a Valid Transaction";
      }
    }catch(err){
         errmessage.innerHTML=err;
      }
    }
transaction(transactAmount);

})
