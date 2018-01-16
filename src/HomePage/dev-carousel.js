import React from 'react';
import Slider from 'react-slick';
import DevCard from './dev-card';

const DevCarousel = (props) => {
  const settings = {
    dots: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 9999, settings: { slidesToShow: 3 } }],

  };
  return (
    <Slider {...settings}>
      { props.devs.map((item, index) => (
        <div>
          <DevCard
            name={item.name}
            description={item.description}
            avatar={item.avatar}
            bgimg={item.bgimg}
            key={index}
          />
        </div>)) }
    </Slider>
  );
};

export default DevCarousel;
