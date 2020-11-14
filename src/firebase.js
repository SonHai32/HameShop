import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcpAfVpzOj7XRO-e6GR6vKj4iGPNK-U-0",
  authDomain: "hameshop-1ef1f.firebaseapp.com",
  databaseURL: "https://hameshop-1ef1f.firebaseio.com",
  projectId: "hameshop-1ef1f",
  storageBucket: "hameshop-1ef1f.appspot.com",
  messagingSenderId: "255452358987",
  appId: "1:255452358987:web:4d68ed1efb88b55f0020ce",
  measurementId: "G-57RMC4FS2D"
};
firebase.initializeApp(firebaseConfig)
export default  firebase