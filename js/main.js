/* Validate Phone */
function validatePhoneNumber(phone_str) {
  var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return re.test(phone_str);
}

/* highlight errors */
function highlightErrors(inputField, errorMessage) {
  inputField.parentElement.appendChild(document.createElement('div')).className = "error-message";
  inputField.parentElement.querySelector('.error-message').innerHTML = errorMessage;
}

/* reset errors */
function resetErrors() {
  const elements = document.getElementsByClassName("error-message");
  while(elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);
  }
}

/* function check phone */
function checkPhone() {
  /* input phone */
  var telField = document.getElementById("t-number");
  if (telField.value === "") {
    var errorMessage = "Inserisci un numero di telefono";
    highlightErrors (telField, errorMessage);
    return false;
  } else if (!validatePhoneNumber(telField.value)) {
    console.log("telField false");
    var errorMessage = "Il telefono deve contenere 10 cifre numeriche";
    highlightErrors (telField, errorMessage);
    return false;
  } else {
    populateModal(telField.value);
    return true;
  }
}

/* function check Privacy */
function checkPrivacy() {
var privacyCheck = document.getElementById("privacy-check");
if (!privacyCheck.checked) {
  var errorMessage = "Accetta la privacy";
  highlightErrors (privacyCheck, errorMessage);
  return false;
} else {
  return true;
}
}

/* check form on submit */
const form = document.getElementById('number-form');
form.addEventListener("submit", function validate(evt){
  evt.preventDefault();
  resetErrors ();
  checkPhone();
  checkPrivacy();
  if (checkPhone() && checkPrivacy()) {
    // open Modal //
    modalPhone.style.display = "block";
    // form submit //
    console.log("Success! Call submit form function.")
    /* form.submit() */
  }
});

/* Modal */
var modalPhone = document.getElementById("thankModal");
// close modal function //
var closeModal = document.getElementsByClassName("close")[0];
closeModal.onclick = function() {
  modalPhone.style.display = "none";
}
// Close modal by clicking anywhere outside it
window.onclick = function(event) {
  if (event.target == modalPhone) {
    modalPhone.style.display = "none";
  }
}

/* Populate modal Function */
function populateModal(validPhone) {
  document.getElementById("submittedNumber").innerHTML = validPhone;
};