import Product from "./Product";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";

{
  // maybe separate some of these styled components so this one doesn't get overloaded, the functionality on this one should be to render the product
}

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
`;

{
  /*
  AltText and Short Description won't be handled by the api
  uppercase "S" refers to an object, lowercase "s" refers to just a string
  */
}

const ProductSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Keyboard, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      keyboard={true}
      navigation={{}}
      onSlideChange={() => console.log("changed slide")}
      onSwiper={() => console.log("swiper")}
      a11y={{
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
      }}
    >
      <StyledSwiperSlide>
        <Product />
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <Product />
      </StyledSwiperSlide>
      <StyledSwiperSlide>
        <Product />
      </StyledSwiperSlide>
    </Swiper>
  );
};

export default ProductSwiper;
