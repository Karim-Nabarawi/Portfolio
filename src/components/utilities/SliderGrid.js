import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/grid/grid.min.css";
import "swiper/modules/free-mode/free-mode.min.css";
import "swiper/modules/pagination/pagination.min.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

import styled from "styled-components";

export default function SliderFreeMode({ children }) {
  const sliderSettings = {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    pagination: { clickable: true },
    modules: [FreeMode, Pagination],
    breakpoints: {
      600: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
    grabCursor: true,
    parallax: true,
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("ff", children[0]);
    setData(children);
  }, [children]);
  return (
    <SliderFreeModeContainer className="SliderWrapper">
      <Swiper {...sliderSettings}>
        {data && data.map((child, index) => <SwiperSlide key={index}>{child}</SwiperSlide>)}
      </Swiper>
    </SliderFreeModeContainer>
  );
}

const SliderFreeModeContainer = styled.div`
  .swiper {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    height: 100px;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-pagination {
    bottom: 0px;
  }
`;
