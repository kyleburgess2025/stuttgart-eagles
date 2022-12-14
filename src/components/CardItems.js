import {useState} from "react";
import {NavLink} from "react-router-dom";
import {Card, Row, Col} from "antd";
import "antd/dist/antd.css";
import "../pages/Pages.css";
import "../pages/FrontPage.css";
import "boxicons";
// todo: add links, add calendar, add footer, add logo to top

const CardItems = () => {
    const [carditems, setcarditems] = useState([
        {
            link: "#calander",
            label: "Play",
            icon: "basketball",
            body: "See upcoming events! Support us at games or sign up for tryouts."
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
    ]);
    return (
        <div class="card">
            <Row gutter={16}>
                {carditems.map((carditems) =>
                    (
                        <Col span={8}>
                            <NavLink to={carditems.link}>
                                <Card>
                                    <h3>{carditems.label}</h3>
                                    <box-icon name={carditems.icon}></box-icon>
                                    <p>{carditems.body}</p>
                                </Card>
                            </NavLink>
                        </Col>
                    ))}
            </Row>
        </div>
    )
}

export default CardItems;
