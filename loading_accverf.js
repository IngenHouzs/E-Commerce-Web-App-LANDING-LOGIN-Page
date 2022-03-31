var dotsCounter = 1;
var bg_gradientDegree = 281;

var loadingTextTransition = setInterval(function(){ 
    let dotsString = ".";

    for (let i = 0; i < dotsCounter;i++){
        dotsString += ".";
    }

    dotsCounter = (dotsCounter + 1) % 3;    

    document.getElementsByClassName("loading_text")[0].innerHTML = "Verifying your data" + dotsString;

}, 1000);


var loadingGradientTransform = setInterval(function(){
    bg_gradientDegree += 1;
    for (let obj of document.getElementsByClassName("body_loading")){
        obj.style.background = `linear-gradient(${bg_gradientDegree}deg, rgba(18,90,112,1) 0%, rgba(67,139,154,1) 92%) no-repeat`;
    }
}, 10);

var endAnimation = setTimeout(function(){
    clearInterval(loadingTextTransition);
    clearInterval(loadingGradientTransform);
    document.getElementsByClassName("loading_text")[0].innerHTML = "Akunmu sudah siap digunakan!";

    document.getElementsByClassName('bt-spinner')[0].style.border = "2px solid #5aa399";
    document.getElementsByClassName('bt-spinner')[0].style.boxShadow = "none";
    document.getElementsByClassName('checklist_img')[0].style.display = "block"; 

    autoLogin_visitDashboard();
}, 3900);

function autoLogin_visitDashboard(){
    var goToDashboard = setTimeout(function(){
        location.href = "signup.html";
    }, 2000);
}