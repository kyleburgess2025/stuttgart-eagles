import "./Pages.css";
import "./UserHome.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UserHome = () => {
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
          <h1>User Home Page</h1>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default UserHome;
