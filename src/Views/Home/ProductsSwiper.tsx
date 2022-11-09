import ProductSwiperItem from "./ProductSwiperItem";
import styled from "styled-components";
import { ProductsAPIResponse } from "../../Interface";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, A11y, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/a11y";
import "swiper/css/pagination";

const StyledSwiper = styled(Swiper)`
  --swiper-theme-color: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 110px);
  .swiper-wrapper {
    align-items: center;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
`;

const ProductsSwiper = (props: ProductsAPIResponse) => {
  return (
    <StyledSwiper
      modules={[Navigation, Keyboard, A11y, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      keyboard={true}
      grabCursor={true}
      navigation={{}}
      pagination={true}
      a11y={{
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
      }}
    >
      {props.data?.map((data) =>
        data.featured ? (
          <StyledSwiperSlide key={data.id}>
            <ProductSwiperItem
              title={data.title}
              cover={data.cover}
              shortDescription={data.shortDescription}
              paymentLink={data.paymentLink}
            ></ProductSwiperItem>
          </StyledSwiperSlide>
        ) : null
      )}
    </StyledSwiper>
  );
};

export default ProductsSwiper;
