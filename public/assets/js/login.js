/* eslint-disable no-unused-vars */
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

// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   const firstname = document.querySelector('#first_name-input').value.trim();
//   const lastname = document.querySelector('#last-name-input').value.trim();
//   const email = document.querySelector('#email-input').value.trim();
//   const password = document.querySelector('#password-input').value.trim();

//   if (firstname && lastname && email && password) {
//     const response = await fetch('/api/users', {
//       method: 'POST',
//       body: JSON.stringify({ name, email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/login');
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

var loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', loginFormHandler);

// var signupForm = document.querySelector('.signin-form');
// loginForm.addEventListener('submit', FormHandler);
