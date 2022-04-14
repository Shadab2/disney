import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBnEk1jKsSrFv2bsxE0waElDrebmFTczrk",
  authDomain: "disney-clone-81447.firebaseapp.com",
  projectId: "disney-clone-81447",
  storageBucket: "disney-clone-81447.appspot.com",
  messagingSenderId: "939428721930",
  appId: "1:939428721930:web:a85111e6fbea8d77d7f6f3",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
