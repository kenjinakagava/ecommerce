import styled from "styled-components";
import Container from "../Styles/Container";
import { ProductsAPIResponse } from "../Interface/index";
import CTAButton from "../Components/Buttons/CTAButton";
import AlbumCover from "../Styles/AlbumCover";

const ProductContainer = styled(Container)`
  padding: 1rem;
  min-height: calc(100vh - 110px);
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

// 1024 so the layout doesn't break on tablets

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
        <AlbumCover
          src={smallCover}
          srcSet={`${smallCover} 250w, ${mediumCover} 400w, ${bigCover} 679w`}
          width={679}
          height={671}
          sizes="(min-width: 1024px) 679px, (min-width: 768px) 400px, 250px"
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
