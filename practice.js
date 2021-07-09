
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCRzjUAFAr6_Mfn12HOmp9AT7EAe0tqOPQ",
    authDomain: "practice-29f49.firebaseapp.com",
    databaseURL: "https://practice-29f49-default-rtdb.firebaseio.com",
    projectId: "practice-29f49",
    storageBucket: "practice-29f49.appspot.com",
    messagingSenderId: "281651035411",
    appId: "1:281651035411:web:6cbd77f8f07a9b8c79aee6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
function addUser(){
    user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"
});

}