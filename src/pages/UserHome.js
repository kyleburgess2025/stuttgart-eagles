import "./Pages.css";
import "./UserHome.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Navigate } from "react-router-dom";

import { signOut, getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
const auth = getAuth();

const UserHome = () => {
  const [user] = useAuthState(auth);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="main">
      <div className="leftbanner">
        <img src="/assets/eagles-banner.webp" alt="Beach banner" />
      </div>
      <div className="rightbanner">
        <img src="/assets/cheer-banner.webp" alt="Beach banner" />
      </div>
      <Header />
      <div className="wrapper">
        <div className="bodyParagraph">
          <h1>User Home Page</h1>
          <button onClick={() => signOut(auth)}>Sign Out</button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default UserHome;
