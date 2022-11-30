import styled from "styled-components";
import ProductsAPIResponse from "../products/TypesProduct";
import CTA from "../ui/styles/CTA";
import { Link } from "react-router-dom";
import AlbumCover from "../products/StylesAlbumCover";
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
  max-width: 230px;
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

const StyledCTAButton = styled.button`
  ${CTA}
  @media (min-width: 320px) {
    width: 45%;
  }
`;

const CarouselItem = (props: ProductsAPIResponse) => {
  return (
    <ProductWrapper>
      <ProductImageContainer>
        <AlbumCover
          src={props.cover?.medium}
          srcSet={`${props.cover?.small} 250w, ${props.cover?.medium} 400w`}
          sizes="(min-width: 768px) 400px, 250px"
          alt={props.title}
          width={"400"}
          height={"395"}
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
            target={"_blank"}
            rel="noreferrer"
            aria-label={`Buy the album ${props.title}`}
            // aria-label here so the client knows what album he's buying
          >
            Add to Cart
          </StyledCTAButton>
          <StyledCTAButton
            as={Link}
            to={`/${props.title?.replaceAll(" ", "-")}`}
            aria-label={`View details about the album ${props.title}`}
            // aria-label here so the client knows which product he's going to see the details of
          >
            View Details
          </StyledCTAButton>
        </CTAButtonGroup>
      </ProductDisplayDescription>
    </ProductWrapper>
  );
};

export default CarouselItem;
