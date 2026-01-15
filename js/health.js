const dateSpan = document.getElementById("dateSpan");
const timeSpan = document.getElementById("timeSpan");

function updateClock() {
  const now = new Date();

  dateSpan.innerText = now.toDateString();
  timeSpan.innerText = now.toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);
document.querySelectorAll(".health-card button").forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const card = button.closest(".health-card");
    card.style.transform = "scale(0.96)";

    setTimeout(() => {
      window.location.href = button.getAttribute("data-link");
    }, 300);
  });
});