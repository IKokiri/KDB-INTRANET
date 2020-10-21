import firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyCGXvKSjOMgOIi9YQghrvxCqqpPXbsQrHs",
    authDomain: "kuttner-837e5.firebaseapp.com",
    databaseURL: "https://kuttner-837e5.firebaseio.com",
    projectId: "kuttner-837e5",
    storageBucket: "kuttner-837e5.appspot.com",
    messagingSenderId: "943975663887",
    appId: "1:943975663887:web:0b4e9b0972a06fd875967a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase