// Initializing Vars
const form = document.getElementById("form")
const name = document.querySelectorAll(".input-text")[0]
const subject = document.querySelectorAll(".input-text")[1]
const email = document.querySelectorAll(".input-text")[2]
const phone = document.querySelectorAll(".input-text")[3]
const message = document.querySelectorAll(".input-text")[4]



// Event Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault()

  checkRequired([name, subject, email, phone, message])
})

// Functions

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input === email) {
      if (input.value.trim() === '') {
        showError(input, `${getFieldName(input)} is required`)
      } else {
        checkEmail(email)
      }
    } else if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`)
    } else {
      checkLength(input, 3, 35)
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// Get fieldname
function getFieldName(input) {
  return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

// Show input error message
function showError(input, message) {
  if (input.classList.contains('success')) {
    input.classList.remove('success')
  }
  input.classList.add('error')
  input.value = ''
  input.setAttribute('Placeholder', message)
}

// Show success outline
function showSuccess(input) {
  if (input.classList.contains('error')) {
    input.classList.remove('error')
  }
  input.classList.add('success')
}
