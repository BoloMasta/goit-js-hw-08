const form = document.querySelector('form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const type = () => {
  let result = { email: input.value, message: textarea.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(result));
};

// lodash.throttle
var throttle = require('lodash.throttle');
var throttled = throttle(type, 500, { trailing: false });

form.addEventListener('input', event => throttled());

try {
  var data = JSON.parse(localStorage.getItem('feedback-form-state'));
  input.value = data.email;
  textarea.value = data.message;
} catch (error) {}

// SUBMIT
form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
  input.value = '';
  textarea.value = '';
});
