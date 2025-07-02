const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

//Handle Sin in
const signInForm = document.getElementById('sign-in-form');
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = signInForm.querySelector('input[type="email"]').value.trim();
    const passwordInput = signInForm.querySelector('input[type="password"]').value.trim();

    if (emailInput === 'test@123.com' && passwordInput === 'password') {
        window.location.href = 'home.html';
    } else {
        alert('Invalid email or password!');
    }
});