import { Link } from "react-router-dom";

import ProductsAPIResponse from "../../interfaces/TypesProduct";
import AlbumCover from "../products/AlbumCover.styles";
import ProductShortDescription from "../products/ProductShortDescription.styles";
import * as components from "./CarouselItems.styles";

const CarouselItem = (props: ProductsAPIResponse) => {
  return (
    <components.ProductWrapper>
      <components.ProductImageContainer>
        <AlbumCover
          src={props.cover?.medium}
          srcSet={`${props.cover?.small} 250w, ${props.cover?.medium} 400w`}
          sizes="(min-width: 768px) 400px, 250px"
          alt={props.title}
          width={"400"}
          height={"395"}
        />
      </components.ProductImageContainer>
      <components.ProductDisplayDescription>
        <components.SwiperItemProductTitle>
          {props.title}
        </components.SwiperItemProductTitle>
        <ProductShortDescription>
          {props.shortDescription}
        </ProductShortDescription>
        <components.CTAButtonGroup>
          <components.StyledCTAButton
            as={"a"}
            href={props.paymentLink}
            target={"_blank"}
            rel="noreferrer"
            aria-label={`Buy the album ${props.title}`}
            // aria-label here so the client knows what album he's buying
          >
            Add to Cart
          </components.StyledCTAButton>
          <components.StyledCTAButton
            as={Link}
            to={`/${props.title?.replaceAll(" ", "-")}`}
            aria-label={`View details about the album ${props.title}`}
            // aria-label here so the client knows which product he's going to see the details of
          >
            View Details
          </components.StyledCTAButton>
        </components.CTAButtonGroup>
      </components.ProductDisplayDescription>
    </components.ProductWrapper>
  );
};

export default CarouselItem;
