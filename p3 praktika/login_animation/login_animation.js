const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');

const respsignUpButton = document.getElementById('respSignUpBtn');
const respLogInButton = document.getElementById('respLogInBtn');

const signUpform = document.getElementById('signUpForm');

const container = document.getElementById('container');

respLogInButton.style.display = "none";

signUpButton.addEventListener('click', () => {
	respLogInButton.style.display = "none";
	respsignUpButton.style.display = "none";
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	respLogInButton.style.display = "none";
	respsignUpButton.style.display = "none";
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
//signUpBtn
