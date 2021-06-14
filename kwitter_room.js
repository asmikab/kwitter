  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyAoPdLVGTYzbNbS_XVymDpNww9oVJH2k0Y",
      authDomain: "kwitter-1534a.firebaseapp.com",
      databaseURL: "https://kwitter-1534a-default-rtdb.firebaseio.com",
      projectId: "kwitter-1534a",
      storageBucket: "kwitter-1534a.appspot.com",
      messagingSenderId: "331544737767",
      appId: "1:331544737767:web:eb1027e1fce72bc9fdef42"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


var getname =localStorage.getItem("name");

document.getElementById("welcome").innerHTML="Welcome "+ getname+".";

function addroom(){

     var roomname=document.getElementById("roominput").value;
     firebase.database().ref("/").child(roomname).update({
           purpose:"roomadded"
     });
     
     localStorage.setItem("room",roomname);
     window.location="room.html"


}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       var room_list="<div id="+Room_names+" onclick='nextpage(this.id)'> "+Room_names+"</div> <hr>"; 
       document.getElementById("output").innerHTML+=room_list;
      });
});
}
getData();

function nextpage(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}


function logout(){
      localStorage.removeItem("name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}