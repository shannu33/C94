//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyCdEfFIDwhFsPyeOWTy-VmblIRgMjLvLPE",
    authDomain: "kwitter-app-7e04b.firebaseapp.com",
    databaseURL: "https://kwitter-app-7e04b-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-7e04b",
    storageBucket: "kwitter-app-7e04b.appspot.com",
    messagingSenderId: "851693682077",
    appId: "1:851693682077:web:81daf0d46c16a65f094374"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();

