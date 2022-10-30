import Product from "./Product";
import styled from "styled-components";
import { Response } from "../Interface";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/a11y";

type Props = {
  data: Array<Response> | null;
};

const SwiperWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 101px);
`;

const StyledSwiper = styled(Swiper)`
  --swiper-theme-color: #222;
  height: calc(100vh - 110px);
  .swiper-wrapper {
    align-items: center;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
`;

const ProductsList = (props: Props) => {
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
        {props.data?.map((data) => (
          <StyledSwiperSlide key={data.id}>
            <Product
              productCover={data.image}
              productTitle={data.title}
              productShortDescription={data.shortDescription}
            ></Product>
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </SwiperWrapper>
  );
};

export default ProductsList;
