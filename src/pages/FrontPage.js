import "antd/dist/antd.css";
import "./FrontPage.css";
import "boxicons";
import CardItems from "../components/CardItems";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Col, Row } from "antd";
// todo: add links, add calendar, add footer, add logo to top

let API_KEY = process.env.REACT_APP_API_KEY;
let CALENDAR_ID = process.env.REACT_APP_CALENDAR_ID;

//adds 'loaded' classname to a element when website loaded
window.onload = function () {
  document.body.className += "loaded";
};

const FrontPage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${new Date().toISOString()}&showDeleted=false&singleEvents=true&maxResults=10&orderBy=startTime`
    )
      .then((response) => response.json())
      .then((data) => setEvents(data.items.slice(0, 15)));
  }, []);

  function fixDate(date) {
    let d = new Date(date);
    let time = d.toLocaleTimeString();
    return `${d.toLocaleDateString()} \n ${
      time.substr(0, time.lastIndexOf(":")) +
      time.substr(time.lastIndexOf(" "), time.length)
    }`;
  }

  function fixTime(date) {
    let d = new Date(date);
    let time = d.toLocaleTimeString();
    return `${
      time.substr(0, time.lastIndexOf(":")) +
      time.substr(time.lastIndexOf(" "), time.length)
    }`;
  }

  console.log(events);

  return (
    <div className="front-page main">
      <div className="leftbanner">
        <img src="/assets/Eagles_Beach_Banner.jpg" alt="Beach banner" />
      </div>
      <div className="rightbanner">
        <img src="/assets/Eagles_Beach_Banner.jpg" alt="Beach banner" />
      </div>
      <div className="front-page-inner">
        <Header />
        <div className="front-page-wrapper">
          <div className="title_screen">
            <img
              className="full_logo"
              src="/assets/Full_logo_cropped.jpg"
              alt="Logo"
            />
            <div className="title">
              <div className="banner"></div>
              <div class="title-text">
                <h3>Demanding Excellence in Everything We Do</h3>
              </div>
            </div>
          </div>
          <div className="Border">
            <div className="border_box"></div>
          </div>
          <div class="bodyParagraph">
            <h1 class="hidden">What We Do</h1>
            <br></br>
            <img className="photo-collage" src="/assets/photo_collage.webp" />
            <p class="hidden">
              The Stuttgart Eagles Basketball Club (SEBC) and Cheer Team is made
              up of Department of Defense dependents and local youth within the
              Stuttgart, Germany community. We are going into our eleventh
              season in 2023-2024 as an organization. We operate as a non-profit
              organization with 100% volunteers. SEBC travels locally and
              throughout Europe dominating tournaments during basketball season
              and competing against over 30 International Clubs annually. We
              represent the USA in a positive manner, both athletically and in
              sportsmanship. SEBC bridges a gap in the overseas military
              community for school-age children who are not afforded the
              experience of competitive Amateur Athletic Union (AAU) and middle
              school sports during their adolescent years due to their parents
              serving our Nation abroad. Our cheer program offers the
              opportunity to learn cheer skills, dance, tumbling and stunting!
              In addition to basketball and cheer, we require our players
              maintain a high grade point average and have no disciplinary
              problems. Our goal is to not only give our kids a fighting chance
              athletically with their stateside counterparts, but also to build
              kids with character.{" "}
            </p>
          </div>
          <div className="bodyParagraph">
            <h1 class="hidden">Get Involved</h1>
          </div>
          <div className="cardgrid">
            <div class="cards">
              <CardItems />
            </div>
          </div>
          <br></br>
          <br></br>
          <div id="eventsList">
            <div className="bodyParagraph">
              <h2>Upcoming Events</h2>
              <p>{events.length == 0 ? "No current upcoming events." : ""}</p>
            </div>
            <ul class="eventsList">
              {events.map((event) => (
                <li
                  key={event.id}
                  class="event"
                  style={{ whiteSpace: "pre-line" }}
                >
                  <p class="date">
                    {fixDate(event.start.dateTime)} -{" "}
                    {fixTime(event.end.dateTime)}
                  </p>
                  <div class="info">
                    <h3>{event.summary}</h3>
                    {event.location && <p>{event.location}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bodyParagraph">
            <h2>Gallery</h2>
          </div>
          <Gallery />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
