import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from '../components/SectionTitle'
import Testimony from "./Testimony";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "", background: "" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "", background: "" }}
      onClick={onClick}
    />
  );
}

function AdaptiveHeight() {
  const settings = {
    className: "max-w-5xl mx-auto",
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div>
      <SectionTitle text={'Clients and Reviews'}/>
      <div className="slider-container px-3 py-10">
    <Slider {...settings}>
      <div className="py-2">
        <Testimony />
      </div>
      <div className="py-2">
        <Testimony />
      </div>
      <div className="py-2">
        <Testimony />
      </div>
      <div className="py-2">
        <Testimony />
      </div>
      <div className="py-2">
        <Testimony />
      </div>
      <div className="py-2">
        <Testimony />
      </div>
    </Slider>
  </div>
    </div>


  );
}

export default AdaptiveHeight;
