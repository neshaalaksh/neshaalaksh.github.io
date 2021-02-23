import firebase from 'firebase'
import dict from './app'
  // Your web app's Firebase configuration
var firebaseConfig = {
    aapiKey: "AIzaSyDZ6EZ_u6IE4QQqpmnwTOmz8kZzGHQbsQs",
    authDomain: "mywebsite-4e5fd.firebaseapp.com",
    projectId: "mywebsite-4e5fd",
    storageBucket: "mywebsite-4e5fd.appspot.com",
    messagingSenderId: "502492448645",
    appId: "1:502492448645:web:18ec332175ae243874a6ec"
  };
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
db=firebase.database()
var userInfo=db.ref(f1+'/')
userInfo.set(dict)


