const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  try {
    if (email && password) {

      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('request successful');
      document.location.replace('/members');
      // await fetch('/members');
      // if (response.ok) {
      //   // If successful, redirect the browser to the profile page
      // } else {
      //   alert(response.statusText);
      // }
    }
  } catch (error) {
    console.log(error);
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

var loginForm = document.querySelector('.login-form');
// var signupForm = document.querySelector('.signup-form');

loginForm.addEventListener('submit', loginFormHandler);

// signupForm.addEventListener('submit', signupFormHandler);
