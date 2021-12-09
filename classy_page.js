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
  room_name=localStorage.getItem("room_name");
  
  
  function getData() { 
    firebase.database().ref("/"+room_name).on('value', function(snapshot){ 
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) { 
    childKey  = childSnapshot.key;
    childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
  
    console.log(firebase_message_id);
    console.log(message_data);
    name=message_data['name'];
    message=message_data['message'];
    like=message_data['like'];
    name_with_tag="<h4>"+name+"</h4>";
    message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
    like_button="<button class='btn btn-success' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
  
    row=name_with_tag+message_with_tag+like_button+span_with_tag;
    document.getElementById("output").innerHTML+=row;
    
    } });  }); }
  getData();
  
  function updateLike(message_id){
    console.log("clicked on like button - "+message_id);
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    updated_likes=Number(likes)+1;
    console.log(updated_likes);
  
    firebase.database().ref(room_name).child(message_id).update({
          like : updated_likes
    });
  }
  
  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name, 
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
    
  }
  
  function logOut(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("email");
    localStorage.removeItem("room_name");
    window.location="index.html";
  
  }

  function back(){
    
    window.location="classy_room.html";
  
  }

  function takephoto(){
    window.location="selfie.html";
  }