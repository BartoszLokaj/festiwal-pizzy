function countdown(){
    var festivalTime = new Date(2019, 00, 02, 00, 00, 00).getTime();
    var currentTime = new Date().getTime();
    var difference = festivalTime - currentTime;
    var days =  Math.floor(difference / (1000 * 60*60*24));
    if (days<10)days = "0" + days;
    var hours = Math.floor(difference / (1000 * 60*60) % 24);
    if(hours<10)hours = "0" + hours;
    var minutes = Math.floor(difference / (1000 * 60) % 60);
    if(minutes<10)minutes = "0" + minutes;
    var seconds = Math.floor(difference / (1000) % 60);
    if(seconds<10)seconds = "0" + seconds;
    document.querySelector(".clock").innerHTML = `${days} dni ${hours} godzin ${minutes} minut ${seconds} sekund`;
}

setInterval(function() {
    countdown();
}, 1000)
