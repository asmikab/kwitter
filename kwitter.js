function login(){

   name_var=document.getElementById("name").value;
   localStorage.setItem("name",name_var);
   
   window.location="kwitter_room.html";
   


}