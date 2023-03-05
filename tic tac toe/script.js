flag = 1;
function func1(){
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;


//checking of player X win
if(b1=="X" && b2=="X" && b3 =="X"){
    document.getElementById("message").innerHTML="Player X has Won";
    b4 = document.getElementById("b4").disable=true;
    b5 = document.getElementById("b5").disable=true;
    b6 = document.getElementById("b6").disable=true;
    b7 = document.getElementById("b7").disable=true;
    b8 = document.getElementById("b8").disable=true;
    b9 = document.getElementById("b9").disable=true;

}
else if(b1=="X" && b4=="X" && b7 =="X"){
    document.getElementById("message").innerHTML="Player X has Won";
    b2 = document.getElementById("b2").disable=true;
    b3 = document.getElementById("b3").disable=true;
    b5 = document.getElementById("b5").disable=true;
    b6 = document.getElementById("b6").disable=true;
    b8 = document.getElementById("b8").disable=true;
    b9 = document.getElementById("b9").disable=true;
}
else if(b7=="X" && b8=="X" && b9 =="X"){
    document.getElementById("message").innerHTML="Player X has Won";
    b1 = document.getElementById("b1").disable=true;
    b2 = document.getElementById("b2").disable=true;
    b3 = document.getElementById("b3").disable=true;
    b4 = document.getElementById("b4").disable=true;
    b5 = document.getElementById("b5").disable=true;
    b6 = document.getElementById("b6").disable=true;
    }
else if(b9=="X" && b6=="X" && b3 =="X"){
    document.getElementById("message").innerHTML="Player X has Won";
    b1 = document.getElementById("b1").disable=true;
    b2 = document.getElementById("b2").disable=true;
    b4 = document.getElementById("b4").disable=true;
    b5 = document.getElementById("b5").disable=true;
    b7 = document.getElementById("b7").disable=true;
    b8 = document.getElementById("b8").disable=true;
    }
else if(b1=="X" && b5=="X" && b9 =="X"){
    document.getElementById("message").innerHTML="Player X has Won";
    b2 = document.getElementById("b2").disable=true;
    b3 = document.getElementById("b3").disable=true;
    b4 = document.getElementById("b4").disable=true;
    b6 = document.getElementById("b6").disable=true;
    b7 = document.getElementById("b7").disable=true;
    b8 = document.getElementById("b8").disable=true;
    }
else if(b3=="X" && b5=="X" && b7 =="X"){
    document.getElementById("message").innerHTML="Player X has Won";
    b1 = document.getElementById("b1").disable=true;
    b2 = document.getElementById("b2").disable=true;
    b4 = document.getElementById("b4").disable=true;
    b6 = document.getElementById("b6").disable=true;
    b8 = document.getElementById("b8").disable=true;
    b9 = document.getElementById("b9").disable=true;
    } 
else if(b2=="X" && b5=="X" && b8 =="X"){
    document.getElementById("message").innerHTML="Player X has Won";
    b1 = document.getElementById("b1").disable=true;
    b3 = document.getElementById("b3").disable=true;
    b4 = document.getElementById("b4").disable=true;
    b6 = document.getElementById("b6").disable=true;
    b7 = document.getElementById("b7").disable=true;
    b9 = document.getElementById("b9").disable=true;
        }
else if(b4=="X" && b5=="X" && b6 =="X"){
    document.getElementById("message").innerHTML="Player X has Won";
    b1 = document.getElementById("b1").disable=true;
    b2 = document.getElementById("b2").disable=true;
    b3 = document.getElementById("b3").disable=true;
    b7 = document.getElementById("b7").disable=true;
    b8 = document.getElementById("b8").disable=true;
    b9 = document.getElementById("b9").disable=true;
        }       
        //checking of player  0  win
else if(b1=="0" && b2=="0" && b3 =="0"){
    document.getElementById("message").innerHTML="Player 0 has Won";
    b4 = document.getElementById("b4").disable=true;
    b5 = document.getElementById("b5").disable=true;
    b6 = document.getElementById("b6").disable=true;
    b7 = document.getElementById("b7").disable=true;
    b8 = document.getElementById("b8").disable=true;
    b9 = document.getElementById("b9").disable=true;
    
    }
else if(b1=="0" && b4=="0" && b7 =="0"){
    document.getElementById("message").innerHTML="Player 0 has Won";
    b2 = document.getElementById("b2").disable=true;
    b3 = document.getElementById("b3").disable=true;
    b5 = document.getElementById("b5").disable=true;
    b6 = document.getElementById("b6").disable=true;
    b8 = document.getElementById("b8").disable=true;
    b9 = document.getElementById("b9").disable=true;
}
else if(b7=="0" && b8=="0" && b9 =="0"){
    document.getElementById("message").innerHTML="Player 0 has Won";
    b1 = document.getElementById("b1").disable=true;
    b2 = document.getElementById("b2").disable=true;
    b3 = document.getElementById("b3").disable=true;
    b4 = document.getElementById("b4").disable=true;
    b5 = document.getElementById("b5").disable=true;
    b6 = document.getElementById("b6").disable=true;
    }
else if(b9=="0" && b6=="0" && b3 =="0"){
    document.getElementById("message").innerHTML="Player 0 has Won";
    b1 = document.getElementById("b1").disable=true;
    b2 = document.getElementById("b2").disable=true;
    b4 = document.getElementById("b4").disable=true;
    b5 = document.getElementById("b5").disable=true;
    b7 = document.getElementById("b7").disable=true;
    b8 = document.getElementById("b8").disable=true;
    }
else if(b1=="0" && b5=="0" && b9 =="0"){
    document.getElementById("message").innerHTML="Player 0 has Won";
    b2 = document.getElementById("b2").disable=true;
    b3 = document.getElementById("b3").disable=true;
    b4 = document.getElementById("b4").disable=true;
    b6 = document.getElementById("b6").disable=true;
    b7 = document.getElementById("b7").disable=true;
    b8 = document.getElementById("b8").disable=true;
    }
else if(b3=="0" && b5=="0" && b7 =="0"){
    document.getElementById("message").innerHTML="Player 0 has Won";
    b1 = document.getElementById("b1").disable=true;
    b2 = document.getElementById("b2").disable=true;
    b4 = document.getElementById("b4").disable=true;
    b6 = document.getElementById("b6").disable=true;
    b8 = document.getElementById("b8").disable=true;
    b9 = document.getElementById("b9").disable=true;
    } 
else if(b2=="0" && b5=="0" && b8 =="0"){
    document.getElementById("message").innerHTML="Player 0 has Won";
    b1 = document.getElementById("b1").disable=true;
    b3 = document.getElementById("b3").disable=true;
    b4 = document.getElementById("b4").disable=true;
    b6 = document.getElementById("b6").disable=true;
    b7 = document.getElementById("b7").disable=true;
    b9 = document.getElementById("b9").disable=true;
    }
else if(b4=="0" && b5=="0" && b6 =="0"){
    document.getElementById("message").innerHTML="Player 0 has Won";
    b1 = document.getElementById("b1").disable=true;
    b2 = document.getElementById("b2").disable=true;
    b3 = document.getElementById("b3").disable=true;
    b7 = document.getElementById("b7").disable=true;
    b8 = document.getElementById("b8").disable=true;
    b9 = document.getElementById("b9").disable=true;
    }
    //chcecking for tie
    else if((b1=="X" || b1=="0") && (b2=="X" || b2=="0") && (b3=="X" || b3=="0") && (b4=="X" || b4=="0") && (b5=="X" || b5=="0") && (b6=="X" || b6=="0") && (b7=="X" || b7=="0") && (b8=="X" || b8=="0") && (b9=="X" || b9=="0")){
        document.getElementById("message").innerHTML="Match Tie";
    }   
    //chcec turn of the player.
    else{        
        if(flag==1){
            document.getElementById("message").innerHTML="Player X turn";
        }
        else{
            document.getElementById("message").innerHTML="Player 0 turn";
        }
    }
}

// putting value according to the turn
function func2(){
    if(flag == 1){
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag=0;
    }else{
        document.getElementById("b1").value = "0";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}

function func3(){
    if(flag == 1){
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag=0;
    }else{
        document.getElementById("b2").value = "0";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}

function func4(){
    if(flag == 1){
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag=0;
    }else{
        document.getElementById("b3").value = "0";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}

function func5(){
    if(flag == 1){
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag=0;
    }else{
        document.getElementById("b4").value = "0";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}

function func6(){
    if(flag == 1){
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag=0;
    }else{
        document.getElementById("b5").value = "0";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}

function func7(){
    if(flag == 1){
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag=0;
    }else{
        document.getElementById("b6").value = "0";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}

function func8(){
    if(flag == 1){
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag=0;
    }else{
        document.getElementById("b7").value = "0";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}

function func9(){
    if(flag == 1){
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag=0;
    }else{
        document.getElementById("b8").value = "0";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}
function func10(){
    if(flag == 1){
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag=0;
    }else{
        document.getElementById("b9").value = "0";
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}

// for Reset
//func 11 will work
function func11(){
    location.reload();
    document.getElementById("b1").value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';

}