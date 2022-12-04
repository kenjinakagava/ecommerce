import AlbumCover from "../features/products/AlbumCover.styles";
import ProductTitle from "../features/products/ProductTile.styles";
import ProductsAPIResponse from "../interfaces/TypesProduct";
import * as components from "./ProductDetails.styles";

const ProductDetails = (props: ProductsAPIResponse) => {
  return (
    <components.ProductContainer>
      <components.ProductWrapper>
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
        <components.Details>
          <ProductTitle>{props.title}</ProductTitle>
          <components.ProductPrice>{`$${props.price}`}</components.ProductPrice>
          <components.ProductDescription>
            {props.description}
          </components.ProductDescription>
          <components.CTAButton
            as={"a"}
            href={props.paymentLink}
            target="_blank"
            rel="noreferrer"
          >
            Buy Now
          </components.CTAButton>
        </components.Details>
      </components.ProductWrapper>
    </components.ProductContainer>
  );
};

export default ProductDetails;
