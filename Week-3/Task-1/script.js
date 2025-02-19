const lights = document.querySelectorAll(".light");
const nextBtn = document.getElementById("nextBtn");
const autoBtn = document.getElementById("autoBtn");

let currentLight = 0;
let autoMode = false;
let autoInterval;

function changeLight() {
    lights.forEach(light => light.classList.remove("active"));
    lights[currentLight].classList.add("active");

    currentLight = (currentLight + 1) % 3;
}

nextBtn.addEventListener("click", changeLight);

function startAutoMode() {
    if (autoMode) {
        clearInterval(autoInterval);
        autoMode = false;
        autoBtn.textContent = "Auto Mode";
    } else {
        autoMode = true;
        autoBtn.textContent = "Stop Auto";
        autoInterval = setInterval(() => {
            if (currentLight === 0) {
                setTimeout(changeLight, 5000);
            } else if (currentLight === 1) {
                setTimeout(changeLight, 2000); 
            } else {
                setTimeout(changeLight, 4000); 
            }
        }, 3000);
    }
}

autoBtn.addEventListener("click", startAutoMode);