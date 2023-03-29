import {useState} from "react";
import {NavLink} from "react-router-dom";
import {Card, Row, Col} from "antd";
import { useMediaQuery } from 'react-responsive';
import "antd/dist/antd.css";
import "../pages/Pages.css";
import "../pages/FrontPage.css";
import "boxicons";
// todo: add links, add calendar, add footer, add logo to top

const CardItems = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    const carditems = [
        {
            link: "/board",
            label: "Meet the Board",
            icon: "basketball",
            body: "Meet the dedicated team of volunteers that made all of this possible."
        },
        {
            link: "/volunteer",
            label: "Volunteer",
            icon: "user",
            body: "Join our team! We are looking for coaches, board members, and fundraisers."
        },
        {
            link: "/donate",
            label: "Donate",
            icon: "dollar",
            body: "Your donations fund tournaments, training materials, and projects."
        }
    ];
    return (
        <div class="card">
            <Row gutter={6} id="fancyRow" justify="space-around" align="middle">
                {!isTabletOrMobile && <Col xs={22} sm={20} md={20} lg={8} xl={8} style={{marginBottom: 10}}>
                    <img className="arrow-photo" src="/assets/arrow.png"/></Col>}
                <Col xs={22} sm={20} md={20} lg={11} xl={15} id="secondCol">
                    <Row gutter={8} id="fancyRow" justify="space-around" align="middle">
                        {carditems.map((carditems) =>
                            (
                                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                    <NavLink to={carditems.link}>
                                        <div class="mainCard">
                                            <box-icon name={carditems.icon} type='solid' color="#DB3342"
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
    )
}

export default CardItems;
