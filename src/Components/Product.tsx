import styled from "styled-components";
import AddToCartButton from "./Buttons/CTA/AddToCartButton";
import MoreInfo from "./Buttons/CTA/MoreInfoButton";
import { useContext } from "react";

{
  /*

type Props = {
  productCover?: string;
  productTitle?: string;
  productDescription?: string;
  productShortDescription?: string;
};
*/
}
const ProductWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: unset;
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
  position: relative;
  width: 100%;
  z-index: 4;
`;

const ProductDisplay = styled.div`
  position: relative;
  max-width: 250px;
  @media (max-width: 300px) {
    max-width: 200px;
  }
  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

const ProductDisplayDescription = styled.div`
  max-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CTAButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (min-width: 768px) {
    gap: 1rem;
    justify-content: unset;
  }
`;

const Product = () => {
  return (
    <ProductWrapper>
      <ProductDisplay>
        <ProductImage src={""} alt={"props.productAltText"} />
      </ProductDisplay>
      <ProductDisplayDescription>
        <ProductTitle></ProductTitle>
        <ProductShortDescription></ProductShortDescription>
        <CTAButtonGroup>
          <AddToCartButton />
          <MoreInfo />
        </CTAButtonGroup>
      </ProductDisplayDescription>
      {
        // make a vinyl record in css later
      }
    </ProductWrapper>
  );
};

export default Product;
