// ===== NAV MENU TOGGLE =====
function toggleMenu(){
  console.log("📂 Menu toggle clicked");

  const menu = document.getElementById('menu');
  menu.classList.toggle('active');

  console.log(
    menu.classList.contains('active')
      ? "✅ Menu opened"
      : "❌ Menu closed"
  );
}

// ===== REAL-TIME DATE & TIME =====
function updateDateTime(){
  const now = new Date();
  const dateStr = now.toLocaleDateString();
  const timeStr = now.toLocaleTimeString();

  document.getElementById('dateSpan').innerText = dateStr;
  document.getElementById('timeSpan').innerText = timeStr;

  console.log("⏰ Date & Time Updated:", dateStr, timeStr);
}

setInterval(updateDateTime, 1000);
updateDateTime();

// ===== DARK/LIGHT MODE =====
const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');

  const mode = document.body.classList.contains('dark') ? "Dark" : "Light";
  themeBtn.innerText = mode === "Dark" ? '☀️ Light Mode' : '🌙 Dark Mode';

  console.log("🎨 Theme changed to:", mode);
});

// ===== NAVIGATION FUNCTIONS =====
function goPCOD(){
  console.log("➡ Navigating to PCOD page");
  window.location.href = "pages/pcod-about.html";
}

function goPCOS(){
  console.log("➡ Navigating to PCOS page");
  window.location.href = "pages/pcos-about.html";
}

// ===== ACTIVE PAGE HIGHLIGHT =====
const current = window.location.pathname.split("/").pop();
console.log("📄 Current Page:", current);

document.querySelectorAll(".menu a").forEach(link=>{
  console.log("🔗 Checking link:", link.getAttribute("href"));

  if(link.getAttribute("href") === current){
    link.classList.add("active");
    console.log("⭐ Active link set:", current);
  }
});
