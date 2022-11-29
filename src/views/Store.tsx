import Container from "../features/ui/styles/Container";
import styled from "styled-components";
import ProductsAPIResponse from "../features/products/TypesProduct";
import { Link } from "react-router-dom";
import AlbumCover from "../features/products/StylesAlbumCover";

const StoreWrapper = styled.div`
  ${Container}
  display: grid;
  gap: 3rem;
  margin: 0 auto;
  padding-top: 20px;
  min-height: calc(100vh - 110px);
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 45%);
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 30%);
  }
`;

const StoreProduct = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-self: stretch;
  border-radius: 8px;
`;

const CoverWrapper = styled.div`
  margin: 0 auto;
  overflow: hidden;
  border-radius: 8px;
`;

const StoreAlbumCover = styled(AlbumCover)`
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  display: flex;
  transition: transform 0.2s;
  &:hover,
  &:focus-visible {
    transform: scale(1.15);
  }
`;

const ProductTitle = styled.h2`
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const ProductPrice = styled.h3`
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Store = (props: ProductsAPIResponse) => {
  return (
    <StoreWrapper as="ul">
      {props.data?.map((data) => (
        <StoreProduct key={data.id}>
          <CoverWrapper>
            <StyledLink
              to={`/${data.title?.replaceAll(" ", "-")}`}
              aria-label={`See details about the album ${data.title}`}
            >
              <StoreAlbumCover
                src={data.cover?.medium}
                srcSet={`${data.cover?.small} 250w, ${data.cover?.medium} 400w`}
                sizes="(min-width: 768px) 400px, 250px"
                alt={`Cover for the album ${data.title}`}
                height={"400"}
                width={"395"}
              />
            </StyledLink>
          </CoverWrapper>
          <ProductTitle>{data.title}</ProductTitle>
          <ProductPrice>${data.price}</ProductPrice>
        </StoreProduct>
      ))}
    </StoreWrapper>
  );
};

export default Store;
