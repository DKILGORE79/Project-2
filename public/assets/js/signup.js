$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $('form.signup-form');
  const firstNameInput = $('input#first-name-input');
  const lastNameInput = $('input#last-name-input');
  const emailInput = $('input#email-input');
  const passwordInput = $('input#password-input');

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on('submit', (event) => {
    event.preventDefault();
    const userData = {
      first_name: firstNameInput.val().trim(),
      last_name: lastNameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    if (
      !userData.first_name ||
      !userData.last_name ||
      !userData.email ||
      !userData.password
    ) {
      return;
    }
    function handleLoginErr(err) {
      $('#alert .msg').text(err.responseJSON);
      $('#alert').fadeIn(500);
    }
    // If we have an email and password, run the signUpUser function
    function signUpUser(first_name, last_name, email, password) {
      $.post('/api/users', {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
      })
        .then(() => {
          window.location.replace('/members');
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }

    signUpUser(
      userData.first_name,
      userData.last_name,
      userData.email,
      userData.password
    ),
    firstNameInput.val('');
    lastNameInput.val('');
    emailInput.val('');
    passwordInput.val('');
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
});
