import styled from "styled-components";
import { ProductsAPIResponse } from "../Interface";
import CTAButton from "./Buttons/CTA/CTAButton";
import { Link } from "react-router-dom";

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
  text-align: center;
  @media (max-width: 300px) {
    font-size: 21px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  @media (min-width: 768px) {
    height: 240px;
  }
`;

const ProductDisplay = styled.div`
  max-width: 250px;
  @media (max-width: 300px) {
    max-width: 200px;
  }
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
  @media (min-width: 768px);
`;

const Product = (props: ProductsAPIResponse) => {
  console.log(props.paymentLink);
  return (
    <ProductWrapper>
      <ProductDisplay>
        <ProductImage src={props.cover} alt={props.title} />
      </ProductDisplay>
      <ProductDisplayDescription>
        <ProductTitle>{props.title}</ProductTitle>
        <p>{props.shortDescription}</p>
        <CTAButtonGroup>
          <StyledCTAButton
            as={"a"}
            href={props.paymentLink !== undefined ? props.paymentLink : ""}
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

export default Product;
