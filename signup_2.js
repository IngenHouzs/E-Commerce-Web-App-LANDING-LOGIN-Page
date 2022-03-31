
// Sign Up Screen Resizing Image Adaptation

var signup_interval = setInterval(function(){
    try{
        if (window.innerWidth >= 921){
            document.getElementById("r-image").src = "signup-icons/right-image.png";
        } else {document.getElementById("r-image").src = "signup-icons/right-image-horizontal.png";}  
    } catch(err){};
}, 10);


// Final registration step validation

try{
    document.getElementById("submit-signup-2").onclick = function(){
        var fetchRegistration_Name = $("#input-nama").val();
        var fetchRegistration_Password = $("#input-password").val();

        const registration_dataListing = [fetchRegistration_Name, fetchRegistration_Password];

        for (let inputs of registration_dataListing){
            if (inputs.length == 0){
                for (let warnings of document.getElementsByClassName("invalid-input")){
                    warnings.style.display = "block";
                }                 
                return;
            }
        }  

        location.href = "loadingAccVerification.html";

        

    };
} catch(err){};


