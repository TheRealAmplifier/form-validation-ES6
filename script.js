
const submitButton = document.querySelector('.submit-button');
const form = document.signupForm;


validateForm = () => {

  // check if name is empty
  // check if name has weird characters...
  if ( form.fullname.value != '') {
    console.log( form.fullname.value );
  } else {
    form.fullname.classList.add('invalid');
    console.log('Oops! Name is empty');
    return false;
  }

  // validate country
  if ( form.country.value != '-1' ) {
    console.log( form.country.value );
  } else {
    form.country.classList.add('invalid');
    console.log('Oops! Country is empty');
    return false;
  }
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  validateForm();
});
