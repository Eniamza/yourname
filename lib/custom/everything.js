let validate;
let removeInput;
let displayLoading;
let displayResult;
let executeProc;



validate = function(){

    if(document.getElementById("nickname").value==""){
        alert("Please enter a nickname!");
        return false;
    }
    else{
        return true;
    }

}

removeInput = function(){

    let inputEL = document.getElementById("inputForm");
    if (inputEL.className !== "d-none") {
        inputEL.classList.add("d-none"); 
       }

}


displayLoading = function(){

    let loadingElement = document.getElementById("loading");
    if (loadingElement.classList.contains("d-none")) {
     loadingElement.classList.remove("d-none"); 
    }

}

//let ageURL = `https://api.agify.io?name=${nicknameIn}`

 executeProc = async function (){

    if(validate()==false){
        return;
    }

    let nicknameIn = document.getElementById("nickname").value;


    removeInput();
    displayLoading();
    age = await axios.get(`https://api.agify.io?name=${nicknameIn}`)
    age = age.data
    alert(age.data.age);
   
    
    
}

