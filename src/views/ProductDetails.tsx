import styled from "styled-components";
import Container from "../features/ui/stylesa/Container";
import ProductsAPIResponse from "../features/products/TypesProduct";
import CTA from "../features/ui/stylesa/CTA";
import AlbumCover from "../features/products/StylesAlbumCover";
import ProductTitle from "../features/products/StylesProductTitle";
import ProductShortDescription from "../features/products/StylesProductShortDescription";
const ProductContainer = styled.div`
  ${Container}
  padding: 1rem;
  min-height: calc(100vh - 110px);
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

// 1024 so the layout doesn't break on tablets

const CTAButton = styled.button`
  ${CTA};
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
  flex: 1;
`;

const ProductDescription = styled(ProductShortDescription)`
  white-space: pre-line;
`;

const ProductPrice = styled.h3`
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProductDetails = (props: ProductsAPIResponse) => {
  return (
    <ProductContainer>
      <ProductWrapper>
        <div>
          {" "}
          {/* this div helps prevent layout shift by hinting to the browser the dimensions of our image*/}
          <AlbumCover
            src={props.cover?.large}
            srcSet={`${props.cover?.small} 250w, ${props.cover?.medium} 400w, ${props.cover?.large} 679w`}
            width={"679"}
            height={"671"}
            sizes="(min-width: 1200px) 679px, (min-width: 768px) 400px, 250px"
            alt={props.title}
          />
        </div>
        <Details>
          <ProductTitle>{props.title}</ProductTitle>
          <ProductPrice>{`$${props.price}`}</ProductPrice>
          <ProductDescription>{props.description}</ProductDescription>
          <CTAButton
            as={"a"}
            href={props.paymentLink}
            target="_blank"
            rel="noreferrer"
          >
            Buy Now
          </CTAButton>
        </Details>
      </ProductWrapper>
    </ProductContainer>
  );
};

export default ProductDetails;
