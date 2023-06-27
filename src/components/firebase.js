
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyA_bPMGRRvzucfFhR1wOhiNKm2_8m_2j6I",
  authDomain: "disney-clone-32e80.firebaseapp.com",
  projectId: "disney-clone-32e80",
  storageBucket: "disney-clone-32e80.appspot.com",
  messagingSenderId: "1050882919325",
  appId: "1:1050882919325:web:287124a8beed459df83d74"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export {firebase};