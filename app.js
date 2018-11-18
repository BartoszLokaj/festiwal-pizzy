function countdown(){
    var festivalTime = new Date(2019, 00, 02, 00, 00, 00).getTime();
    var currentTime = new Date().getTime();
    var difference = festivalTime - currentTime;
    var days =  Math.floor(difference / (1000 * 60*60*24));
    var hours = Math.floor(difference / (1000 * 60*60) % 24);
    var minutes = Math.floor(difference / (1000 * 60) % 60);
    var seconds = Math.floor(difference / (1000) % 60);
    // document.querySelector(".clock").innerHTML = days + "dni" + hours + "godzin" + minutes + "minut" + seconds + "sekund";
    document.querySelector(".clock").innerHTML = `${days} dni ${hours} godzin ${minutes} minut ${seconds} sekund`;
}

countdown();