
const url = 'https://saslearn.herokuapp.com/api/v1';

// sign up
$("#signupForm").submit(function (e) {
  e.preventDefault();

  let form = {
  	first_name: document.querySelector('#first_name').value,
  	last_name: document.querySelector('#last_name').value,
  	email: document.querySelector('#email').value,
  	password: document.querySelector('#password').value
  }

  $.ajax({
    url: `${url}/signup`,
    type: "POST",
    data: form,
  	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    success: function (response) {
		document.querySelector('#signup-success').style.display = "block";

		setTimeout(() => {
			location.href = "main.html";
		}, 1500)
    },
    error: e => console.error("error", e)
  });
});

// login
$("#loginForm").submit(function (e) {
  e.preventDefault();

  let form = {
  	email: document.querySelector('#email').value,
  	password: document.querySelector('#password').value
  }

  $.ajax({
    url: `${url}/login`,
    type: "POST",
    data: form,
  	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    success: function (response) {

  		let { email, first_name, last_name, token } = response;

  		if (token && token !== undefined) {

  			localStorage.setItem('email', email);
  			localStorage.setItem('first_name', first_name);
  			localStorage.setItem('last_name', last_name);

  			location.href = 'dashboard.html';

  		} else {
  			console.log('Invalid token')
  		}
    },
    error: e => console.error("error", e)
  });
});
