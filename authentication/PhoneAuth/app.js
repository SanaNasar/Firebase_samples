function phoneSignin() {
alert ("clicked");
//recaptcha verifier
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
  'size': 'invisible',
  'callback': function(response) {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  }
});

// Reads the phone number from the user input.
function onSignInSubmit() {
  alert("clicked");
  var phoneNumber = getPhoneNumberFromUserInput();
  function getPhoneNumberFromUserInput() {
    return document.getElementById('phone-number').value;
    }

  // function isPhoneNumberValid() {
  //   var pattern = /^\+[0-9\s\-\(\)]+$/;
  //   var phoneNumber = getPhoneNumberFromUserInput();
  //   return phoneNumber.search(pattern) !== -1;
  // }

  var appVerifier = window.recaptchaVerifier;
  firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
    }).catch(function (error) {
      // Error; SMS not sent
      // ...
      resetRecaptcha();
    });
}

  // reset captcha
  function resetRecaptcha() {

  // Or, if you haven't stored the widget ID:
    return window.recaptchaVerifier.render().then(function(widgetId) {
    grecaptcha.reset(widgetId);
  });
}
}
  //  * This resets the recaptcha widget.
   
  // function resetRecaptcha() {
  //   return window.recaptchaVerifier.render().then(function(widgetId) {
  //     grecaptcha.reset(widgetId);
  //   });
  // }
  // /**
  //  * Updates the Sign-in button state depending on ReCaptcha and form values state.
  //  */
  // function updateSignInButtonUI() {
  //   document.getElementById('sign-in-button').disabled = !isPhoneNumberValid() || !!window.signingIn;
  // }