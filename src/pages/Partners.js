import "./Pages.css";
import "./Partners.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const partners = [
  {
    name: "The Robinson Advocacy Group",
    url: "https://www.therobinsonadvocacygroup.com/gregory-robinson",
    description: (
      <>
        <p>
          At The Robinson Advocacy Group people get the skilled legal advice and
          representation they're looking for when they need an attorney.
        </p>

        <p>
          We have a thorough understanding of Small Business and Estate
          Planning. With exceptional legal skills, practical solutions, and
          professional integrity, The Robinson Advocacy Group works hard to help
          you get the best possible results in the following practice areas:
        </p>
        <ul className="noBullets">
          <li>Small Business</li>
          <li>Estate Planning</li>
        </ul>
        <p>
          The Robinson Advocacy Group prides itself on developing real
          connections with clients. We put complex legal issues into language
          that you can easily understand. We work hard to help our clients in
          every situation. We treat clients with respect and spend time to make
          sure that they fully understand the process they are going through.
        </p>

        <p>
          When you need counsel on a major, life-impacting decision, you deserve
          an attorney who will listen to you, thoroughly examine the facts, and
          provide the best possible solution for you and your future.
        </p>
      </>
    ),
    image: "/assets/Robinson-logo.png",
  },
  {
    name: "Stuttgart Community Spouses' Club",
    url: "https://www.stuttgartspousesclub.org",
    description: (
      <>
        <p>
          The SCSC knows how important connection and community building is, not
          only for newcomers to the area but also for established residents.
          With monthly events and exclusive activities we can help you break the
          ice, create lasting friendships, and come together on shared interests
          with a diverse group of USAG Stuttgart community members. Together we
          can positively impact our military and local community in a big way!
        </p>
      </>
    ),
    image: "/assets/spouses-club.webp",
  },
  {
    name: "Jake Lacey",
    url: "https://jakelacey.smugmug.com/Stuttgart-Eagles",
    description: (
      <>
        <p>
          Focusing on sports photography, Jake Lacey has significant experience
          photographing NCAA, NFL, and NBA sporting events. He seeks to create
          magazine-worthy photos capturing special memories for active families.
          Portrait and event sessions are available on request.
        </p>
      </>
    ),
    image: "/assets/jake-logo.png",
  },
  {
    name: "Change Plus Plus",
    url: "https://www.changeplusplus.org",
    description: (
      <>
        <p>
          The Vanderbilt student organization strives to provide nonprofits with
          the technical resources and software capabilities to help the
          community they serve in innovative ways. If you are a non-profit with
          a tech idea that will help you serve your community, you are in the
          right place.
        </p>
      </>
    ),
    image: "/assets/ChangePlusPlus.png",
  },
];

const Partners = () => {
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
          <h1>Partners</h1>
          <p>We are proud to be partnered with the following organizations:</p>
          <br></br>
          {partners.map((partner) => (
            <div className="partner">
              <a href={partner.url} className="partnerImgContainer">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="partnerImg"
                />
              </a>
              <div className="partner-info">
                <a href={partner.url} className="partner-name">
                  <h2 className="partner-name">{partner.name}</h2>
                </a>
                {partner.description}
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Partners;
