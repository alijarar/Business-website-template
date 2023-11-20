/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperSlider = forwardRef(({ options, children, navClass }, ref) => {
  // Extracting modules from options or providing an empty array
  const modules = options?.modules !== undefined ? options.modules : [];

  // Generating classes for previous and next navigation buttons
  const prevClass = `prev-${navClass || "swiper-nav"}`;
  const nextClass = `next-${navClass || "swiper-nav"}`;

  // Setting default slider options and merging with provided options
  const sliderOptions = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: false,
    autoplay: {
      delay: 5500,
      disableOnInteraction: true,
    },
    watchSlidesProgress: true,
    autoHeight: true,
    breakpoints: {},
    ...options,
    modules: [Navigation, Pagination, A11y, Autoplay, ...modules],
    navigation: options?.navigation
      ? {
          prevEl: `.${prevClass}`,
          nextEl: `.${nextClass}`,
        }
      : false,
    pagination: options?.pagination
      ? {
          clickable: true,
        }
      : false,
  };

  return (
    <div className="swiper-wrap" ref={ref}>
      {/* Swiper component with provided options */}
      <Swiper {...sliderOptions}>{children}</Swiper>

      {/* Navigation buttons conditionally rendered based on options */}
      {sliderOptions.navigation && (
        <>
          <button
            type="button"
            className={`ht-swiper-button-next ht-swiper-button-nav d-none d-xl-block ${prevClass}`}
          >
            <i className="ion-ios-arrow-forward" />
          </button>
          <button
            type="button"
            className={`ht-swiper-button-prev ht-swiper-button-nav d-none d-xl-block ${nextClass}`}
          >
            <i className="ion-ios-arrow-left" />
          </button>
        </>
      )}
    </div>
  );
});

// Exporting SwiperSlide for convenience
export { SwiperSlide };

// Exporting the main SwiperSlider component
export default SwiperSlider;
