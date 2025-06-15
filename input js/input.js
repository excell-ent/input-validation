const loginElem = document.querySelector('.login-js');

const signupElem = document.querySelector('.signup-js');

let loginPage = true;

function userSignUp() {

	if (loginPage) {
		loginElem.style.display = 'none';
		signupElem.style.display = 'flex';
		loginPage = false;
	}
	
}


function userLogin() {
	
	if (!loginPage) {

		loginElem.style.display = 'flex';
		signupElem.style.display = 'none';
		loginPage = true;

	}

}


const passwordSignup = document.querySelector('.password-js');
const passwordConfirm = document.querySelector('.confirm-password-js');
const submitBtn = document.querySelector('.submit-btn-js');

// Disable submit initially
submitBtn.disabled = true;

// Function to validate passwords
function validatePasswords() {
	const firstPassword = passwordSignup.value.trim();
	const secondPassword = passwordConfirm.value.trim();

	if (firstPassword && secondPassword && firstPassword === secondPassword) {
		submitBtn.disabled = false;
	} else {
		submitBtn.disabled = true;
	}
}

// Listen for changes in both password fields
passwordSignup.addEventListener('input', validatePasswords);
passwordConfirm.addEventListener('input', validatePasswords);
