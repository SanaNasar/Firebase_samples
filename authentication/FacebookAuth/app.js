// Facebook Authentication
var provider = new firebase.auth.FacebookAuthProvider();

function facebookSignin() {
  window.alert("clicked!");
   firebase.auth().signInWithPopup(provider)
   
   .then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
    
      console.log(token);
      console.log(user);
   }).catch(function(error) {
      // console.log(error.code);
      console.log(error.message);
   });
}
// Signout function
function facebookSignout() {
   firebase.auth().signOut()
   
   .then(function() {
      console.log('Signout successful!');
   }, function(error) {
      console.log('Signout failed');
   });
}