document.addEventListener("DOMContentLoaded", function(){
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    // Handle Sign In
    const signInForm = document.querySelector('.sign-in form');
    if (signInForm) {
        signInForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent form submission

            const emailInput = signInForm.querySelector('input[type="email"]').value.trim();
            const passwordInput = signInForm.querySelector('input[type="password"]').value.trim();

            if (emailInput === 'test@123.com' && passwordInput === 'password') {
                // Redirect to home.html
                window.location.href = 'home.html';
            } else {
                alert('Invalid email or password!');
            }
        });
    } else {
        console.error("Sign-in form not found.");
    }
});