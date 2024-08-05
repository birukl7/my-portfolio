import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

function ProjectSlide({ pics }) {
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    pics.forEach((pic, index) => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prevState => ({ ...prevState, [index]: true }));
      };
      img.src = pic;
    });
  }, [pics]);

  const settings = {
    className: "max-w-5xl mx-auto",
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div>
      <div className="slider-container px-3 py-10">
        <Slider {...settings}>
          {pics.map((pic, index) => (
            <div key={index} className="p-5">
              {!loadedImages[index] ? (
                <Skeleton className='w-full h-[500px] rounded-[10px]' />
              ) : (
                <div style={{ backgroundImage: `url(${pic})` }} className='w-full h-[500px] rounded-[10px] outline outline-1 sm:bg-top bg-left bg-cover'></div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProjectSlide;
