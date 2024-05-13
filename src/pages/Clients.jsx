import React from 'react'
import SectionTitle from '../components/SectionTitle'
import Testimony from '../components/Testimony'
import Slider from "react-slick";


function Clients() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <section >
 
        <div className='slider-contanier'>
        <Slider {...settings}>
          <Testimony />
          <Testimony />
          <Testimony />
          <Testimony />
        </Slider>
        </div>
    </section>
  )
}

export default Clients
