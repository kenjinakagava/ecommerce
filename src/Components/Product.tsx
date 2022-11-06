import styled from "styled-components";
import CTARouterLink from "./Buttons/CTA/CTARouterLink";
import { ProductsAPIResponse } from "../Interface";

const ProductWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const ProductTitle = styled.h2`
  text-align: center;
  @media (max-width: 300px) {
    font-size: 21px;
  }
`;

const ProductShortDescription = styled.p``;

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
  justify-content: space-around;
  @media (min-width: 768px) {
    gap: 1rem;
    justify-content: unset;
  }
`;

const Product = (props: ProductsAPIResponse) => {
  return (
    <ProductWrapper>
      <ProductDisplay>
        <ProductImage src={props.cover} alt={props.title} />
      </ProductDisplay>
      <ProductDisplayDescription>
        <ProductTitle>{props.title}</ProductTitle>
        <ProductShortDescription>
          {props.shortDescription}
        </ProductShortDescription>
        <CTAButtonGroup>
          <CTARouterLink
            to={props.paymentLink !== undefined ? props.paymentLink : ""}
            content="Buy Now"
          />
          <CTARouterLink
            to={`/${props.title?.replaceAll(" ", "-")}`}
            content="More Info"
          />
        </CTAButtonGroup>
      </ProductDisplayDescription>
    </ProductWrapper>
  );
};

export default Product;
