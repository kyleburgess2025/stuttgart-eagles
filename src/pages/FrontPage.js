import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Affix, Menu, Card, Row, Col } from "antd";
import "antd/dist/antd.css";
import "./FrontPage.css";
import "boxicons";
// todo: add links, add calendar, add footer, add logo to top

const items = [
  { label: <a href="/">Home</a>, key: "home" },
  { label: <a href="/donate">Donate</a>, key: "donate" }, // remember to pass the key prop
  { label: <a href="/volunteer">Volunteer</a>, key: "volunteer" }, // which is required
  {
    label: <a href="/board">Meet The Board</a>,
    key: "board",
  },
];

const FrontPage = () => {
  return (
    <div>
      <Affix>
        <Menu items={items} mode="horizontal" />
      </Affix>
      <div class="title">
        <div class="title-text">
          <h1>Stuttgart Eagles</h1>
          <h3>Demanding Excellence in Everything We Do</h3>
        </div>
      </div>
      <div class="aboutus">
        <h2>What We Do</h2>
        <p>
          The Stuttgart Eagles are a competitive travel basketball team based in
          Stuttgart, Germany that provides community to deployed families.{" "}
        </p>
      </div>
      <div class="cards">
        <Row gutter={16}>
          <Col span={8}>
            <NavLink to="#calendar">
              <Card>
                <h3>Play</h3>
                <box-icon name="basketball"></box-icon>
                <p>
                  See upcoming events! Support us at games or sign up for
                  tryouts.
                </p>
              </Card>
            </NavLink>
          </Col>
          <Col span={8}>
            <NavLink to="/volunteer">
              <Card>
                <h3>Volunteer</h3>
                <box-icon name="user"></box-icon>
                <p>
                  Join our team! We are looking for coaches, board members, and
                  fundraisers.
                </p>
              </Card>
            </NavLink>
          </Col>
          <Col span={8}>
            <NavLink to="/donate">
              <Card>
                <h3>Donate</h3>
                <box-icon name="dollar"></box-icon>
                <p>
                  Your donations fund tournaments, training materials, and
                  projects.
                </p>
              </Card>
            </NavLink>
          </Col>
        </Row>
      </div>
      <div id="calendar"></div>
    </div>
  );
};

export default FrontPage;
