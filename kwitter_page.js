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


    roomnamekey=localStorage.getItem("room_name");
    usernamekey=localStorage.getItem("name");

    function send(){

      var message=document.getElementById("msg").value;
      firebase.database().ref(roomnamekey).push({
            name:usernamekey,
            message:message,
            likes:0
           
      });

     document.getElementById("msg").value="";

    }
    
 
     




function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         
//Start code
         console.log(firebase_message_id);
         console.log(message_data);

         namestorage=message_data['name'];
         messagestorage=message_data['message'];
         likestorage=message_data['likes'];

         displayname="<h4>"+namestorage+" <img class='user_tick' src='tick.png'></h4>";
         messagedisplay="<h4 class='message_h4'>"+messagestorage+"</h4>";
         buttondisplay="<button id="+firebase_message_id+" onclick='likes(this.id)' value="+likestorage+">Likes"+likestorage+"<span class='glyphicon glyphicon-thumbs-up'></span></button> <hr>"

         document.getElementById("output").innerHTML=displayname+messagedisplay+buttondisplay;

//End code
      } });  }); }
getData();



function likes(msgid){

       buttonid=msgid;
       numberoflikes=document.getElementById(buttonid).value;
       updatedlikes=Number(numberoflikes)+1;
       firebase.database().ref(roomnamekey).child(msgid).update({
             likes:updatedlikes
       });

      
}








function logout(){
      localStorage.removeItem("name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}