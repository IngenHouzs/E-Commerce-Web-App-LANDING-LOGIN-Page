// MAIN SCRIPT
// -------------------------------------

// Navbar Dropdown hover
function hideMobileNav(){
    $(".dropdown-widgets").hide();    
};

function onHover_dropdownShow(){
    $(".dropdown-widgets").show();
}

function onHover_dropdownColorSet(){
    $("#nav_command_dropdown").css("background-color", "rgb(209, 207, 207)");
}

function clickEvent_dropdown(){
    $(".dropdown-widgets").hide();
    $("#nav_command_dropdown").css("background-color", "");    
}

document.addEventListener('DOMContentLoaded', hideMobileNav);
$("#nav_command_dropdown").on('mouseover', onHover_dropdownShow);
$(".dropdown-widgets").on('mouseover', onHover_dropdownColorSet);
document.addEventListener('click', clickEvent_dropdown);


// Landing Page to Sign Up Page button link

try{
    document.getElementById("signup-movepage").onclick = function(){
        location.href = "signup.html";
    };         

} catch(err){};








	