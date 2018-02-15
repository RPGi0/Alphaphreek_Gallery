import React, {Component} from "react";
import Slider from "react-slick";
import globalStyles from "../styles";
import {slickSettings} from '../data';


class TraditionalMedia extends Component {
  constructor(props, context) {
    super(props, context);

    this.changeHandler = this.changeHandler.bind(this);
    this.changeSlider = this.changeSlider.bind(this);
    this.slideToStart = this.slideToStart.bind(this);

    this.state = {
      slideIndex: 0,
      updateCount: 0,
    };
  }

  componentDidMount() {
  }

  slideToStart() {
    this.sliderWrapper.slider.slickGoTo(0);
  }

  changeHandler(e) {
    this.sliderWrapper.slider.slickGoTo(e.target.value);
  }

  changeSlider(){
    this.setState({
      slideIndex: this.sliderWrapper.slider.innerSlider.state.currentSlide
    });
  }

  changeUpdateCount() {
    this.setState({
      updateCount: this.state.updateCount + 1
    });
  }

  render() {
    return (
      <div>
        <h3 style={globalStyles.navigation}>Traditional Media</h3>
        <h4>Ink, Pencil and Oils on Paper</h4>

        <div className="slick-container">
          <SliderWrapper
            ref={sliderWrapper => this.sliderWrapper = sliderWrapper}
            beforeChange={this.changeUpdateCount.bind(this)}
            afterChange={this.changeSlider.bind(this)}
            slideIndex={this.state.slideIndex}
            updateCount={this.state.updateCount}
          />
        </div>
      </div>
    );
  }
}

class SliderWrapper extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.updateCount === nextProps.updateCount;
  }

  render() {
    return (
      <Slider ref={slider => this.slider = slider} {...slickSettings}>
        <div><img src="../slideshow/traditional/Traditional02.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional03.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional04.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional05.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional06.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional07.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional08.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional09.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional10.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional12.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional13.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional14.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional15.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional16.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional17.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional18.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional19.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional20.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional22.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional23.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional24.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional25.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional26.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional27.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional28.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional30.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional31.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional32.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional33.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional34.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional35.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional37.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional38.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional39.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional40.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional41.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional42.jpg"/></div>
        <div><img src="../slideshow/traditional/Traditional43.jpg"/></div>
      </Slider>
    );
  }
}


export default TraditionalMedia;

