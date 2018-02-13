import React, {Component} from "react";
import Slider from "react-slick";
import globalStyles from "../styles";
import {slickSettings} from "../data";

class Paintings extends Component {
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
        <h3 style={globalStyles.navigation}>Paintings on Canvas and Wood</h3>
        <h4>Oil, Acrylic, Airbrush and Blacklight-reactive Original Art</h4>

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
        <div><img src="../slideshow/paintings/Canvas01.jpg"/></div>
        <div><img src="../slideshow/paintings/Canvas02.jpg"/></div>
        <div><img src="../slideshow/paintings/Canvas03.jpg"/></div>
        <div><img src="../slideshow/paintings/Canvas04.jpg"/></div>
        <div><img src="../slideshow/paintings/Canvas05.jpg"/></div>
        <div><img src="../slideshow/paintings/Canvas06.jpg"/></div>
        <div><img src="../slideshow/paintings/Canvas07.jpg"/></div>
        <div><img src="../slideshow/paintings/Canvas08.jpg"/></div>
        <div><img src="../slideshow/paintings/Canvas09.jpg"/></div>
        <div><img src="../slideshow/paintings/Canvas10.jpg"/></div>
        <div><img src="../slideshow/paintings/Canvas11.jpg"/></div>
        <div><img src="../slideshow/paintings/Canvas12.jpg"/></div>
        <div><img src="../slideshow/paintings/Canvas13.jpg"/></div>
        <div><img src="../slideshow/paintings/Canvas14.jpg"/></div>
        <div><img src="../slideshow/paintings/Canvas15.jpg"/></div>
        <div><img src="../slideshow/paintings/Canvas16.jpg"/></div>
        <div><img src="../slideshow/paintings/Canvas17.jpg"/></div>
        <div><img src="../slideshow/paintings/Canvas18.jpg"/></div>
        <div><img src="../slideshow/paintings/Canvas19.jpg"/></div>
        <div><img src="../slideshow/paintings/Canvas20.jpg"/></div>
        <div><img src="../slideshow/paintings/Canvas21.jpg"/></div>
        <div><img src="../slideshow/paintings/BlackLight01.jpg"/></div>
        <div><img src="../slideshow/paintings/BlackLight02.jpg"/></div>
        <div><img src="../slideshow/paintings/BlackLight03.jpg"/></div>
        <div><img src="../slideshow/paintings/BlackLight04.jpg"/></div>
        <div><img src="../slideshow/paintings/BlackLight05.jpg"/></div>
        <div><img src="../slideshow/paintings/BlackLight06.jpg"/></div>
        <div><img src="../slideshow/paintings/BlackLight07.jpg"/></div>
        <div><img src="../slideshow/paintings/BlackLight08.jpg"/></div>
        <div><img src="../slideshow/paintings/BlackLight09.jpg"/></div>
        <div><img src="../slideshow/paintings/BlackLight10.jpg"/></div>
        <div><img src="../slideshow/paintings/BlackLight11.jpg"/></div>
        <div><img src="../slideshow/paintings/BlackLight12.jpg"/></div>
        <div><img src="../slideshow/paintings/BlackLight13.jpg"/></div>
        <div><img src="../slideshow/paintings/BlackLight14.jpg"/></div>
        <div><img src="../slideshow/paintings/BlackLight15.jpg"/></div>
        <div><img src="../slideshow/paintings/BlackLight16.jpg"/></div>
        <div><img src="../slideshow/paintings/BlackLight17.jpg"/></div>
        <div><img src="../slideshow/paintings/BlackLight18.jpg"/></div>
        <div><img src="../slideshow/paintings/BlackLight19.jpg"/></div>
        <div><img src="../slideshow/paintings/AirBrush01.jpg"/></div>
        <div><img src="../slideshow/paintings/AirBrush02.jpg"/></div>
        <div><img src="../slideshow/paintings/AirBrush03.jpg"/></div>
        <div><img src="../slideshow/paintings/AirBrush04.jpg"/></div>
        <div><img src="../slideshow/paintings/AirBrush05.jpg"/></div>
        <div><img src="../slideshow/paintings/AirBrush06.jpg"/></div>
        <div><img src="../slideshow/paintings/AirBrush07.jpg"/></div>
        <div><img src="../slideshow/paintings/AirBrush08.jpg"/></div>
        <div><img src="../slideshow/paintings/AirBrush09.jpg"/></div>
        <div><img src="../slideshow/paintings/AirBrush10.jpg"/></div>
        <div><img src="../slideshow/paintings/AirBrush11.jpg"/></div>
        <div><img src="../slideshow/paintings/AirBrush12.jpg"/></div>
        <div><img src="../slideshow/paintings/Spray01.jpg"/></div>
        <div><img src="../slideshow/paintings/Spray02.jpg"/></div>
        <div><img src="../slideshow/paintings/Spray03.jpg"/></div>
      </Slider>
    );
  }
}

export default Paintings;

