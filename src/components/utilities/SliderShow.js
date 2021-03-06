import React from "react";

// Import Swiper React components
import SwiperCore, { EffectCoverflow, Parallax, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";
import "swiper/modules/pagination/pagination.min.css";

//Styling and Animation
import styled from "styled-components";
SwiperCore.use([EffectCoverflow, Parallax, Pagination]);

const SliderShow = ({ images, video }) => {
  if (!images && !video) return "";
  const sliderSettings = {
    id: "main",
    tag: "section",
    loop: true,
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: { clickable: true },
    modules: [Pagination],
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
    grabCursor: true,
    parallax: true,
  };
  const slides = images.map((img, index) => (
    <SwiperSlide key={`slide-${index}`} className="swiper-slide">
      {img.data && (
        <div className="content">
          <p className="title" data-swiper-parallax="-30%" data-swiper-parallax-scale=".7">
            Shaun Matthews
          </p>
          <span className="caption" data-swiper-parallax="-20%">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </span>
        </div>
      )}
      <img src={img} alt="website" />
    </SwiperSlide>
  ));

  return (
    <SliderContainer>
      <Swiper {...sliderSettings} className="swiper-container">
        {video && (
          <SwiperSlide className="swiper-slide">
            <iframe
              width="560"
              height="315"
              src={video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </SwiperSlide>
        )}
        {slides}
      </Swiper>
    </SliderContainer>
  );
};
export default SliderShow;

const SliderContainer = styled.div`
  .swiper-container {
    width: 100%;
    /* height: 50vh; */
    transition: opacity 0.6s ease;
  }
  /* @media (max-width: 1023px) {
    .swiper-container {
      height: 60vw;
    }
  } */

  @media (min-width: 600px) {
    .swiper-pagination {
      opacity: 0;
      &:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: transparent;
        top: 0;
        left: 0;
      }
    }
  }
  .swiper-pagination {
    bottom: 0px;
  }

  .swiper-slide {
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px;
    overflow: hidden;
    padding: 20px;
    height: auto;
    img,
    iframe {
      width: 100%;
      border-radius: 20px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      /* -webkit-box-reflect: below 1px linear-gradient(transparent, transparent, #0004); */
    }

    iframe {
      height: 100%;
    }

    .content {
      position: absolute;
      top: 40%;
      left: 0;
      width: 40%;
      padding-left: 5%;
      color: #fff;
      .title {
        font-size: 2.6em;
        font-weight: bold;
        margin-bottom: 30px;
      }
      .caption {
        display: block;
        font-size: 13px;
        line-height: 1.4;
      }
    }
  }
`;
