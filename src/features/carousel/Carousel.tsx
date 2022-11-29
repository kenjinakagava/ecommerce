import { Navigation, Keyboard, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/a11y";
import "swiper/css/pagination";
import styled from "styled-components";
import CarouselItem from "./CarouselItem";
import ProductsAPIResponse from "../products/TypesProduct";

const StyledCarousel = styled(Swiper)`
  --swiper-theme-color: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 110px);
  .swiper-wrapper {
    align-items: center;
  }
`;

const CarouselSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
`;

const Carousel = (props: ProductsAPIResponse) => {
  return (
    <StyledCarousel
      modules={[Navigation, Keyboard, A11y]}
      spaceBetween={50}
      slidesPerView={1}
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
          <CarouselSlide key={data.id}>
            <CarouselItem
              title={data.title}
              cover={data.cover}
              shortDescription={data.shortDescription}
              paymentLink={data.paymentLink}
            />
          </CarouselSlide>
        ) : null
      )}
    </StyledCarousel>
  );
};

export default Carousel;
