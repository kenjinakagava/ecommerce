import styled from "styled-components";
import VinylRecord from "./VinylRecord";
import AddToCartButton from "./Buttons/CTA/AddToCartButton";
import MoreInfo from "./Buttons/CTA/MoreInfoButton";

type Props = {
  productCover?: string;
  productTitle?: string;
  productDescription?: string;
};

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: unset;
    gap: 12.5rem;
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
  outline: 1px solid rgba(0, 0, 0, 0.1);
`;

const ProductDisplay = styled.div`
  position: relative;
  max-width: 250px;
  @media (max-width: 300px) {
    max-width: 200px;
  }
  @media (min-width: 768px) {
    max-width: 300px;
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

const Product = (props: Props) => {
  return (
    <ProductWrapper>
      <ProductDisplay>
        <ProductImage
          src="https://i.discogs.com/SnawLpfAfkiq0OBi_XrQcYR800JTylxd31hTAJ-csUw/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg1NDI0/MjEtMTYxMDM3NTI2/OS05OTAwLmpwZWc.jpeg"
          alt={"props.productAltText"}
        />
        <VinylRecord />
      </ProductDisplay>
      <ProductDisplayDescription>
        <ProductTitle>
          {props.productTitle}Hiroyuki Sawano – Guilty Crown Original Tracks
        </ProductTitle>
        <ProductShortDescription>
          {
            // add product description later
          }
          Everything about Guilty Crown is stylish. <br></br>Music producer
          Sawano Hiroyuki builds the damaged beauty of the war torn world
          through techno punk, pop and symphonic orchestra.
        </ProductShortDescription>
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
