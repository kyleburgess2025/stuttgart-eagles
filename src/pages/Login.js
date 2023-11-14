import "./Pages.css";
import "./Join.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCmgxYRoRiEeyqXqg6dtHclMCUF9mYCng8",
  authDomain: "stuttgart-eagles.firebaseapp.com",
  projectId: "stuttgart-eagles",
  storageBucket: "stuttgart-eagles.appspot.com",
  messagingSenderId: "106460913629",
  appId: "1:106460913629:web:c2b113dad9635666196034",
  measurementId: "G-9T7HTK0N51",
};

initializeApp(firebaseConfig);
const auth = getAuth();

const Login = () => {
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  //   const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if (user) {
    return <Navigate to="/userhome" />;
  }
  return (
    <div className="main">
      <div className="leftbanner">
        <img src="/assets/eagles-banner.png" alt="Beach banner" />
      </div>
      <div className="rightbanner">
        <img src="/assets/cheer-banner.png" alt="Beach banner" />
      </div>
      <Header />
      <div className="wrapper">
        <div className="bodyParagraph">
          <h1>Log In</h1>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => signInWithEmailAndPassword(email, password)}>
            Sign In
          </button>
          {error && <p>{error.message}</p>}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
