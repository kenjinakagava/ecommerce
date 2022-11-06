import styled from "styled-components";
import Container from "../Styles/Container";
import { ProductsAPIResponse } from "../Interface/index";
import CTAButton from "../Components/Buttons/CTA/CTAButton";

const ProductContainer = styled(Container)`
  display: block;
  padding: 1rem;
  min-height: calc(100vh - 110px);
`;

{
  // here i'm changing the display to block so the image isn't resized by flexbox when changing the main content height
}

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

{
  // 1024 so the layout doesn't break on tablets
}

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProductDescription = styled.p`
  white-space: pre-line;
`;

const LargeCTAButton = styled(CTAButton)`
  width: 100%;
`;

const ProductDetails = (props: ProductsAPIResponse) => {
  return (
    <ProductContainer>
      <ProductWrapper>
        <img src={props.cover} alt={props.title} />
        <Details>
          <h2>{props.title}</h2>
          <h3>{`$${props.price}`}</h3>
          <ProductDescription>{props.description}</ProductDescription>
          <LargeCTAButton
            as={"a"}
            href={props.paymentLink}
            target="_blank"
            rel="noreferrer"
          >
            Buy Now
          </LargeCTAButton>
        </Details>
      </ProductWrapper>
    </ProductContainer>
  );
};

export default ProductDetails;
