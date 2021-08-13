
import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyCeiY8VaasxvedIBlEw1Nv0j6vACYI7G7Y",
    authDomain: "netflix-clone-kendevs.firebaseapp.com",
    projectId: "netflix-clone-kendevs",
    storageBucket: "netflix-clone-kendevs.appspot.com",
    messagingSenderId: "571404992105",
    appId: "1:571404992105:web:57c24cc2e8cf4a07a86cf8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;