import React, {Component} from "react";
import Slider from "react-slick";
import globalStyles from "../styles";
import {slickSettings} from "../data";

class VectorArt extends Component {
  render() {
    const settings = {
      centerMode: true,
      centerPadding: '250px',
      focusOnSelect: true,
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h3 style={globalStyles.navigation}>Vector Art</h3>

        <div className="slick-container">
          <Slider {...slickSettings}>
            <div><img src="../slideshow/vectors/Vectors01.jpg"/></div>
            <div><img src="../slideshow/vectors/Vectors02.jpg"/></div>
            <div><img src="../slideshow/vectors/Vectors03.jpg"/></div>
            <div><img src="../slideshow/vectors/Vectors04.jpg"/></div>
            <div><img src="../slideshow/vectors/Vectors05.jpg"/></div>
            <div><img src="../slideshow/vectors/Vectors06.jpg"/></div>
            <div><img src="../slideshow/vectors/Vectors07.jpg"/></div>
            <div><img src="../slideshow/vectors/Vectors08.jpg"/></div>
            <div><img src="../slideshow/vectors/Vectors09.jpg"/></div>
            <div><img src="../slideshow/vectors/Vectors10.jpg"/></div>
            <div><img src="../slideshow/vectors/Vectors11.jpg"/></div>
            <div><img src="../slideshow/vectors/Vectors12.jpg"/></div>
            <div><img src="../slideshow/vectors/Vectors13.jpg"/></div>
            <div><img src="../slideshow/vectors/Vectors14.jpg"/></div>
            <div><img src="../slideshow/vectors/Vectors15.jpg"/></div>
            <div><img src="../slideshow/vectors/Vectors16.jpg"/></div>
            <div><img src="../slideshow/vectors/Vectors17.jpg"/></div>
            <div><img src="../slideshow/vectors/Vectors18.jpg"/></div>
            <div><img src="../slideshow/vectors/Vectors19.jpg"/></div>
            <div><img src="../slideshow/vectors/Vectors20.jpg"/></div>
            <div><img src="../slideshow/vectors/Vectors21.jpg"/></div>
            <div><img src="../slideshow/vectors/Vectors22.jpg"/></div>
            <div><img src="../slideshow/vectors/Vectors23.jpg"/></div>
            <div><img src="../slideshow/vectors/Vectors24.jpg"/></div>
            <div><img src="../slideshow/vectors/Vectors25.jpg"/></div>
          </Slider>
        </div>
      </div>
    );
  }
}

  export default VectorArt;

