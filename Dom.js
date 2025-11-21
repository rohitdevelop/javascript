const circle = document.querySelector(".progress-ring__circle");
const percentText = document.querySelector(".percent");
const btn = document.getElementById("downloadBtn");

const radius = 90;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference}`;
circle.style.strokeDashoffset = circumference;

btn.addEventListener("click", () => {
  let progress = 0;
  btn.disabled = true; // disable button

  let interval = setInterval(() => {
    progress++;
    percentText.textContent = progress + "%";

    const offset = circumference - (progress / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    if (progress >= 100) {
      clearInterval(interval);
      btn.disabled = false; // enable again
    }

  }, 50); // loader speed
});
