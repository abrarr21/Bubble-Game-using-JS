var timer=10;
var score=0;
var hitnum=0;

function makeBubble(){
    var clutter = "";
var randomNum = 0;

for(var i=1; i<150; i++){
    randomNum = Math.floor(Math.random()*10);
    clutter += `<div class="bubble"> ${randomNum} </div>`;
}

document.querySelector("#panelBottom").innerHTML = clutter;
}

function getHitnum(){
    hitnum = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitnum;
}

function runTime(){
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#panelBottom").innerHTML = `<h1>Game over</h1>`;
        }
    },1000)
}

function updateScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#panelBottom").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent)
    if(clickedNum === hitnum)
        updateScore();
        makeBubble();
        getHitnum();
});

makeBubble();
getHitnum();
runTime();


