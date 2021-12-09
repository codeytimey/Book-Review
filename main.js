function adduser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    email=document.getElementById("email").value;
    localStorage.setItem("email", email);
    window.location="classy_room.html";
    
}
