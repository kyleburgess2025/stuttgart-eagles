import { Card, Row, Col } from "antd";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "antd/dist/antd.css";
import "../pages/Pages.css";
import "./Gallery.css";

const photos = [
  {
    original: "/assets/whole_team_blue.jpg",
  },
  {
    original: "/assets/waving_flag.jpg",
  },
  {
    original: "/assets/ballin.jpg",
  },
  {
    original: "/assets/coaching-min.jpg",
  },
  {
    original: "/assets/happiness.jpg",
  },
  {
    original: "/assets/huddle_cropped.jpg",
  },
  {
    original: "/assets/mascot.jpg",
  },
  {
    original: "/assets/more_coaching.jpg",
  },
  {
    original: "/assets/stuttgart_eagles.jpg",
  },
  {
    original: "/assets/teamwork.jpg",
  },
  {
    original: "/assets/very_bright.jpg",
  },
];

class MyGallery extends React.Component {
  render() {
    return (
      <div className="gallery">
        <ImageGallery items={photos} />
      </div>
    );
  }
}

export default MyGallery;
