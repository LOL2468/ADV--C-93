
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDs62qvZfE7CCwJxCeY8MT1VbZzIdBmjkM",
      authDomain: "class-test-f114a.firebaseapp.com",
      databaseURL: "https://class-test-f114a-default-rtdb.firebaseio.com",
      projectId: "class-test-f114a",
      storageBucket: "class-test-f114a.appspot.com",
      messagingSenderId: "48166347112",
      appId: "1:48166347112:web:4a6b4ca13e868779a1b6dd"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
