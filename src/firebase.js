import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBZ4VmN3yiIT328A5xm70kQf6PUnzmRKyw",
  authDomain: "disney-clone-3057b.firebaseapp.com",
  projectId: "disney-clone-3057b",
  storageBucket: "disney-clone-3057b.appspot.com",
  messagingSenderId: "1043737039696",
  appId: "1:1043737039696:web:f361869551c5823bc65255"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;
