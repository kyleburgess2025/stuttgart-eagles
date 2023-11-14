import "./Pages.css";
import "./Join.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Join = () => {
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
          <h1>Ready to join the SEBC and Cheer Family? </h1>
          <h3>
            The goal of the club is to recognize talented athletes and help them
            shape and develop their talent in the desired direction, as well as
            to provide a healthy and constructive opportunity for those who want
            to play basketball and cheer. If you recognize a strong athletic
            spirit in yourself we invite you to tryout for the Eagles 2024
            season. Please fill out the form below to register for tryouts.
          </h3>
          <iframe
            title="survey"
            src="https://docs.google.com/forms/d/e/1FAIpQLSc_YLk_I7fWO3GuNzMVuxslnxQ-WCWWkeZIkwRm08Sg5ggkTA/viewform"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            className="registration-form"
          >
            Loading...
          </iframe>
          <h2>Cheer Tryouts</h2>
          <p>
            Tryouts will be held the November 19th from 1-4pm at Patch Middle
            School. Please fill out the registration form above prior to
            tryouts.
          </p>
          <img
            src="/assets/cheer-transparent.png"
            alt="cheer"
            id="cheer-transparent-img"
          />
          <h2>Basketball Tryouts</h2>
          <p>Tryouts will be held at the following times:</p>
          <ul className="no-bullets tryout-times">
            <li>U10- NOV 18, 10-11:30AM</li>
            <li>U12- NOV 18, 12-1:30PM</li>
            <li>U14G- NOV 18, 2-4PM</li>
            <li>U14B- NOV 14, 6-8PM</li>
            <li>U16G- NOV 15, 6-8PM</li>
            <li>U16B- NOV 16, 6-8PM</li>
            <li>U19B- NOV 19, 12-2PM</li>
          </ul>
          <p>Please fill out the registration form above prior to tryouts.</p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Join;
