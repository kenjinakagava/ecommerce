import styled from "styled-components";
import { ProductsAPIResponse } from "../../Interface";
import CTAButton from "../../Components/Buttons/CTAButton";
import { Link } from "react-router-dom";
import AlbumCover from "../../Styles/AlbumCover";

const ProductWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ProductTitle = styled.h2`
  font-size: 1.3125rem;
  text-align: center;
  @media (min-width: 300px) {
    font-size: 1.5rem;
  }
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const ProductDisplay = styled.div``;

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
  const bigCover = props.cover?.[2];

  return (
    <ProductWrapper>
      <ProductDisplay>
        <AlbumCover
          src={smallCover}
          srcSet={`${smallCover} 300w, ${mediumCover} 600w, ${bigCover} 1200w`}
          sizes="(min-width: 1024px) 40vw, (min-width: 768px) 25vw, 80vw"
          alt={props.title}
          width={300}
          height={300}
        />
      </ProductDisplay>
      <ProductDisplayDescription>
        <ProductTitle>{props.title}</ProductTitle>
        <p>{props.shortDescription}</p>
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
