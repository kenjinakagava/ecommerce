import Product from "./Product";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";

{
  // maybe separate some of these styled components so this one doesn't get overloaded, the functionality on this one should be to render the product
}

const StyledSwiper = styled(Swiper)`
  --swiper-theme-color: #222;
`;

{
  /*
https://webaim.org/resources/contrastchecker/
passes Graphical Objects and User Interface Components test 
in both backgrounsd (#000 and #F7FAFC)
*/
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

const ProductsList = () => {
  return (
    <StyledSwiper
      modules={[Navigation, Keyboard, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
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
    </StyledSwiper>
  );
};

export default ProductsList;
