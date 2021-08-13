
import firebase from "firebase";



const firebaseConfig = {
  apiKey: "AIzaSyAwoRX0yrRM1Q8xOoSPtI_7kQ4FLB9BJWY",
  authDomain: "netflix-clone-6297e.firebaseapp.com",
  projectId: "netflix-clone-6297e",
  storageBucket: "netflix-clone-6297e.appspot.com",
  messagingSenderId: "1092127551479",
  appId: "1:1092127551479:web:bc60bd09881680a00fc8f2"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;