var points = document.getElementById("points");
var up = document.getElementById("upBtn");
var up2 = document.getElementById("upBtnX2");
var upgrade1 = document.getElementById("upgradeBtn");
var upgrade2 = document.getElementById("upgradeBtn2");
var body = document.getElementById("body");
var welcome = document.getElementById("welcome");
var clickPlay = document.getElementById("clickPlay");
var game = document.getElementById("main");
var plusone = document.getElementById("plusone");
var tos = document.getElementById("tos");
var num = 0;



function countUp() {
     num = num + 1;
     points.innerHTML = "POINTS: " + num;
     plusone.style.display = "";
     setTimeout(hideCounters, 1700);
     if(num == 100) {
         upgrade1.style.display = "";
         upgradeAva()
     }
}

function hideCounters() {
     plusone.style.display = "none";
}

function upgradeX2() {
     num = num + 2;
     points.innerHTML = "POINTS: " + num;
     upgrade1.style.display = "none";
     up.style.display = "none";
     up2.style.display = "";
     if(num == 500) {
        upgrade2.style.display = "";
        upgradeAva()
     }
}

function pointSound() {
     var audio = document.getElementById("pointSound");
     audio.play();
}

function upgradeAva() {
     var audio = document.getElementById("upgradeAva");
     audio.play();
}

function welcomeScreen() {
    welcome.style.cssText = "background: black; background-size: cover; width: 1920px; height: 1080px; position: relative; right: 20px; left: -20px; bottom: 25px; transition: 1s;"
    clickPlay.style.display = "none";
    setTimeout(animEnd, 4000);
}

function animEnd() {
     welcome.style.cssText = "background: black; background-size: cover; width: 1920px; height: 1080px; position: relative; right: 20px; left: 2000px; bottom: 25px; transition: 1s;"
     setTimeout(gotoGame, 650);
}

function gotoGame() {
     welcome.style.display = "none";
     game.style.display = "";
}

function grantAccess() {
     clickPlay.style.display = "";
     tos.style.display = "none";
     document.cookie = "terms=false"
}

if(document.cookie == "terms=false") {
     tos.style.display = "none";
     clickPlay.style.display = "";
}


clickPlay.onclick = welcomeScreen;

up.addEventListener("click", pointSound);
up2.addEventListener("click", pointSound);

up2.onclick = upgradeX2;
upgrade1.onclick = upgradeX2;
up.onclick = countUp;

