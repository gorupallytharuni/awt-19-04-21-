var firebaseConfig = {
    apiKey: "AIzaSyDe2FmDDBTQ3gMNPkr_qNZW_WUS2DBI2Y4",
    authDomain: "awt-lab-21c37.firebaseapp.com",
    projectId: "awt-lab-21c37",
    storageBucket: "awt-lab-21c37.appspot.com",
    messagingSenderId: "1059969198939",
    appId: "1:1059969198939:web:cdfa4bb3a126aeeabd087e",
    measurementId: "G-T4EKRCDD7R"
  };
  firebase.initializeApp(firebaseConfig);
  var dbRef = firebase.database().ref().child("students");
  
  function insertData(){
        let sname=document.getElementById("sname").value;
        let rollno=document.getElementById("rollno").value;
        dbRef.child(rollno).set({
            sname:sname,
            rollno:rollno
        })
        console.log("student data added");
    }
    function deleteData(){
        var id=window.prompt("Enter the Roll number to be deleted");
        dbRef.child(id).remove()
        console.log("Data deleted");
    }
    function updateData(){
        var id=document.getElementById("rollno").value;
        var newName=document.getElementById("sname").value;
        dbRef.child(id).update({sname:newName})
        console.log("Data Updated")
    }
    function loadData(){
        console.log("Reading Data...");
        dbRef.on("value",(snap)=>{
            snap.forEach((data)=>{
                console.log(data.val())
                
    })
        })
}