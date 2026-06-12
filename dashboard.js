const welcomeHeading = document.getElementById("welcomeHeading");
const logoutBtn = document.getElementById("logoutBtn");
const attendanceValue = document.getElementById("attendanceValue");
const marksValue = document.getElementById("marksValue");
const cgpaValue = document.getElementById("cgpaValue");
const announcementList = document.getElementById("announcementList");
const announcementCount = document.getElementById("announcementCount");
logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("loggedUser");
  window.location.href = "index.html";
});

const storedUser = localStorage.getItem("loggedUser");
if (!storedUser) {
  window.location.href = "index.html";
} else {
  const user = JSON.parse(storedUser);
  welcomeHeading.textContent = `Welcome, ${user.name} 👋`;
  attendanceValue.textContent = user.attendence;
  marksValue.textContent = user.marks;
  cgpaValue.textContent = user.cgpa;
  
  loadAnnouncements();
}

async function loadAnnouncements() {
 
    const response = await fetch("./announcement.json");
    
    const announcements = await response.json();
    announcementCount.textContent = announcements.length;
    console.log(announcements, "announcements");
    announcementList.innerHTML = "";
    announcements.forEach((announcement) => {
      const li = document.createElement("li");
      li.textContent = announcement.message;
      announcementList.appendChild(li);
    });
  
}

window.addEventListener("load", function () {
  const storedUser = localStorage.getItem("loggedUser");
  if (!storedUser) {
    window.location.href = "login.html";
  }
});


