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

const ProductImage = styled.img`
  max-inline-size: 100%;
  block-size: auto;
`;

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
  const smallCover = props.cover?.[0];
  const mediumCover = props.cover?.[1];
  const bigCover = props.cover?.[2];

  return (
    <ProductContainer>
      <ProductWrapper>
        <ProductImage
          src={smallCover}
          srcSet={`${smallCover} 300w, ${mediumCover} 600w, ${bigCover} 1200w`}
          width={600}
          height={600}
          sizes="(min-width: 1024px) 66vw, 80vw"
          alt={props.title}
        />
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
