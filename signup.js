
// Sign Up Screen Resizing Image Adaptation

var signup_interval = setInterval(function(){
    try{
        if (window.innerWidth >= 921){
            document.getElementById("r-image").src = "signup-icons/right-image.png";
        } else {document.getElementById("r-image").src = "signup-icons/right-image-horizontal.png";}  
    } catch(err){};
}, 10);


// Sign-up 1 to sign-up 2

try{
    document.getElementById("submit-signup-1").onclick = function(){

        var fetchRegistration_Name = $("#input-nama").val();
        var fetchRegistration_Email = $("#input-email").val();
        var fetchRegistration_PhoneNumber = $("#input-telp").val();

        const registration_dataListing = [fetchRegistration_Name, fetchRegistration_Email, fetchRegistration_PhoneNumber];

        console.log(/[0-9]{12}|([0-9-]*){3}/g.exec(fetchRegistration_PhoneNumber));  
        console.log("wkwkkkw")      ;

        for (let inputs of registration_dataListing){
            if (inputs.length == 0){ 
                for (let warnings of document.getElementsByClassName("invalid-input")){
                    document.getElementsByClassName("invalid-input")[0].innerHTML = "Identitas tidak boleh kosong.";                    
                    warnings.style.display = "block";
                }
                return;
            }
        }

        var tos_checkboxValidation = document.querySelector(".tos-checkbox");
        if (!tos_checkboxValidation.checked){
            for (let warnings of document.getElementsByClassName("invalid-input")){
                warnings.style.display = "block";
            }
            document.getElementsByClassName("invalid-input")[0].innerHTML = "Identitas tidak boleh kosong.";                                        
            return;
        }        

        if (/[a-zA-Z0-9.]*@([a-zA-Z0-9.]*)/g.exec(fetchRegistration_Email) == null && /[0-9]{12}|([0-9-]*){3}/g.exec(fetchRegistration_PhoneNumber)[0] == ""){
            document.getElementsByClassName("invalid-input")[0].innerHTML = "Format E-Mail & nomor telepon tidak valid.";
            document.getElementsByClassName("invalid-input")[0].style.display = "block";          
            return; 
        } else if (/[a-zA-Z0-9.]*@([a-zA-Z0-9.]*)/g.exec(fetchRegistration_Email) == null){
            document.getElementsByClassName("invalid-input")[0].innerHTML = "Format E-Mail tidak valid.";
            document.getElementsByClassName("invalid-input")[0].style.display = "block";            
            return;
        } else if (/([0-9]{12})|(([0-9-]*){3})/g.exec(fetchRegistration_PhoneNumber)[0] == ""){
            document.getElementsByClassName("invalid-input")[0].innerHTML = "Format nomor telepon tidak valid.";
            document.getElementsByClassName("invalid-input")[0].style.display = "block";            
            return;            
        }
        location.href = "createaccount.html";
    }; 
} catch(err){};
