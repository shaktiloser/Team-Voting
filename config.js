import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyApoa5_nMX2-6Qx6fJcARLnd8iojV1gmkU",
        authDomain: "team-voting-64c51.firebaseapp.com",
        projectId: "team-voting-64c51",
        storageBucket: "team-voting-64c51.appspot.com",
        messagingSenderId: "321891657390",
        appId: "1:321891657390:web:1ab229b346e737c8132f3f"
      };
    

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();