// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTu1iE18Lc-L5tXkgjvkCjD9CdkpxLa1g",
  authDomain: "project-97-d1a51.firebaseapp.com",
  databaseURL: "https://project-97-d1a51-default-rtdb.firebaseio.com",
  projectId: "project-97-d1a51",
  storageBucket: "project-97-d1a51.appspot.com",
  messagingSenderId: "609555192628",
  appId: "1:609555192628:web:7b9b8cc1ccd64e60bb2361"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
 email=localStorage.getItem("email");
document.getElementById("details").innerHTML="Welcome "+user_name+"! Your email is registered as "+email+"!";

function addRoom() { 
  room_name = document.getElementById("room_name").value; 
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
 localStorage.setItem("room_name", room_name); 
 window.location = "classy_page.html"; 
}

function getData() { 
  firebase.database().ref("/").on('value', function(snapshot) 
  { document.getElementById("output").innerHTML = ""; 
  snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
     Room_names = childKey; console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row; });
     }); 
    } getData();


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="classy_page.html";
}

function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("email");
      localStorage.removeItem("room_name");
      window.location="index.html";

}