import React, {Component} from "react";
import Slider from "react-slick";
import globalStyles from "../styles";
import {slickSettings} from "../data";

class Clothing extends Component {
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
        <h3 style={globalStyles.navigation}>Custom Clothing</h3>

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
        <div><img src="../slideshow/clothing/shirts/flower-shirt.jpg"/></div>
        <div><img src="../slideshow/clothing/shirts/kbert-shirt.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats01.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats02.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats03.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats04.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats05.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats06.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats07.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats08.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats09.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats10.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats11.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats12.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats13.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats14.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats15.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats16.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats17.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats18.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats19.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats20.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats21.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats22.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats23.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats24.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats25.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats26.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats27.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats28.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats29.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats30.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats31.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats32.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats33.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats34.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats35.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats36.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats37.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats38.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats39.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats40.jpg"/></div>
        <div><img src="../slideshow/clothing/hats/Hats41.jpg"/></div>
      </Slider>
    );
  }
}


export default Clothing;

