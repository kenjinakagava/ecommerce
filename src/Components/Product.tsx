import styled from "styled-components";
import VinylRecord from "./VinylRecord";

const ProductWrapper = styled.div``;

const ProductTitle = styled.h2``;

const ProductShortDescription = styled.span``;

const ProductImage = styled.img`
  position: relative;
  width: 100%;
  z-index: 4;
`;

const ProductDisplay = styled.div`
  position: relative;
  max-width: 250px;
  outline: 1px solid rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
    max-width: 300px;
  }
`;

const ProductDisplayDescription = styled.div``;

{
  // maybe separate some of these styled components so this one doesn't get overloaded, the functionality on this one should be to render the product
}

type Props = {
  productCover?: string;
  productTitle?: string;
  productShortDescription?: string;
  productDescription?: string;
  productAltText?: string;
};

{
  /*
  AltText and Short Description won't be handled by the api
  uppercase "S" refers to an object, lowercase "s" refers to just a string
  */
}

const Product = (props: Props) => {
  return (
    <ProductWrapper>
      <ProductDisplay>
        <ProductImage
          src="https://i.discogs.com/SnawLpfAfkiq0OBi_XrQcYR800JTylxd31hTAJ-csUw/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg1NDI0/MjEtMTYxMDM3NTI2/OS05OTAwLmpwZWc.jpeg"
          alt={props.productAltText}
        />
        <VinylRecord />
      </ProductDisplay>
      <ProductDisplayDescription>
        <ProductTitle>{props.productTitle}</ProductTitle>
        <ProductShortDescription>
          {props.productShortDescription}
        </ProductShortDescription>
      </ProductDisplayDescription>
      {
        // make a vinyl record in css later
      }
    </ProductWrapper>
  );
};

export default Product;
