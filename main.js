const sun = document.getElementById("sun");
const sky = document.getElementById("sky");
const stars = document.getElementById("particles-js");
//const sky = document.querySelector(".sky");
//const nightSky = document.querySelector(".night-sky");
let time = new Date().getHours();
let timeDifference = 6;

function setSunPosition (time){
    //sun.style.bottom = ((100/36)*(-1 * (time - 6)**2 + 26)) + "%"; 
    // sun.style.bottom = ((-2.222 * time ** 2) + (53.33 * time) - 240) + "%";
    sun.style.setProperty("--sun-bottom",((-2.222 * time ** 2) + (53.33 * time) - 240) + "%");
    sun.style.left = (((time -6)/12) * 100) + "%";
}

function setBackgroundPosition(time) {
    // sky.style.backgroundPosition = ((100/24)*(time-1) + "%") (((100/24)*time) + "%");
    const verticalOffset = (100/12) * (time - 6); 
    sky.style.backgroundPosition = `0% ${verticalOffset}%`;
}



const animationLoop = () => {
    setBackgroundPosition(time);
    setSunPosition(time);
    //time = time + 0.01;
    
    if (time > 17 || time < 6 ){
        sky.classList.toggle("sky-night");
        sun.classList.toggle("moon");
        if (time < 6) {
            time = time + 12;
        }
        else {
            time = (time -timeDifference) / 2;
            timeDifference--;
        }
    }
    requestAnimationFrame(animationLoop);
}
animationLoop();

particlesJS.load('particles-js', 'particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });