import styled from "styled-components";
import CTA from "../../styles/CTA.styles";
import ProductTitle from "../products/ProductTile.styles";

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
  }
`;

export const SwiperItemProductTitle = styled(ProductTitle)`
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const ProductImageContainer = styled.div`
  max-width: 250px;
  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

export const ProductDisplayDescription = styled.div`
  max-width: 230px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 320px) {
    max-width: 250px;
  }
`;

export const CTAButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 320px) {
    justify-content: space-around;
  }
  @media (min-width: 768px) {
    gap: 1rem;
    justify-content: unset;
  }
`;

export const StyledCTAButton = styled.button`
  ${CTA}
  @media (min-width: 320px) {
    width: 45%;
  }
`;
