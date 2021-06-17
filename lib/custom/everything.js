
let validate;
let displayLoading;
let removeLoading;
let displayResult;
let executeProc;

let loadingElement;
validate = function(){

    if(document.getElementById("nickname").value==""){
        alert("Please enter a nickname!");
        return false;
    }
    else{
        return true;
    }

}

displayLoading = function(){

    let loadingElement = document.getElementById("loading");
    if (loadingElement.classList.contains("d-none")) {
     loadingElement.classList.remove("d-none"); 
    }

}


 executeProc = function (){

    if(validate()==false){
        return;
    }

    displayLoading();
    
    
}

