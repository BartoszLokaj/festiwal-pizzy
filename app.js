function countdown(){
    var festivalTime = new Date(2019, 00, 02, 00, 00, 00).getTime();
    // var festivalTime = new Date(2018, 10, 19, 23, 00);
    console.log(festivalTime);
    var currentTime = new Date().getTime();
    // var currentTime = new Date(2018, 10, 18, 22, 00);
    console.log(currentTime);
    var difference = festivalTime - currentTime;
    console.log(difference);
    var days =  Math.floor(difference / (1000 * 60*60*24));
    console.log(`Zostało dni: ${days}`);
    var hours = Math.floor(difference / (1000 * 60*60) % 24);
    console.log(`Zostało godzin: ${hours}`);
    
}

countdown();