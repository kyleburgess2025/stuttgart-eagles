import { Affix } from "antd";
import "antd/dist/antd.css";
import "../pages/Pages.css";
import "../pages/FrontPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <Affix>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="footer">
        <h>Contact us: </h>
        <p>
          <a href="https://www.facebook.com/stuttgarteaglesbasketball">
            <FontAwesomeIcon icon={faFacebook} />
          </a>{" "}
          &emsp;
          <a href="https://www.instagram.com/stuttgarteagles/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>{" "}
          &emsp;
          <a href="mailto:stuttgarteaglesbasketball@googlemail.com">
            <FontAwesomeIcon icon={faEnvelope} />{" "}
          </a>{" "}
          <br></br>
          -Music is credited to T. Powell-
        </p>
      </div>
    </Affix>
  );
};

export default Footer;
