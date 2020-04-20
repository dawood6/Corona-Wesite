import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from './images/1.png' 
import slider2 from './images/2.png'
import slider3 from './images/3.png'
import slider4 from './images/4.png'
import slider5 from './images/5.png'
import slider6 from './images/6.png'
import './Slider.css'

export default class SimpleSlider extends React.Component {


  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      centerMode: true,
      centerPadding: 0
    };
    return (
      <Slider {...settings} style={{width: 1300, height: 300, textAlign: 'center',}}  >
        <div >
        <img src={slider1}/>
        </div>
        <div >
        <img src={slider2} />
        </div>
        <div >
        <img src={slider3} />
        </div>
        <div >
        <img src={slider4} />
        </div>
        <div >
        <img src={slider5} />
        </div>
        <div >
        <img src={slider6} />
        </div>
      </Slider>
    );
  }
}