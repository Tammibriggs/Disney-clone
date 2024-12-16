import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDpBpJpXnAy1Se7dXJ-yslilZDODz57lks",
  authDomain: "disney-clone-bc337.firebaseapp.com",
  projectId: "disney-clone-bc337",
  storageBucket: "disney-clone-bc337.firebasestorage.app",
  messagingSenderId: "123692910583",
  appId: "1:123692910583:web:e000dcaf4d6fa9553e50f2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;
