import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Card, Row, Col } from "antd";
import { useMediaQuery } from "react-responsive";
import "antd/dist/antd.css";
import "../pages/Pages.css";
import "../pages/FrontPage.css";
import "boxicons";
// todo: add links, add calendar, add footer, add logo to top

const CardItems = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const carditems = [
    {
      link: "/board",
      label: "Meet the Board",
      icon: "basketball",
      body: "Meet our dedicated team of volunteers that made all of this possible.",
      color: "mainCard red",
    },
    {
      link: "/volunteer",
      label: "Volunteer",
      icon: "user",
      body: "Join our team! We are looking for coaches, board members, and fundraisers.",
      color: "mainCard cyan",
    },
    {
      link: "/donate",
      label: "Donate",
      icon: "dollar",
      body: "Your donations fund tournaments, training materials, and projects.",
      color: "mainCard blue",
    },
    {
      link: "/join",
      label: "Join",
      icon: "user-plus",
      body: "Ready to play and cheer for the Eagles? Join our team!",
      color: "mainCard blue",
    },
  ];
  return (
    <div class="card">
      <Row gutter={6} id="fancyRow" justify="space-around" align="middle">
        <Col id="secondCol">
          <Row gutter={25} id="fancyRow" justify="space-around" align="middle">
            {carditems.map((carditems) => (
              <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <NavLink to={carditems.link}>
                  <div class={carditems.color}>
                    <box-icon
                      name={carditems.icon}
                      type="solid"
                      color="#ffffff"
                    ></box-icon>
                    <h3>{carditems.label}</h3>
                    <p>{carditems.body}</p>
                  </div>
                </NavLink>
                <br></br>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CardItems;
