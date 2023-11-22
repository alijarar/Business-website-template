import React, { Component } from "react";
import SwiperSlider, { SwiperSlide } from "./swiper";

class HeroSliderOne extends Component {
  render() {
    const params = {
      slidesPerView: 1,
      loop: true,
      navigation: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
    };

    let data = [
      {
        bgImg: "slider-3.jpg",
        sliderTitle: "Empower Your Projects",
        sliderSubtitle:
          "Unleash your creativity and drive success with our comprehensive project management tools",
        btnLink: "contact-us",
      },
      {
        bgImg: "slider-2.jpg",
        sliderTitle: "Collaborate Seamlessly",
        sliderSubtitle:
          "Join forces with our intuitive project management platform to streamline communication and boost productivity.",
        btnLink: "contact-us",
      },
      {
        bgImg: "slider-1.jpg",
        sliderTitle: "Innovate, Organize, Succeed",
        sliderSubtitle:
          " Innovate your projects, organize your tasks, and achieve unparalleled success",
        btnLink: "contact-us",
      },
    ];

    let DataList = data.map((val, i) => {
      return (
        <SwiperSlide key={i}>
          <div
            className="hero-slider__single-item"
            style={{ backgroundImage: `url(assets/img/slider/${val.bgImg})` }}
          >
            <div className="hero-slider__content-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="hero-slider__content">
                      <h2 className="hero-slider__title">{val.sliderTitle}</h2>
                      <p className="hero-slider__text">{val.sliderSubtitle}</p>
                      <a
                        className="hero-slider__btn"
                        href={`/${val.btnLink}`}
                      >
                        {" "}
                        GET START
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    });

    return (
      <div>
        {/*====================  hero slider area ====================*/}
        <div className="hero-alider-area">
          <SwiperSlider options={params}>{DataList}</SwiperSlider>
        </div>
        {/*====================  End of hero slider area  ====================*/}
      </div>
    );
  }
}

export default HeroSliderOne;
