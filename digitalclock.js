// function fun(){
//     var x = new Date
//     document.getElementsByClassName('hours')[0].innerHTML=x.getHours();
//     document.getElementsByClassName('minutes')[0].innerHTML=x.getMinutes();
//     document.getElementsByClassName('seconds')[0].innerHTML=x.getSeconds();
//     // if(x.getSeconds()==0){
//     //     clearInterval(address);

//     // }
// }
// // var address=
// setInterval(fun ,1000);
let start = document.getElementsByClassName("start")[0];
let stop = document.getElementsByClassName("stop")[0];
let reset = document.getElementsByClassName("reset")[0];
let count = 0;
let timerInterval;
let hour = document.getElementsByClassName("hours")[0];
let minute = document.getElementsByClassName("minutes")[0];
let second = document.getElementsByClassName("seconds")[0];
function updateTimer() {
    let hours = Math.floor(count / 3600);
    let minutes = Math.floor((count % 3600) / 60);
    let seconds = count % 60;
    hour.innerHTML = String(hours).padStart(2, '0');
    minute.innerHTML = String(minutes).padStart(2, '0');
    second.innerHTML = String(seconds).padStart(2, '0');
};
start.addEventListener("click", function () {

    if (!timerInterval) {
        timerInterval = setInterval(function () {
            count++;
            updateTimer();
        }, 1000);
    }


});
stop.addEventListener("click", function () {
    clearInterval(timerInterval);
    timerInterval = null;
});

reset.addEventListener('click', function () {
    clearInterval(timerInterval);
    timerInterval = null;
    count = 0;
    updateTimer();

});
updateTimer();