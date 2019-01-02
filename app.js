function countdown(){
    var festivalTime = new Date(2020, 00, 02, 00, 00, 00).getTime();
    var currentTime = new Date().getTime();
    var difference = festivalTime - currentTime;
    var month = new Date().getMonth();

    var days =  Math.floor(difference / (1000 * 60*60*24));
    if (days<10)days = "0" + days;

    var hours = Math.floor(difference / (1000 * 60*60) % 24);
    if(hours<10)hours = "0" + hours;

    var minutes = Math.floor(difference / (1000 * 60) % 60);
    if(minutes<10)minutes = "0" + minutes;

    var seconds = Math.floor(difference / (1000) % 60);
    if(seconds<10)seconds = "0" + seconds;

    if(month===0 || month===1 || month===2){
        document.querySelector(".clock").innerHTML = 'Festiwal trwa w najlepsze! Masz czas do 04.03.2019! Na co jeszcze czekasz?';
    }else{
        document.querySelector(".clock").innerHTML = `${days} dni ${hours} godzin ${minutes} minut ${seconds} sekund`;
    }
    
}

setInterval(function() {
    countdown();
}, 1000)
