
document.querySelector('.avatar-img').style.width = '200px';
document.querySelector('.avatar-img').style.height = '200px';

let names = document.querySelector("#fullname");
let email = document.querySelector("#email");

names.textContent = localStorage.getItem("first_name") + ' ' + localStorage.getItem("last_name");
email.textContent = localStorage.getItem("email");

// log out
$("#logout").click(function (e) {
  e.preventDefault();

  localStorage.removeItem("email");
  localStorage.removeItem("first_name");
  localStorage.removeItem("last_name");

  location.href = "main.html";
});