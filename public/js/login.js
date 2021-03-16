function toastNotification(title, text, type) {

    new PNotify({
        title: title,
        text: text,
        shadow: true,
        opacity: "1",
        type: type,
        hide: false,
        buttons: {
            closer_hover: false,
            sticker_hover: false
        }
    });
}

/**
 * Function called when clicking Sign in button
 *
 */
function signInUser() {

    if (document.getElementById('email').value && document.getElementById('password').value) {
      window.location = 'confirmation.html';
      /*
      firebase.auth().signInWithEmailAndPassword(document.getElementById('email').value,
            document.getElementById('password').value).then(function(result) {
          window.location = 'confirmation.html';
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
                toastNotification('Error', errorMessage, "danger");

        });

       */
    } else {
        toastNotification('Error', 'e-mail address and/or password is empty.', "danger");
    }
}

/**
 * Function called when clicking the Login/Logout Google button.
 */
function toggleGoogleSignIn() {
  /*
  if (!firebase.auth().currentUser) {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    provider.addScope('email');
    firebase.auth().signInWithRedirect(provider);
  } else {
    firebase.auth().signOut();
  }

   */
  document.getElementById('quickstart-google-sign-in').disabled = true;
  window.location = 'confirmation.html';
}

/**
 * Function called when clicking the Login/Logout Facebook button.
 */
function toggleFacebookSignIn() {
  /*
    if (!firebase.auth().currentUser) {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithRedirect(provider);
    } else {
        firebase.auth().signOut();
    }

   */
    document.getElementById('quickstart-facebook-sign-in').disabled = true;
  window.location = 'confirmation.html';
}

/**
 * Function called when clicking the Login/Logout Twitter button.
 */
function toggleTwitterSignIn() {
  /*
    if (!firebase.auth().currentUser) {
        var provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth().signInWithRedirect(provider);
    } else {
        firebase.auth().signOut();
    }
    */

    document.getElementById('quickstart-twitter-sign-in').disabled = true;
  window.location = 'confirmation.html';
}

/**
 * initApp handles setting up the Firebase context and registering
 * callbacks for the auth status.
 *
 * The core initialization is in firebase.App - this is the glue class
 * which stores configuration. We provide an app name here to allow
 * distinguishing multiple app instances.
 *
 * This method also registers a listener with firebase.auth().onAuthStateChanged.
 * This listener is called when the user is signed in or out, and that
 * is where we update the UI.
 *
 * When signed in, we also authenticate to the Firebase Realtime Database.
 */
function initApp() {
  /*
  // Result from Redirect auth flow.
  // [START getidptoken]
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // [START_EXCLUDE]
    } else {
      // [END_EXCLUDE]
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // [START_EXCLUDE]
    if (errorCode === 'auth/account-exists-with-different-credential') {
        toastNotification('Error', 'You have already signed up with a different auth provider for that email.', "danger");
      // If you are using multiple auth providers on your app you should handle linking
      // the user's accounts here.
    } else {
        toastNotification('Error', errorMessage, "danger");
    }
    // [END_EXCLUDE]
  });
  // [END getidptoken]

   */
  /*
  // Listening for auth state changes.
  // [START authstatelistener]
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

        var accountsRef = firebase.database().ref('accounts/' + user.uid);
        // Make sure we remove all previous listeners.
        accountsRef.off();

        accountsRef.once('value').then(function(snapshot) {
            if (snapshot.exists()) {
                window.location = 'confirmation.html';
            } else {
                window.location = 'register.html';
            }
        }).catch(function(error){
            return toastNotification('Error', 'Error on connecting to database', "danger");
        });

    } else {
      // User is signed out.
      // [START_EXCLUDE]
      document.getElementById('email-section').style.display = 'block';
      document.getElementById('password-section').style.display = 'block';
      // [END_EXCLUDE]
    }
    // [START_EXCLUDE]
    document.getElementById('quickstart-google-sign-in').disabled = false;
    // [END_EXCLUDE]
  });
  // [END authstatelistener]
  */
  document.getElementById('quickstart-google-sign-in').addEventListener('click', toggleGoogleSignIn, false);
  document.getElementById('quickstart-facebook-sign-in').addEventListener('click', toggleFacebookSignIn, false);
  document.getElementById('quickstart-twitter-sign-in').addEventListener('click', toggleTwitterSignIn, false);
  document.getElementById('login-button').addEventListener('click', signInUser, false);
}
window.onload = function() {
  initApp();
};