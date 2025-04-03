const passwordInput = document.getElementById("password");
const togglePasswordButton = document.getElementById("togglePassword");
const eyeIcon = togglePasswordButton.querySelector("i");

togglePasswordButton.addEventListener("click", function () {
  // Toggle the type attribute
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);

  // Toggle the eye icon class for Font Awesome 6
  if (type === "password") {
    // Show the eye
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  } else {
    // Show the eye-slash
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  }
});

// Optional: Prevent form submission for demo purposes
// const loginForm = document.getElementById('loginForm');
// loginForm.addEventListener('submit', function(event) {
//     event.preventDefault();
//     console.log('Sign in attempt captured');
//     // Add validation or actual submission logic here
// });
