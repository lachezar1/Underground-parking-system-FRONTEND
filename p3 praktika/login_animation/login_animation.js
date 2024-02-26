const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');

const container = document.getElementById('container');
const respsignUpButton = document.getElementById('respSignUpBtn');
const respLogInButton = document.getElementById('respLogInBtn');
const signUpform = document.getElementById('signUpForm');

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

const loginusernameDiv = document.getElementById('loginUsername');
const loginpasswordDiv = document.getElementById('loginPassword');

respLogInButton.style.display = "none";

signUpButton.addEventListener('click', () => {
	respLogInButton.style.display = "none";
	respsignUpButton.style.display = "none";

	loginusernameDiv.style.border = "1px solid #111642";
	loginpasswordDiv.style.border = "1px solid #111642";

	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	respLogInButton.style.display = "none";
	respsignUpButton.style.display = "none";

	usernameInput.value = "";
	passwordInput.value = "";

	loginusernameDiv.style.border = "1px solid #111642";
	loginpasswordDiv.style.border = "1px solid #111642";

	container.classList.remove("right-panel-active");
});

respsignUpButton.addEventListener('click', () => {
	setTimeout(() => {
		respsignUpButton.style.display = "none";
		respLogInButton.style.display = "inline";
	}, "500");
	signUpform.classList.add('signUpOpen');
});
respLogInButton.addEventListener('click', () => {
	setTimeout(() => {
		respLogInButton.style.display = "none";
		respsignUpButton.style.display = "inline";
	}, "500");
	signUpform.classList.remove('signUpOpen');
});

// usernameInput.addEventListener('input', (event) => {
// 	let input = JSON.stringify(event.target.value);
// 	if (input.length - 2 < 3) {
// 		loginusernameDiv.style.border = "2px solid red";
// 	} else {
// 		loginusernameDiv.style.border = "1px solid #111642";
// 	}
// })

// passwordInput.addEventListener('input', (event) => {
// 	let input = JSON.stringify(event.target.value);
// 	if (input.length - 2 < 8) {
// 		loginpasswordDiv.style.border = "2px solid red";
// 	} else {
// 		loginpasswordDiv.style.border = "1px solid #111642";
// 	}
// })

const errorToast = document.getElementById('myToast');
const errorToastMessage = document.getElementById('message');
const errorCloseBtn = document.getElementById('closeBtn');

errorCloseBtn.addEventListener('click', () => {
	errorToast.classList.remove('showToast');
})

function login() {
	let url = "https://localhost:7106/User/Login";

	let body = {
		username: usernameInput.value,
		password: passwordInput.value
	}

	let token = btoa(`${body.username}:${body.password}`);

	fetch(url, {
		method: 'POST',
		headers: {
			'accept': '*/*',
			'Content-Type': 'application/json',
			'Authorization': `Basic ${token}`
		},
		body: JSON.stringify(body)
	})
	.then((resp) => {
		if (!resp.ok) {
			return resp.text().then(text => { throw new Error(text) })
		}
		localStorage.setItem("token",`${token}`)
		window.location.href = "#";

	})
	.catch(error => {
		console.error(error);
		errorToastMessage.innerText = "Fail to log in!";
		errorToast.classList.add('showToast');
	});
}