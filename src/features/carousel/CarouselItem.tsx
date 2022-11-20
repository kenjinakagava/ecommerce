import styled from "styled-components";
import { ProductsAPIResponse } from "../../types";
import CTAButton from "../ui/CTAButton";
import { Link } from "react-router-dom";
import AlbumCover from "../products/AlbumCover";
import ProductTitle from "../products/StylesProductTitle";
import ProductShortDescription from "../products/StylesProductShortDescription";

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
  }
`;

const SwiperItemProductTitle = styled(ProductTitle)`
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const ProductImageContainer = styled.div`
  max-width: 250px;
  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

const ProductDisplayDescription = styled.div`
  max-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 320px) {
    max-width: 250px;
  }
`;

const CTAButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 320px) {
    justify-content: space-around;
  }
  @media (min-width: 768px) {
    gap: 1rem;
    justify-content: unset;
  }
`;

const StyledCTAButton = styled(CTAButton)`
  @media (min-width: 320px) {
    width: 45%;
  }
`;

const ProductSwiperItem = (props: ProductsAPIResponse) => {
  const smallCover = props.cover?.[0];
  const mediumCover = props.cover?.[1];

  return (
    <ProductWrapper>
      <ProductImageContainer>
        <AlbumCover
          src={mediumCover}
          srcSet={`${smallCover} 250w, ${mediumCover} 400w`}
          sizes="(min-width: 768px) 400px, 250px"
          alt={props.title}
          width={400}
          height={395}
        />
      </ProductImageContainer>
      <ProductDisplayDescription>
        <SwiperItemProductTitle>{props.title}</SwiperItemProductTitle>
        <ProductShortDescription>
          {props.shortDescription}
        </ProductShortDescription>
        <CTAButtonGroup>
          <StyledCTAButton
            as={"a"}
            href={props.paymentLink}
            target="_blank"
            rel="noreferrer"
            aria-label={`Buy the album ${props.title}`}
          >
            Buy Now
          </StyledCTAButton>
          <StyledCTAButton
            as={Link}
            to={`/${props.title?.replaceAll(" ", "-")}`}
            aria-label={`Learn more about the album ${props.title}`}
          >
            View Details
          </StyledCTAButton>
        </CTAButtonGroup>
      </ProductDisplayDescription>
    </ProductWrapper>
  );
};

export default ProductSwiperItem;
