import React, {Component} from "react";
import Slider from "react-slick";
import globalStyles from "../styles";
import {slickSettings} from "../data";


class VectorArt extends Component {
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
        <h3 style={globalStyles.navigation}>Vector Art (SVG)</h3>
        <h4>Band and Brand Logos, Corporate Design, and other Scalable Vector Graphics</h4>

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
        <div><img src="../slideshow/vectors/Vectors26.jpg"/></div>
        <div><img src="../slideshow/vectors/Vectors27.jpg"/></div>
        <div><img src="../slideshow/vectors/Vectors28.jpg"/></div>
        <div><img src="../slideshow/vectors/Vectors29.jpg"/></div>
        <div><img src="../slideshow/vectors/Vectors30.jpg"/></div>
        <div><img src="../slideshow/vectors/Vectors31.jpg"/></div>
        <div><img src="../slideshow/vectors/Vectors32.jpg"/></div>
        <div><img src="../slideshow/vectors/Vectors33.jpg"/></div>
      </Slider>
    );
  }
}


export default VectorArt;

