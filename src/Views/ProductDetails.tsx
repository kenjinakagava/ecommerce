import styled from "styled-components";
import Container from "../Styles/Container";
import CTAButton from "../Components/Buttons/CTA/CTAButton";

type Props = {
  title: string;
  description: string;
  cover: string;
  price: number | undefined;
};

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

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

const LargeAddToCartButton = styled(CTAButton)`
  width: 100%;
`;

{
  // 1024 so the layout doesn't break on tablets
}

const ProductImage = styled.img``;

const ProductTitle = styled.h2``;

const ProductDetails = (props: Props) => {
  return (
    <ProductContainer>
      <ProductWrapper>
        <ProductImage src={props.cover} alt={props.title} />
        <Details>
          <ProductTitle>{props.title}</ProductTitle>
          <h3>{`$${props.price}`}</h3>
          <p>{props.description}</p>
          <LargeAddToCartButton>Buy Now</LargeAddToCartButton>
        </Details>
      </ProductWrapper>
    </ProductContainer>
  );
};

export default ProductDetails;
