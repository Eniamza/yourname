let someColor = "red";
let validate;

validate = function(){

    if(document.getElementById("nickname").value==""){
        alert("Please enter a nickname!")
        return false;
    }
    else{
        return true;
    }

}


 function test (){

    if(validate()==false){
        return;
    }
    
    alert("Success!")
    
}

