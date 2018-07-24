
const submitButton = document.querySelector('.submit-button');
const form = document.signupForm;
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let messages;

validateForm = () => {

  // check if name is empty
  if ( form.fullname.value != '') {
    console.log( form.fullname.value );
  } else {
    form.fullname.classList.add('invalid');
  }

  // check if email is empty
  // check if name has weird characters...
  if ( form.email.value != '') {
    if( ! regex.test( form.email.value ) ) {
      console.log('not valid');
    } else {
      console.log( form.email.value );
    }
  } else {
    form.email.classList.add('invalid');
    console.log('Oops! Email is empty');
  }

  
  // check if password is empty
  // check if name has weird characters...
  if ( form.password.value != '') {
    console.log( form.password.value );
  } else {
    form.password.classList.add('invalid');
    console.log('Oops! Password is empty');
  }

  // check if confirm password is empty
  // check if name has weird characters...
  if ( form.confirm_password.value != '') {
    console.log( form.confirm_password.value );
  } else {
    form.confirm_password.classList.add('invalid');
    console.log('Oops! Confirm password is empty');
  }

  // validate country
  if ( form.country.value != '-1' ) {
    console.log( form.country.value );
  } else {
    form.country.classList.add('invalid');
    console.log('Oops! Country is empty');
  }
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  validateForm();
});
