const dashboardSidebar = document.getElementById("dashboardSidebar");
const dashboardProfile = document.getElementById("dashboardProfile");

dashboardSidebar.addEventListener("click", function () {
  window.location.href = "dashboard.html";
});

dashboardProfile.addEventListener("click", function () {
  window.location.href = "profile.html";
});