import ProductsAPIResponse from "../interfaces/TypesProduct";
import * as components from "./Store.styles";

const Store = (props: ProductsAPIResponse) => {
  return (
    <components.StoreWrapper as="ul">
      {props.data?.map((data) => (
        <components.StoreProduct key={data.id}>
          <components.CoverWrapper>
            <components.StyledLink
              to={`/${data.title?.replaceAll(" ", "-")}`}
              aria-label={`See details about the album ${data.title}`}
            >
              <components.StoreAlbumCover
                src={data.cover?.medium}
                srcSet={`${data.cover?.small} 250w, ${data.cover?.medium} 400w`}
                sizes="(min-width: 768px) 400px, 250px"
                alt={`Cover for the album ${data.title}`}
                height={"400"}
                width={"395"}
              />
            </components.StyledLink>
          </components.CoverWrapper>
          <components.ProductTitle>{data.title}</components.ProductTitle>
          <components.ProductPrice>${data.price}</components.ProductPrice>
        </components.StoreProduct>
      ))}
    </components.StoreWrapper>
  );
};

export default Store;
