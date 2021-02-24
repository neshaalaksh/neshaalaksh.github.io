// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDZ6EZ_u6IE4QQqpmnwTOmz8kZzGHQbsQs",
  authDomain: "mywebsite-4e5fd.firebaseapp.com",
  databaseURL: "https://mywebsite-4e5fd-default-rtdb.firebaseio.com",
  projectId: "mywebsite-4e5fd",
  storageBucket: "mywebsite-4e5fd.appspot.com",
  messagingSenderId: "502492448645",
  appId: "1:502492448645:web:18ec332175ae243874a6ec"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
n=1
// Reference message collection
var db=firebase.database().ref('User'+n+'/')



document.getElementById('Contact').addEventListener('submit',submitForm);

// Submit form

function submitForm(e){
  e.preventDefault();

  // Get values
  var name=getInputVal('Name');
  var email=getInputVal('Email');
  var msg=getInputVal('Msg');

  saveMsg(name,email,msg);

  console.log('done')
  
}

//Function to get form  values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save Messages to firebase
function saveMsg(name,email,msg){
  var msgRef=db.push();
  msgRef.set({
    Name:name,
    Emailid:email,
    Message:msg
  })
}