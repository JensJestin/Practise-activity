var firebaseConfig = {
    apiKey: "AIzaSyA-5ULYoa9HDFCQ19GT_IL6RHXKl9ZzgR8",
    authDomain: "kwitter-a02b6.firebaseapp.com",
    databaseURL: "https://kwitter-a02b6-default-rtdb.firebaseio.com",
    projectId: "kwitter-a02b6",
    storageBucket: "kwitter-a02b6.appspot.com",
    messagingSenderId: "415917857283",
    appId: "1:415917857283:web:93b28635431c66df9c4c36"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }

