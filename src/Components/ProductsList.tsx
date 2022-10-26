import Product from "./Product";
import styled from "styled-components";
import useFetch from "../Hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";

const StyledSwiper = styled(Swiper)`
  --swiper-theme-color: #222;
  .swiper-wrapper {
    align-items: center;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
`;

const ProductsList = () => {
  const { data, isLoading, error } = useFetch("http://localhost:3001/albums");
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
      {data !== null
        ? data.map((data) => (
            <StyledSwiperSlide key={data.id}>
              <Product
                productCover={data.image}
                productTitle={data.title}
                productShortDescription={data.shortDescription}
              ></Product>
            </StyledSwiperSlide>
          ))
        : null}
    </StyledSwiper>
  );
};

export default ProductsList;
