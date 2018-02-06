import React, {Component} from "react";
import Slider from "react-slick";
import globalStyles from "../styles";

class TraditionalMedia extends Component {
  render() {
    const settings = {
      centerMode: true,
      // centerPadding: '250px',
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
        <h1 style={globalStyles.navigation}>Traditional Media</h1>

        <div>
          <Slider {...settings}>
            <div><img src="../slideshow/traditional/Traditional01.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional02.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional03.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional04.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional05.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional06.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional07.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional08.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional09.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional10.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional11.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional12.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional13.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional14.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional15.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional16.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional17.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional18.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional19.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional20.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional21.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional22.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional23.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional24.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional25.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional26.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional27.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional28.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional29.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional30.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional31.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional32.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional33.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional34.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional35.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional36.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional37.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional38.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional39.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional40.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional41.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional42.jpg"/></div>
            <div><img src="../slideshow/traditional/Traditional43.jpg"/></div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default TraditionalMedia;

