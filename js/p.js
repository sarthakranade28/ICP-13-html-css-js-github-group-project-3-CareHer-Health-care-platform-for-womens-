// ===== NAV MENU TOGGLE =====
function toggleMenu(){
  document.getElementById('menu').classList.toggle('active');
}

// ===== REAL-TIME DATE & TIME =====
function updateDateTime(){
  const now = new Date();
  const dateStr = now.toLocaleDateString();
  const timeStr = now.toLocaleTimeString();
  document.getElementById('dateSpan').innerText = dateStr;
  document.getElementById('timeSpan').innerText = timeStr;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// ===== DARK/LIGHT MODE =====
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
  themeBtn.innerText = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// ===== NAVIGATION FUNCTIONS =====
function goPCOD(){ window.location.href = "pages/pcod-about.html"; }
function goPCOS(){ window.location.href = "pages/pcos-about.html"; }

// ===== ACTIVE PAGE HIGHLIGHT =====
const current = window.location.pathname.split("/").pop();
document.querySelectorAll(".menu a").forEach(link=>{
  if(link.getAttribute("href") === current){
    link.classList.add("active");
  }
});
