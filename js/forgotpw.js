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


function resetPassword() {
    /*
    var auth = firebase.auth();
    if (document.getElementById('email').value) {
        auth.sendPasswordResetEmail(document.getElementById('email').value).then(function() {
            toastNotification('Success', 'Instructions for resetting your password has been sent', "success");// Email sent.
        }, function(error) {
            var errorMessage = error.message;
            toastNotification('Error', errorMessage, "danger");
        });
    } else {
        toastNotification('Error', 'Email address is empty.', "danger");
    }

     */
    toastNotification('Success', 'Instructions for resetting your password has been sent', "success");// Email sent.
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
  // [START authstatelistener]
    /*
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
    }

  });
  // [END authstatelistener]

     */
  document.getElementById('reset-password-button').addEventListener('click', resetPassword, false);
}

window.onload = function() {
  initApp();
};