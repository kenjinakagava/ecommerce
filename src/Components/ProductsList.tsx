import Product from "./Product";
import styled from "styled-components";
import { APIData } from "../Interface";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/a11y";

const SwiperWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 110px);
`;

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

const ProductsList = (props: APIData) => {
  return (
    <SwiperWrapper>
      <StyledSwiper
        modules={[Navigation, Keyboard, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        keyboard={true}
        grabCursor={true}
        navigation={{}}
        a11y={{
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
        }}
      >
        {props.data?.map((data) =>
          data.featured ? (
            <StyledSwiperSlide key={data.id}>
              <Product
                productCover={data.image}
                productTitle={data.title}
                productShortDescription={data.shortDescription}
              ></Product>
            </StyledSwiperSlide>
          ) : null
        )}
      </StyledSwiper>
    </SwiperWrapper>
  );
};

export default ProductsList;
