// Returns true if user is signed-in. Otherwise false and displays a message.
function checkSignedInWithMessage() {
  // Return true if the user is signed in Firebase
  /*if (firebase.auth().currentUser) {
    return true;
  }*/
  return true;
};

/**
 * Function called when clicking the logout link.
 */
function singOut() {
    // firebase.auth().signOut();
    window.location = 'login.html';
}


function updateMap(countryCode) {
    var map = AmCharts.makeChart( "mapdiv", {
        type: "map",
        projection:"winkel3",
        dataProvider: {
            map: "worldLow",
            backgroundZoomsToTop: true,
            getAreasFromMap: true,
            linkToObject: countryCode,
            "allLabels": [
                {
                    "text": "Countries Space program Budget",
                    "bold": true,
                    "x": 20,
                    "y": 20
                }
            ],
            areas: [
                {
                    id: "US",
                    color: "#880000"
                },
                {
                    id: "CN",
                    color: "#880000"
                },
                {
                    id: "RU",
                    color: "#880000"
                },
                {
                    id: "IN",
                    color: "#9B2200"
                }, {
                    id: "JP",
                    color: "#9B2200"
                },
                {
                    id: "FR",
                    color: "#9B2200"
                },
                {
                    id: "DE",
                    color: "#9B2200"
                },
                {
                    id: "IT",
                    color: "#9B2200"
                },
                {
                    id: "KR",
                    color: "#C36600"
                },
                {
                    id: "CA",
                    color: "#C36600"
                },
                {
                    id: "GB",
                    color: "#C36600"
                },
                {
                    id: "BE",
                    color: "#C36600"
                },
                {
                    id: "ID",
                    color: "#C36600"
                },
                {
                    id: "CH",
                    color: "#C36600"
                },
                {
                    id: "SE",
                    color: "#C36600"
                },
                {
                    id: "NL",
                    color: "#C36600"
                },
                {
                    id: "TR",
                    color: "#C36600"
                },
                {
                    id: "ES",
                    color: "#C36600"
                },
                {
                    id: "UA",
                    color: "#C36600"
                },
                {
                    id: "AR",
                    color: "#C36600"
                },
                {
                    id: "IR",
                    color: "#C36600"
                },
                {
                    id: "BR",
                    color: "#C36600"
                },
                {
                    id: "NO",
                    color: "#EBAA00"
                },
                {
                    id: "IL",
                    color: "#EBAA00"
                },
                {
                    id: "PL",
                    color: "#EBAA00"
                },
                {
                    id: "ZA",
                    color: "#EBAA00"
                },
                {
                    id: "AT",
                    color: "#EBAA00"
                },
                {
                    id: "AU",
                    color: "#EBAA00"
                },
                {
                    id: "FI",
                    color: "#EBAA00"
                },
                {
                    id: "DK",
                    color: "#EBAA00"
                },
                {
                    id: "PT",
                    color: "#EBAA00"
                },
                {
                    id: "GR",
                    color: "#EBAA00"
                },
                {
                    id: "CZ",
                    color: "#EBAA00"
                },
                {
                    id: "IE",
                    color: "#EBAA00"
                },
                {
                    id: "LU",
                    color: "#EBAA00"
                },
                {
                    id: "HU",
                    color: "#EBAA00"
                },
                {
                    id: "MX",
                    color: "#EBAA00"
                },
                {
                    id: "EE",
                    color: "#EBAA00"
                },
                {
                    id: "SK",
                    color: "#EBAA00"
                },
                {
                    id: "PK",
                    color: "#EBAA00"
                },
                {
                    id: "CL",
                    color: "#EBAA00"
                },
                {
                    id: "NG",
                    color: "#EBAA00"
                },
                {
                    id: "DZ",
                    color: "#EBAA00"
                },
                {
                    id: "KP",
                    color: "#EBAA00"
                },
                {
                    id: "EG",
                    color: "#EBAA00"
                },
                {
                    id: "KZ",
                    color: "#EBAA00"
                },
                {
                    id: "MY",
                    color: "#EBAA00"
                },
                {
                    id: "SA",
                    color: "#EBAA00"
                },
                {
                    id: "TH",
                    color: "#EBAA00"
                },
                {
                    id: "AE",
                    color: "#EBAA00"
                },
                {
                    id: "SI",
                    color: "#EBAA00"
                }
            ]
        },

        areasSettings : {
            autoZoom: true,
            selectedColor: "#3498db"
        },

        zoomControl : {
            "zoomControlEnabled": true,
            "homeButtonEnabled": true
        },

        valueLegend: {
            right: 10,
            minValue: "$0",
            maxValue: "> $10B"
        }
    });
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
  // Listening for auth state changes.
  // [START authstatelistener]
  firebase.auth().onAuthStateChanged(function(user) {
    var account = null;
    if (user) {
        if (user.photoURL) {
            document.getElementById('avatar').src = user.photoURL;
        }
        var accountsRef = firebase.database().ref('accounts/' + user.uid);
        // Make sure we remove all previous listeners.
        accountsRef.off();

        accountsRef.once('value').then(function(snapshot) {
          account = snapshot.val();
          document.getElementById('ceoName').textContent = account.CEO;
          document.getElementById('email').textContent = account.email;
          document.getElementById('country').textContent = account.country;
          updateMap(account.countryCode);
        }).catch(function(error){
          return console.error(error);
        });

    } else {
        window.location = 'login.html';
    }
  });

     */

    document.getElementById('ceoName').textContent = "Elon Musk";
    document.getElementById('email').textContent = "fake-elon@gmail.com";
    document.getElementById('country').textContent = "Spain";
    updateMap("ES");
}
window.onload = function() {
  initApp();
};