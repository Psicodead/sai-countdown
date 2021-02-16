
const animation = lottie.loadAnimation({
    container: document.getElementById('lottie-wrapper'), // Required
    path: './../assets/26154-summer-breeze.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "beach", // Name for future reference. Optional.
})

const timer = document.getElementById('timer');
const endDate = new Date( "March 18, 2021 12:00:00" ).getTime();

console.log(endDate);
let interval;
const updateTimer = () =>{
    const now = new Date().getTime();
    let d = endDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(d / (1000 * 60 * 60 * 24));
    var hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((d % (1000 * 60)) / 1000);

    days = days>10?days:'0'+days;
    hours = hours>10?hours:'0'+hours;
    minutes = minutes>10?minutes:'0'+minutes;
    seconds = seconds>10?seconds:'0'+seconds;
  // Display the result in the element with id="demo"
  timer.innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (d < 0) {
    clearInterval(interval);
    timer.innerHTML = "00:00:00:00";
  }
}

interval = setInterval(updateTimer,1000)
