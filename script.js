const loginBtn = document.getElementById("loginBtn");
async function loginFunction() {
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;
  const users = await fetch("./user.json");
  const userJson = await users.json();
  console.log(userJson, "users");
  // loginBtn.addEventListener('click',loginFunction)
  const user = userJson.find(
    (user) => user.email === email && user.password === password,
  );
  if (user) {
    localStorage.setItem("loggedUser", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Email or Password");
    console.log("Login Failed");
  }
}

loginBtn.addEventListener("click", loginFunction);

window.addEventListener("load", function () {
  const storedUser = localStorage.getItem("loggedUser");
  if (storedUser) {
    console.log("User already logged in, redirecting to dashboard.");
    window.location.href = "dashboard.html";
  } 
});

document.addEventListener("keypress", function (event) {
  console.log("Key pressed: ", event);
  if (event.key === "Enter") {
    loginFunction();
  }
});
