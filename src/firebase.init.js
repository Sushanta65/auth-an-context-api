
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtRh6g67Ag2uzqfM_lOW5d7IeA_egaZOM",
  authDomain: "fir-with-context-api-6e5af.firebaseapp.com",
  projectId: "fir-with-context-api-6e5af",
  storageBucket: "fir-with-context-api-6e5af.firebasestorage.app",
  messagingSenderId: "977668570571",
  appId: "1:977668570571:web:ab3f817dc58a14c4060a4e"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
