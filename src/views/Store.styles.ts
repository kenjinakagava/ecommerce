import { Link } from "react-router-dom";
import styled from "styled-components";

import AlbumCover from "../features/products/AlbumCover.styles";
import Container from "../styles/Container.styles";

export const StoreWrapper = styled.div`
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

export const StoreProduct = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-self: stretch;
  border-radius: 8px;
`;

export const CoverWrapper = styled.div`
  margin: 0 auto;
  overflow: hidden;
  border-radius: 8px;
`;

export const StoreAlbumCover = styled(AlbumCover)`
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  display: flex;
  transition: transform 0.2s;
  &:hover,
  &:focus-visible {
    transform: scale(1.15);
  }
`;

export const ProductTitle = styled.h2`
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const ProductPrice = styled.h3`
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
