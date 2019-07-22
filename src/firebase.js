import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyC84Lsl2RW1_GqNc2oGOPjdlXld4cFnEP4",
  authDomain: "jfdd12-ninjacode-app.firebaseapp.com",
  databaseURL: "https://jfdd12-ninjacode-app.firebaseio.com",
  projectId: "jfdd12-ninjacode-app",
  storageBucket: "",
  messagingSenderId: "1029976228214",
  appId: "1:1029976228214:web:8e7049bbbafd4e34"
};

export default firebase.initializeApp(firebaseConfig);
