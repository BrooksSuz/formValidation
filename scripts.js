const inputs = document.querySelectorAll('input');
const submit = document.querySelector('button');

const validateEmail = () => {
  const email = inputs[0];
  email.setCustomValidity('');
  email.classList.remove('error');
  email.classList.remove('valid');

  if (email.checkValidity()) {
    email.classList.add('valid');
  }

  if (!email.checkValidity()) {
    email.classList.add('error');
    email.setCustomValidity('Enter an appropriate email address.');
    email.reportValidity();
  }
}

inputs[0].addEventListener('input', validateEmail);

submit.addEventListener('click', (e) => {
  e.preventDefault(); 
})