const passwordInput = document.querySelector('input[type="password"]');
const passwordVisibility = document.querySelector('#password-visibility');
const passwordVisibilityIcon = document.querySelector(
  '#password-visibility__icon'
);

passwordInput.addEventListener('input', showInputIcon);
passwordVisibility.addEventListener('click', togglePasswordVisibility);

function showInputIcon(e) {
  if (e.target.value.length > 0) {
    passwordVisibility.classList.remove('hidden');
  } else {
    passwordVisibility.classList.add('hidden');
  }
}

function togglePasswordVisibility() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordVisibilityIcon.classList.remove('fa-eye');
    passwordVisibilityIcon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    passwordVisibilityIcon.classList.remove('fa-eye-slash');
    passwordVisibilityIcon.classList.add('fa-eye');
  }
}
